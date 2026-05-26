"use client"

import { YearTabs } from "@/components/year-tabs"
import { DocumentItem } from "@/components/document-item"
import { DocumentCard } from "@/components/document-card"
import {
  Wallet,
  TrendingUp,
  FileSpreadsheet,
  PieChart,
  DollarSign,
  Users,
  FileText,
  HeartHandshake,
  ClipboardList,
  Scale,
  ChevronDown,
  ChevronRight,
} from "lucide-react"

/** Threshold: above this count, switch to compact card grid */
const GRID_THRESHOLD = 4

type DocType = {
  title: string
  description?: string
  date?: string
  url?: string
  subsection?: string
  subsubsection?: string
  [key: string]: unknown
}

const seccionConfig: Record<
  string,
  {
    label: string
    description: string
    icon: React.ComponentType<{ className?: string }>
  }
> = {
  "ADJUDICACIONES DIRECTAS": {
    label: "Adjudicaciones Directas",
    description: "Información sobre procedimientos de adjudicación directa.",
    icon: FileSpreadsheet,
  },
  "AUDITORIAS": {
    label: "Auditorías",
    description: "Resultados e informes de las auditorías realizadas al municipio.",
    icon: ClipboardList,
  },
  "CONVENIOS Y CONTRATOS": {
    label: "Convenios y Contratos",
    description: "Registro de convenios y contratos celebrados por la administración.",
    icon: FileText,
  },
  "AYUDAS SOCIALES": {
    label: "Ayudas Sociales",
    description: "Subsidios, apoyos y ayudas sociales otorgadas a la ciudadanía.",
    icon: HeartHandshake,
  },
  "DEUDA PUBLICA": {
    label: "Deuda Pública",
    description: "Información detallada sobre el estado de la deuda pública municipal.",
    icon: TrendingUp,
  },
  "DICTAMENES": {
    label: "Dictámenes",
    description: "Dictámenes emitidos en materia financiera.",
    icon: Scale,
  },
  "ESTADOS FINANCIEROS Y CUENTAS PUBLICAS": {
    label: "Estados Financieros y Cuentas Públicas",
    description: "Reportes financieros, balances y cuentas públicas de cada ejercicio.",
    icon: FileSpreadsheet,
  },
  "GASTOS": {
    label: "Gastos",
    description: "Registro de gastos operativos, viáticos, representación y publicidad.",
    icon: Wallet,
  },
  "LEY DE INGRESOS": {
    label: "Ley de Ingresos",
    description: "Leyes de ingresos aprobadas para los ejercicios fiscales correspondientes.",
    icon: DollarSign,
  },
  "PADRON DE PROVEEDORES": {
    label: "Padrón de Proveedores",
    description: "Listado oficial de proveedores y prestadores de servicios del municipio.",
    icon: Users,
  },
  "LICITACIONES": {
    label: "Licitaciones",
    description: "Información y convocatorias de licitaciones públicas.",
    icon: FileText,
  },
  "PRESUPUESTOS": {
    label: "Presupuestos",
    description: "Presupuestos de ingresos y egresos asignados y ejercidos.",
    icon: PieChart,
  },
  "INVENTARIO DE BIENES": {
    label: "Inventario de Bienes",
    description: "Inventario general de bienes muebles e inmuebles propiedad del municipio.",
    icon: ClipboardList,
  },
}

const seccionOrder = [
  "ADJUDICACIONES DIRECTAS",
  "AUDITORIAS",
  "CONVENIOS Y CONTRATOS",
  "AYUDAS SOCIALES",
  "DEUDA PUBLICA",
  "DICTAMENES",
  "ESTADOS FINANCIEROS Y CUENTAS PUBLICAS",
  "GASTOS",
  "LEY DE INGRESOS",
  "PADRON DE PROVEEDORES",
  "LICITACIONES",
  "PRESUPUESTOS",
  "INVENTARIO DE BIENES"
]

/** Renders a document list or compact grid depending on item count */
function DocList({
  docs,
}: {
  docs: Array<{ title: string; description?: string; date?: string; url?: string }>
}) {
  if (docs.length > GRID_THRESHOLD) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
        {docs.map((doc, i) => (
          <DocumentCard
            key={i}
            title={doc.title}
            description={doc.description}
            date={doc.date}
            downloadUrl={doc.url}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="divide-y divide-border">
      {docs.map((doc, i) => (
        <DocumentItem
          key={i}
          title={doc.title}
          description={doc.description}
          date={doc.date}
          downloadUrl={doc.url}
        />
      ))}
    </div>
  )
}

export function FinanzasSections({ documentos }: { documentos: DocType[] }) {
  return (
    <YearTabs documentos={documentos}>
      {(filtered) => {
        const grouped = seccionOrder.reduce<Record<string, DocType[]>>(
          (acc, key) => {
            acc[key] = filtered.filter((d) => d.subsection === key)
            return acc
          },
          {}
        )

        return (
          <div className="space-y-3">
            {seccionOrder.map((key) => {
              const docs = grouped[key]
              if (!docs || docs.length === 0) return null

              const config = seccionConfig[key]
              if (!config) return null
              const Icon = config.icon

              const hasSubgroups = docs.some((d) => d.subsubsection)

              // Build sub-groups if needed
              const subGroups: Record<string, DocType[]> = {}
              if (hasSubgroups) {
                docs.forEach((doc) => {
                  const sub = doc.subsubsection ?? "General"
                  if (!subGroups[sub]) subGroups[sub] = []
                  subGroups[sub].push(doc)
                })
              }

              return (
                <details
                  key={key}
                  id={`section-${key}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm group-open:border-primary/40 group-open:shadow-md"
                >
                  {/* ── Collapsible header (summary) ── */}
                  <summary className="flex items-center gap-4 px-5 py-4 cursor-pointer list-none hover:bg-primary/5 group-open:bg-primary/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-foreground text-sm">{config.label}</span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                          {docs.length} {docs.length === 1 ? "doc." : "docs."}
                        </span>
                        {docs.length > GRID_THRESHOLD && (
                          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-primary/10 text-primary hidden sm:inline">
                            Vista en cuadrícula
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1 hidden sm:block">
                        {config.description}
                      </p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>

                  {/* ── Content ── */}
                  <div className="border-t border-border">
                    {!hasSubgroups ? (
                      <DocList docs={docs} />
                    ) : (
                      <div className="divide-y divide-border">
                        {Object.entries(subGroups).map(([subKey, subDocs]) => (
                          <div key={subKey}>
                            <div className="flex items-center gap-2 px-5 py-2.5 bg-primary/5">
                              <ChevronRight className="h-3.5 w-3.5 text-primary" />
                              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                {subKey}
                              </span>
                              <span className="text-[10px] text-muted-foreground ml-auto">
                                {subDocs.length} {subDocs.length === 1 ? "doc." : "docs."}
                              </span>
                            </div>
                            <DocList docs={subDocs} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </details>
              )
            })}
          </div>
        )
      }}
    </YearTabs>
  )
}
