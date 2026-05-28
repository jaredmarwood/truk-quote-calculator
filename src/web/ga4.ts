/**
 * GA4 event tracking utility for the Quote Calculator.
 *
 * Uses the global `gtag` function provided by the gtag.js script in index.html.
 * All events are defensive — if gtag is not loaded (property not connected,
 * ad blocker, etc.) the app continues to work normally.
 *
 * Configuration: the MEASUREMENT_ID is injected at build time by Vite's `define`
 * plugin from the `.env.local` file.  The file is excluded from version control
 * so the real GA4 property ID never lands in git.
 *
 * Default fallback: G-XXXXXXXXXX (no-op until connected).
 *
 * Events tracked:
 * - page_view          — page loaded (sent via gtag config)
 * - calculator_start   — user enters values in calculator (first input change)
 * - quote_complete     — a complete quote result is computed (user sees results)
 * - sign_up_click      — user clicks sign up / get started button
 * - quote_equip_add    — user added equipment row
 * - quote_equip_remove — user removed equipment row
 */

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: Record<string, unknown>[]
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

/** Fire an analytics event. Silently no-ops if gtag not available. */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}

/** Fire a page_view event. */
export function trackPageView(pageTitle?: string, pagePath?: string): void {
  if (typeof window.gtag !== 'function') return
  window.gtag('config', MEASUREMENT_ID, {
    page_title: pageTitle || 'Quote Calculator',
    page_path: pagePath || window.location.pathname,
  })
}

/** Called when the first calculator input is changed (session start). */
export function trackCalculatorStart(
  field: string,
  value: string | number
): void {
  trackEvent('calculator_start', { field, value })
}

/** Called when a complete quote result is computed. */
export function trackQuoteComplete(
  fuelCost: number,
  totalCost: number,
  quotedPrice: number,
  equipmentCount: number
): void {
  trackEvent('quote_complete', {
    fuel_cost: Math.round(fuelCost * 100) / 100,
    total_cost: Math.round(totalCost * 100) / 100,
    quoted_price: Math.round(quotedPrice * 100) / 100,
    equipment_count: equipmentCount,
  })
}

/** Called when user clicks sign up / get started. */
export function trackSignUpClick(source: string = 'calculator'): void {
  trackEvent('sign_up_click', { source })
}

/** Called when user adds an equipment row. */
export function trackEquipAdd(): void {
  trackEvent('quote_equip_add')
}

/** Called when user removes an equipment row. */
export function trackEquipRemove(): void {
  trackEvent('quote_equip_remove')
}

/** Called when user submits passive feedback (star rating + optional comment). */
export function trackFeedbackSubmit(
  rating: number,
  comment: string,
  sentiment: 'positive' | 'neutral' | 'negative'
): void {
  trackEvent('feedback_submit', {
    rating,
    comment: comment || undefined,
    sentiment,
  })
}
