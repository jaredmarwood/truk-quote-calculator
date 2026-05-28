/**
 * GA4 event tracking utility for the Quote Calculator.
 *
 * Uses the global `gtag` function provided by the gtag.js script in index.html.
 * All events are defensive — if gtag is not loaded (property not connected,
 * ad blocker, etc.) the app continues to work normally.
 *
 * Events tracked:
 * - page_view          — calculator page loaded
 * - quote_input        — any input field changed (field name + value)
 * - quote_calculate    — a complete quote was produced (fire on every result change)
 * - quote_equip_add    — user added equipment row
 * - quote_equip_remove — user removed equipment row
 *
 * Configuration: replace MEASUREMENT_ID with the GA4 property ID once
 * the chair connects a GA4 property in the marwood admin UI.
 */

const MEASUREMENT_ID = 'G-XXXXXXXXXX' // TODO: replace with real GA4 measurement ID after chair connects property

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>
    ) => void
  }
}

/** Fire an analytics event. Silently no-ops if gtag not available. */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}

/** Fire a page_view event. */
export function trackPageView(pageTitle?: string): void {
  if (typeof window.gtag !== 'function') return
  window.gtag('config', MEASUREMENT_ID, {
    page_title: pageTitle || 'Quote Calculator',
    page_path: window.location.pathname,
  })
}

/** Called when any input field changes. */
export function trackQuoteInput(
  field: string,
  value: string | number
): void {
  trackEvent('quote_input', { field, value })
}

/** Called when a complete quote result is computed. */
export function trackQuoteCalculate(
  fuelCost: number,
  totalCost: number,
  quotedPrice: number,
  equipmentCount: number
): void {
  trackEvent('quote_calculate', {
    fuel_cost: Math.round(fuelCost * 100) / 100,
    total_cost: Math.round(totalCost * 100) / 100,
    quoted_price: Math.round(quotedPrice * 100) / 100,
    equipment_count: equipmentCount,
  })
}

/** Called when user adds an equipment row. */
export function trackEquipAdd(): void {
  trackEvent('quote_equip_add')
}

/** Called when user removes an equipment row. */
export function trackEquipRemove(): void {
  trackEvent('quote_equip_remove')
}
