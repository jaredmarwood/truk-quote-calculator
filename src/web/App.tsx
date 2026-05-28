import { useState, useCallback, useEffect } from 'react'

interface EquipmentRow {
  id: string
  type: string
  quantity: number
  hourlyRate: number
}

interface QuoteInputs {
  distance: string
  consumption: string
  dieselPrice: string
  avgSpeed: string
  equipment: EquipmentRow[]
  labourRate: string
}

interface QuoteResult {
  fuelCost: number
  equipmentCosts: { type: string; cost: number }[]
  labourCost: number
  totalCost: number
  marginPercent: number
  quotedPrice: number
}

const uid = () => Math.random().toString(36).slice(2, 9)

const defaultEquipment = (): EquipmentRow => ({
  id: uid(),
  type: '',
  quantity: 1,
  hourlyRate: 0,
})

function calculate(inputs: QuoteInputs): QuoteResult {
  const distance = parseFloat(inputs.distance) || 0
  const consumption = parseFloat(inputs.consumption) || 0
  const dieselPrice = parseFloat(inputs.dieselPrice) || 0
  const avgSpeed = parseFloat(inputs.avgSpeed) || 1
  const labourRate = parseFloat(inputs.labourRate) || 0

  const fuelCost = (distance / 100) * consumption * dieselPrice

  const tripHours = distance / avgSpeed

  const equipmentCosts = inputs.equipment
    .filter((e) => e.type && e.quantity > 0)
    .map((e) => ({
      type: e.type,
      cost: e.quantity * e.hourlyRate * tripHours,
    }))

  const equipmentTotal = equipmentCosts.reduce((s, e) => s + e.cost, 0)
  const labourCost = labourRate * tripHours
  const totalCost = fuelCost + equipmentTotal + labourCost
  const marginPercent = 15
  const quotedPrice = totalCost * (1 + marginPercent / 100)

  return {
    fuelCost,
    equipmentCosts,
    labourCost,
    totalCost,
    marginPercent,
    quotedPrice,
  }
}

export default function App() {
  const [inputs, setInputs] = useState<QuoteInputs>({
    distance: '500',
    consumption: '35',
    dieselPrice: '1.80',
    avgSpeed: '80',
    equipment: [{ ...defaultEquipment(), type: 'Dump Trailer', hourlyRate: 150 }],
    labourRate: '85',
  })

  // Fetch live diesel price from backend API on mount
  useEffect(() => {
    fetch('/api/fuel-price')
      .then((res) => res.json())
      .then((data) => {
        if (data.pricePerL) {
          setInputs((prev) => ({ ...prev, dieselPrice: data.pricePerL.toFixed(2) }))
        }
      })
      .catch(() => {
        // If API is unavailable, keep the default 1.80
      })
  }, [])

  const result = calculate(inputs)

  const updateField = (field: keyof QuoteInputs, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }))
  }

  const updateEquipment = (id: string, field: keyof EquipmentRow, value: string | number) => {
    setInputs((prev) => ({
      ...prev,
      equipment: prev.equipment.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    }))
  }

  const addEquipment = () => {
    setInputs((prev) => ({ ...prev, equipment: [...prev.equipment, defaultEquipment()] }))
  }

  const removeEquipment = (id: string) => {
    setInputs((prev) => ({
      ...prev,
      equipment: prev.equipment.filter((e) => e.id !== id),
    }))
  }

  const fmt = (n: number) => `$${n.toFixed(2)}`

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Quote Calculator</h1>

      {/* Route */}
      <section style={styles.card}>
        <h2 style={styles.h2}>Route</h2>
        <div style={styles.grid}>
          <Field label="Distance (km)" value={inputs.distance} onChange={(v) => updateField('distance', v)} type="number" />
          <Field label="Fuel Consumption (L/100km)" value={inputs.consumption} onChange={(v) => updateField('consumption', v)} type="number" />
          <Field label="Diesel Price ($/L)" value={inputs.dieselPrice} onChange={(v) => updateField('dieselPrice', v)} type="number" />
          <Field label="Avg Speed (km/h)" value={inputs.avgSpeed} onChange={(v) => updateField('avgSpeed', v)} type="number" />
        </div>
      </section>

      {/* Equipment */}
      <section style={styles.card}>
        <h2 style={styles.h2}>Equipment</h2>
        {inputs.equipment.map((eq) => (
          <div key={eq.id} style={styles.eqRow}>
            <input
              style={styles.eqInput}
              placeholder="Type (e.g. Excavator)"
              value={eq.type}
              onChange={(e) => updateEquipment(eq.id, 'type', e.target.value)}
            />
            <input
              style={{ ...styles.eqInput, width: 70 }}
              type="number"
              placeholder="Qty"
              value={eq.quantity}
              onChange={(e) => updateEquipment(eq.id, 'quantity', parseFloat(e.target.value) || 0)}
            />
            <input
              style={{ ...styles.eqInput, width: 100 }}
              type="number"
              placeholder="Rate/hr"
              value={eq.hourlyRate}
              onChange={(e) => updateEquipment(eq.id, 'hourlyRate', parseFloat(e.target.value) || 0)}
            />
            <button style={styles.removeBtn} onClick={() => removeEquipment(eq.id)} aria-label="Remove equipment">✕</button>
          </div>
        ))}
        <button style={styles.addBtn} onClick={addEquipment}>+ Add Equipment</button>
      </section>

      {/* Labour */}
      <section style={styles.card}>
        <h2 style={styles.h2}>Labour</h2>
        <Field label="Operator Rate ($/hr)" value={inputs.labourRate} onChange={(v) => updateField('labourRate', v)} type="number" />
      </section>

      {/* Results */}
      <section style={styles.card}>
        <h2 style={styles.h2}>Quote Breakdown</h2>
        <div style={styles.resultRow}>
          <span>Fuel Cost</span><span>{fmt(result.fuelCost)}</span>
        </div>
        {result.equipmentCosts.map((ec) => (
          <div key={ec.type} style={styles.resultRow}>
            <span>Equipment — {ec.type}</span><span>{fmt(ec.cost)}</span>
          </div>
        ))}
        <div style={styles.resultRow}>
          <span>Labour</span><span>{fmt(result.labourCost)}</span>
        </div>
        <div style={{ ...styles.resultRow, ...styles.divider }}>
          <span>Total Cost</span><span>{fmt(result.totalCost)}</span>
        </div>
        <div style={styles.resultRow}>
          <span>Margin ({result.marginPercent}%)</span><span>+{fmt(result.totalCost * result.marginPercent / 100)}</span>
        </div>
        <div style={{ ...styles.resultRow, ...styles.totalRow }}>
          <span>Quoted Price</span><span style={{ fontSize: 22 }}>{fmt(result.quotedPrice)}</span>
        </div>
      </section>
    </div>
  )
}

function Field({ label, value, onChange, type = 'text' }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div style={styles.field}>
      <label style={styles.label}>{label}</label>
      <input
        style={styles.input}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: { maxWidth: 480, margin: '0 auto', padding: 16, fontFamily: '-apple-system, sans-serif', color: '#e0e0e0', background: '#1a1a2e', minHeight: '100vh' },
  title: { fontSize: 24, fontWeight: 700, textAlign: 'center', marginBottom: 20, color: '#00d4aa' },
  card: { background: '#16213e', borderRadius: 12, padding: 16, marginBottom: 16, border: '1px solid #0f3460' },
  h2: { fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#00d4aa', margin: '0 0 12px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 },
  field: { display: 'flex', flexDirection: 'column', gap: 4 },
  label: { fontSize: 12, color: '#a0a0b8' },
  input: { background: '#1a1a2e', border: '1px solid #0f3460', borderRadius: 8, padding: '10px 12px', color: '#e0e0e0', fontSize: 15, outline: 'none' },
  eqRow: { display: 'flex', gap: 8, marginBottom: 8, alignItems: 'center' },
  eqInput: { flex: 1, background: '#1a1a2e', border: '1px solid #0f3460', borderRadius: 8, padding: '10px 12px', color: '#e0e0e0', fontSize: 15, outline: 'none' },
  addBtn: { width: '100%', padding: 10, background: '#0f3460', color: '#00d4aa', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', marginTop: 4 },
  removeBtn: { width: 32, height: 32, background: '#e94560', color: '#fff', border: 'none', borderRadius: 8, fontSize: 14, cursor: 'pointer', flexShrink: 0 },
  resultRow: { display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #0f346044' },
  divider: { borderTop: '2px solid #00d4aa', marginTop: 4 },
  totalRow: { fontSize: 18, fontWeight: 700, color: '#00d4aa', paddingTop: 12 },
}
