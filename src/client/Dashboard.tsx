import { useEffect, useState } from 'react'
import { trackPageView } from '../web/ga4'

interface WizardConfig {
  companyName?: string
  trucks?: number
  operatingStates?: string
  fuelDataMode?: 'auto' | 'manual'
}

function readConfig(): WizardConfig {
  try {
    const raw = localStorage.getItem('truk_wizard_config')
    if (raw) return JSON.parse(raw) as WizardConfig
  } catch { /* corrupt — fall through */ }
  return {}
}

function extractStates(raw: string | undefined): string[] {
  if (!raw) return []
  return raw
    .split(/[,\s]+/)
    .map(s => s.trim().toUpperCase())
    .filter(Boolean)
}

export default function Dashboard() {
  const [config] = useState<WizardConfig>(readConfig)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    trackPageView('Dashboard')
    setMounted(true)
  }, [])

  const stateList = extractStates(config.operatingStates)
  const companyName = config.companyName || 'Operator'
  const truckCount = config.trucks ?? 0

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo} data-testid="truk-logo">TRUK</div>
      </header>

      <main style={styles.main}>
        {/* Welcome */}
        <section style={styles.card}>
          <h1 style={styles.welcome}>
            Welcome to Truk, {companyName}!
          </h1>
          <p style={styles.welcomeSub}>
            Your command centre is ready.
          </p>
        </section>

        {/* Summary Cards */}
        <section style={styles.summaryGrid} data-testid="summary-cards">
          {/* Trucks */}
          <div style={styles.summaryCard} data-testid="trucks-card">
            <div style={styles.summaryIcon}>🚛</div>
            <div style={styles.summaryLabel}>Trucks</div>
            <div style={styles.summaryValue}>
              {mounted ? (
                truckCount > 0 ? truckCount : '—'
              ) : '—'}
            </div>
          </div>

          {/* States */}
          <div style={styles.summaryCard} data-testid="states-card">
            <div style={styles.summaryIcon}>🗺️</div>
            <div style={styles.summaryLabel}>States</div>
            <div style={styles.summaryValue}>
              {mounted ? (
                stateList.length > 0 ? stateList.join(', ') : '—'
              ) : '—'}
            </div>
          </div>

          {/* Fuel Data Mode */}
          <div style={styles.summaryCard} data-testid="fuel-mode-card">
            <div style={styles.summaryIcon}>⛽</div>
            <div style={styles.summaryLabel}>Fuel Data</div>
            <div style={styles.summaryValue}>
              <span style={styles.fuelModeBadge}>
                {mounted ? (
                  (config.fuelDataMode || 'auto') === 'auto'
                    ? 'Auto (live)'
                    : 'Manual entry'
                ) : '—'}
              </span>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>Quick Actions</h2>
          <a href="/calculator" style={styles.actionLink} data-testid="action-calculator">
            <span style={styles.actionIcon}>🧮</span>
            <span style={styles.actionText}>Open Quote Calculator</span>
            <span style={styles.actionChevron}>›</span>
          </a>
          <a href="/" style={styles.actionLink} data-testid="action-settings">
            <span style={styles.actionIcon}>⚙️</span>
            <span style={styles.actionText}>Edit your settings</span>
            <span style={styles.actionChevron}>›</span>
          </a>
        </section>

        {/* Empty State — Future Quotes */}
        <section style={styles.card}>
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>📋</div>
            <h3 style={styles.emptyTitle}>Your quotes</h3>
            <p style={styles.emptyText}>
              Your quotes will appear here once you start calculating.
            </p>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        Truk v0.1 — Flat monthly fee. No per-truck charges.
      </footer>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 480,
    margin: '0 auto',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: '#e0e0e0',
    background: '#1a1a2e',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '16px',
    borderBottom: '1px solid #0f3460',
  },
  logo: {
    fontSize: 20,
    fontWeight: 800,
    color: '#00d4aa',
    letterSpacing: 2,
  },
  main: {
    flex: 1,
    padding: '0 16px 16px',
  },
  card: {
    background: '#16213e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    border: '1px solid #0f3460',
  },
  welcome: {
    fontSize: 22,
    fontWeight: 700,
    color: '#00d4aa',
    margin: '0 0 4px',
  },
  welcomeSub: {
    fontSize: 14,
    color: '#a0a0b8',
    margin: 0,
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 10,
    marginBottom: 16,
  },
  summaryCard: {
    background: '#16213e',
    borderRadius: 12,
    padding: '12px 8px',
    border: '1px solid #0f3460',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  summaryIcon: {
    fontSize: 22,
  },
  summaryLabel: {
    fontSize: 11,
    color: '#a0a0b8',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  summaryValue: {
    fontSize: 13,
    fontWeight: 600,
    color: '#e0e0e0',
    textAlign: 'center',
  },
  fuelModeBadge: {
    background: '#0f3460',
    padding: '3px 8px',
    borderRadius: 6,
    fontSize: 11,
    color: '#00d4aa',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: '#00d4aa',
    margin: '0 0 12px',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  actionLink: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px 0',
    borderBottom: '1px solid #0f346044',
    color: '#e0e0e0',
    textDecoration: 'none',
    fontSize: 15,
    fontWeight: 500,
  },
  actionIcon: {
    fontSize: 18,
  },
  actionText: {
    flex: 1,
  },
  actionChevron: {
    fontSize: 20,
    color: '#a0a0b8',
  },
  emptyState: {
    textAlign: 'center',
    padding: '20px 0',
  },
  emptyIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: '#a0a0b8',
    margin: '0 0 6px',
  },
  emptyText: {
    fontSize: 13,
    color: '#6a6a8a',
    margin: 0,
  },
  footer: {
    padding: '16px',
    textAlign: 'center',
    fontSize: 11,
    color: '#4a4a6a',
    borderTop: '1px solid #0f3460',
  },
}
