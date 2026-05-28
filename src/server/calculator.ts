import { z } from "zod";

// --- Input schemas ---

const EquipmentRow = z.object({
  id: z.string(),
  equipmentType: z.string().min(1, "Equipment type required"),
  quantity: z.number().positive("Quantity must be positive"),
  hourlyRate: z.number().min(0, "Hourly rate must be >= 0"),
});

export const QuoteRequestSchema = z.object({
  // Route inputs
  distanceKm: z.number().positive("Distance must be positive"),
  fuelConsumption: z.number().positive("Fuel consumption must be positive"),
  dieselPrice: z.number().min(0, "Diesel price must be >= 0"),
  averageSpeed: z.number().positive("Average speed must be positive"),

  // Labour
  operatorHourlyRate: z.number().min(0, "Operator rate must be >= 0"),

  // Equipment
  equipment: z.array(EquipmentRow).min(1, "At least one equipment item required"),

  // Extras
  extras: z.array(z.object({
    id: z.string(),
    name: z.string().min(1, "Extra name required"),
    cost: z.number().min(0, "Cost must be >= 0"),
  })).optional().default([]),

  // Business info for branding
  businessName: z.string().default("Truk"),
  abn: z.string().default("55 695 551 538"),
  customerName: z.string().default("Customer"),
});

export type QuoteRequest = z.infer<typeof QuoteRequestSchema>;

export const QuoteResponseSchema = z.object({
  status: z.literal("ok"),
  quoteId: z.string(),
  timestamp: z.string(),
  businessName: z.string(),
  abn: z.string(),
  customerName: z.string(),
  lineItems: z.array(z.object({
    type: z.string(), // "fuel" | "equipment" | "labour" | "extra"
    name: z.string(),
    quantity: z.number().optional(),
    unit: z.string().optional(),
    unitPrice: z.number().optional(),
    cost: z.number(),
    hours: z.number().optional(),
  })),
  totalCost: z.number(),
  sellPrice: z.number().optional(),
  profitMargin: z.number().optional(),
  breakdown: z.object({
    fuelCost: z.number(),
    equipmentCost: z.number(),
    labourCost: z.number(),
    extrasCost: z.number(),
    totalCost: z.number(),
  }),
});

export type QuoteResponse = z.infer<typeof QuoteResponseSchema>;

// --- Calculation engine ---

export function calculateQuote(req: QuoteRequest): QuoteResponse {
  const jobHours = req.distanceKm / req.averageSpeed;

  // Fuel: (distance / 100) * consumption * dieselPrice
  const fuelCost = (req.distanceKm / 100) * req.fuelConsumption * req.dieselPrice;

  // Equipment cost per line: quantity * hourlyRate * jobHours
  const equipmentRows = req.equipment.map(eq => ({
    type: "equipment" as const,
    name: `${eq.equipmentType} (x${eq.quantity})`,
    quantity: eq.quantity,
    unit: "hrs",
    unitPrice: eq.hourlyRate,
    cost: eq.quantity * eq.hourlyRate * jobHours,
    hours: jobHours,
  }));

  const equipmentCost = equipmentRows.reduce((sum, r) => sum + r.cost, 0);

  // Labour cost: operatorHourlyRate * jobHours
  const labourCost = req.operatorHourlyRate * jobHours;

  // Extras
  const extrasRows = (req.extras || []).map(ex => ({
    type: "extra" as const,
    name: ex.name,
    cost: ex.cost,
  }));

  const extrasCost = (req.extras || []).reduce((sum, e) => sum + e.cost, 0);

  // Total
  const totalCost = fuelCost + equipmentCost + labourCost + extrasCost;

  const lineItems: Array<QuoteResponse["lineItems"][number]> = [
    {
      type: "fuel",
      name: "Fuel",
      quantity: req.distanceKm,
      unit: "km",
      unitPrice: req.dieselPrice,
      cost: fuelCost,
    },
    ...equipmentRows,
    {
      type: "labour",
      name: `Labour (${(req.distanceKm / req.averageSpeed).toFixed(1)} hrs)`,
      hours: jobHours,
      cost: labourCost,
    },
    ...extrasRows,
  ];

  return {
    status: "ok",
    quoteId: generateQuoteId(),
    timestamp: new Date().toISOString(),
    businessName: req.businessName,
    abn: req.abn,
    customerName: req.customerName,
    lineItems,
    totalCost,
    breakdown: {
      fuelCost,
      equipmentCost,
      labourCost,
      extrasCost,
      totalCost,
    },
  };
}

function generateQuoteId(): string {
  const parts = [];
  for (let i = 0; i < 8; i++) {
    parts.push(Math.floor(Math.random() * 16).toString(16));
  }
  return "TRK-" + parts.join("").toUpperCase();
}
