// FuelWatch WA RSS — pure parser functions for diesel price data.
// Uses regex over XML (no external parser dependency).
// Prices come in cents/litre (c/L); convert to $/L by dividing by 100.

const FUELWATCH_FEED_URL =
  "https://www.fuelwatch.wa.gov.au/fuelwatch/fuelWatchRSS?Product=4&Suburb=Perth&Day=tomorrow";

// Remote/outlier threshold — mining town diesel is ~400-450 c/L, metro is ~170-180 c/L.
// Stations above 300 c/L are filtered as remote outliers.
const REMOTE_PRICE_THRESHOLD_CENTS = 300;

export interface StationPrice {
  name: string;
  priceCentsPerL: number;
  address: string;
  suburb: string;
  isRemote: boolean;
}

export interface FuelPriceResponse {
  /** Average price of metro (non-remote) stations in $/L, or null if none found. */
  averagePricePerL: number | null;
  /** Number of stations parsed (total). */
  stationCount: number;
  /** Number of metro stations (after filtering). */
  metroStationCount: number;
  /** Raw parsed stations. */
  stations: StationPrice[];
  /** Timestamp when data was cached. */
  cachedAt: string;
  /** True if data was fetched from cache (not live). */
  isCached: boolean;
}

/**
 * Extract a substring between two markers from XML content.
 */
function extractBetween(content: string, open: string, close: string): string {
  const idx = content.indexOf(open);
  if (idx === -1) return "";
  const after = content.slice(idx + open.length);
  const closeIdx = after.indexOf(close);
  if (closeIdx === -1) return after;
  return after.slice(0, closeIdx);
}

/**
 * Parse a single FuelWatch RSS XML string into an array of station prices.
 * Uses regex-based XML extraction — no external dependencies.
 */
export function parseFuelWatchRSS(xml: string): StationPrice[] {
  // Split into item blocks
  const items = xml.split("<item>");
  const stations: StationPrice[] = [];

  for (const item of items) {
    if (!item.includes("</item>")) continue;

    const name = extractBetween(item, "<trading-name>", "</trading-name>")
      .trim();
    const priceStr = extractBetween(item, "<price>", "</price>")
      .trim();
    const address = extractBetween(item, "<address>", "</address>")
      .trim();

    if (!name || !priceStr) continue;

    const priceCents = parseInt(priceStr, 10);
    if (isNaN(priceCents)) continue;

    // Derive suburb from address (first word after street number, or last token)
    const suburb = address.split(" ").slice(-1)[0] || "";

    stations.push({
      name,
      priceCentsPerL: priceCents,
      address,
      suburb,
      isRemote: priceCents > REMOTE_PRICE_THRESHOLD_CENTS,
    });
  }

  return stations;
}

/**
 * Compute the average price (in $/L) from an array of stations,
 * excluding remote outliers above REMOTE_PRICE_THRESHOLD_CENTS.
 */
export function getAveragePrice(stations: StationPrice[]): number | null {
  const metro = stations.filter((s) => !s.isRemote);
  if (metro.length === 0) return null;

  const total = metro.reduce((sum, s) => sum + s.priceCentsPerL, 0);
  return Math.round((total / metro.length / 100) * 100) / 100; // round to 2 decimals
}

/**
 * Fetch live FuelWatch WA diesel prices and return a structured response.
 * Returns cached fallback data if the fetch fails.
 *
 * @param cachedData — Optional previous response to return as fallback on network failure.
 */
export async function fetchFuelPrice(
  cachedData?: FuelPriceResponse
): Promise<FuelPriceResponse> {
  try {
    const response = await fetch(FUELWATCH_FEED_URL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const xml = await response.text();
    const stations = parseFuelWatchRSS(xml);
    const averagePrice = getAveragePrice(stations);

    return {
      averagePricePerL: averagePrice,
      stationCount: stations.length,
      metroStationCount: stations.filter((s) => !s.isRemote).length,
      stations,
      cachedAt: new Date().toISOString(),
      isCached: false,
    };
  } catch (_err) {
    // Network failure or parse error — fall back to cached data
    if (cachedData) {
      return {
        ...cachedData,
        isCached: true,
      };
    }
    // No cache available — return a default metro price range
    // This is a conservative fallback (~180 c/L = $1.80/L, typical Perth metro)
    return {
      averagePricePerL: 1.8,
      stationCount: 0,
      metroStationCount: 0,
      stations: [],
      cachedAt: new Date().toISOString(),
      isCached: false,
    };
  }
}

/**
 * Read a cached price from localStorage (for offline browser fallback).
 */
export function readCachedPrice(): FuelPriceResponse | null {
  try {
    const raw = localStorage.getItem("truk_fuel_price_cache");
    if (!raw) return null;
    return JSON.parse(raw) as FuelPriceResponse;
  } catch {
    return null;
  }
}

/**
 * Write a price response to localStorage for offline fallback.
 */
export function writeCachedPrice(data: FuelPriceResponse): void {
  try {
    localStorage.setItem("truk_fuel_price_cache", JSON.stringify(data));
  } catch {
    // localStorage full or disabled — silently ignore
  }
}
