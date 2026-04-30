import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DocumentItem } from "@/components/document-item"
import { DocumentCard } from "@/components/document-card"
import { finanzasData } from "@/lib/data"
import {
  Wallet,
  TrendingUp,
  FileSpreadsheet,
  PieChart,
  DollarSign,
  Users,
  ChevronDown,
  ChevronRight,
  FileText,
  HeartHandshake,
  ClipboardList,
  Scale
} from "lucide-react"

/** Threshold: above this count, switch to compact card grid */
const GRID_THRESHOLD = 4

const seccionConfig: Record<
  string,
  {
    label: string
    description: string
    bg: string
    icon: React.ComponentType<{ className?: string }>
  }
> = {
  "ADJUDICACIONES DIRECTAS": {
    label: "Adjudicaciones Directas",
    description: "Información sobre procedimientos de adjudicación directa.",
    bg: "bg-background",
    icon: FileSpreadsheet,
  },
  "AUDITORIAS": {
    label: "Auditorías",
    description: "Resultados e informes de las auditorías realizadas al municipio.",
    bg: "bg-muted",
    icon: ClipboardList,
  },
  "CONVENIOS Y CONTRATOS": {
    label: "Convenios y Contratos",
    description: "Registro de convenios y contratos celebrados por la administración.",
    bg: "bg-background",
    icon: FileText,
  },
  "AYUDAS SOCIALES": {
    label: "Ayudas Sociales",
    description: "Subsidios, apoyos y ayudas sociales otorgadas a la ciudadanía.",
    bg: "bg-muted",
    icon: HeartHandshake,
  },
  "DEUDA PUBLICA": {
    label: "Deuda Pública",
    description: "Información detallada sobre el estado de la deuda pública municipal.",
    bg: "bg-background",
    icon: TrendingUp,
  },
  "DICTAMENES": {
    label: "Dictámenes",
    description: "Dictámenes emitidos en materia financiera.",
    bg: "bg-muted",
    icon: Scale,
  },
  "ESTADOS FINANCIEROS Y CUENTAS PUBLICAS": {
    label: "Estados Financieros y Cuentas Públicas",
    description: "Reportes financieros, balances y cuentas públicas de cada ejercicio.",
    bg: "bg-background",
    icon: FileSpreadsheet,
  },
  "GASTOS": {
    label: "Gastos",
    description: "Registro de gastos operativos, viáticos, representación y publicidad.",
    bg: "bg-muted",
    icon: Wallet,
  },
  "LEY DE INGRESOS": {
    label: "Ley de Ingresos",
    description: "Leyes de ingresos aprobadas para los ejercicios fiscales correspondientes.",
    bg: "bg-background",
    icon: DollarSign,
  },
  "PADRON DE PROVEEDORES": {
    label: "Padrón de Proveedores",
    description: "Listado oficial de proveedores y prestadores de servicios del municipio.",
    bg: "bg-muted",
    icon: Users,
  },
  "LICITACIONES": {
    label: "Licitaciones",
    description: "Información y convocatorias de licitaciones públicas.",
    bg: "bg-background",
    icon: FileText,
  },
  "PRESUPUESTOS": {
    label: "Presupuestos",
    description: "Presupuestos de ingresos y egresos asignados y ejercidos.",
    bg: "bg-muted",
    icon: PieChart,
  },
  "INVENTARIO DE BIENES": {
    label: "Inventario de Bienes",
    description: "Inventario general de bienes muebles e inmuebles propiedad del municipio.",
    bg: "bg-background",
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

export default function FinanzasPage() {
  const grouped = seccionOrder.reduce<Record<string, typeof finanzasData.documentos>>(
    (acc, key) => {
      acc[key] = finanzasData.documentos.filter((d) => d.subsection === key)
      return acc
    },
    {}
  )

  const totalDocs = finanzasData.documentos.length
  const totalSecciones = seccionOrder.filter((k) => (grouped[k]?.length ?? 0) > 0).length

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="bg-primary py-14 lg:py-20 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-white/5" />

          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-primary-foreground/60 mb-3">
                  <FileSpreadsheet className="h-3.5 w-3.5" />
                  H. Ayuntamiento de Tecate, B.C.
                </span>
                <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                  Finanzas
                </h1>
                <p className="mt-4 text-primary-foreground/75 max-w-2xl leading-relaxed text-base lg:text-lg">
                  Consulta la información financiera pública del municipio: presupuestos,
                  estados financieros, gastos, padrón de proveedores, auditorías y más.
                </p>
              </div>
              <div className="flex gap-4 flex-shrink-0">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-center min-w-[90px]">
                  <p className="text-3xl font-bold text-primary-foreground">{totalDocs}</p>
                  <p className="text-xs text-primary-foreground/70 mt-1">Documentos</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-center min-w-[90px]">
                  <p className="text-3xl font-bold text-primary-foreground">{totalSecciones}</p>
                  <p className="text-xs text-primary-foreground/70 mt-1">Secciones</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-center min-w-[90px]">
                  <p className="text-3xl font-bold text-primary-foreground">2026</p>
                  <p className="text-xs text-primary-foreground/70 mt-1">Ejercicio</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Secciones colapsables ─────────────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 space-y-3">
          {seccionOrder.map((key) => {
            const docs = grouped[key]
            if (!docs || docs.length === 0) return null

            const config = seccionConfig[key]
            const Icon = config.icon

            type DocWithSub = typeof docs[number] & { subsubsection?: string }
            const hasSubgroups = docs.some((d) => (d as DocWithSub).subsubsection)

            // Build sub-groups if needed
            const subGroups: Record<string, DocWithSub[]> = {}
            if (hasSubgroups) {
              ;(docs as DocWithSub[]).forEach((doc) => {
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
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  {/* Title + description */}
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

                  {/* Chevron */}
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
                          {/* Sub-group label */}
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

        {/* ── Footer CTA ────────────────────────────────────────────── */}
        <section className="bg-primary/5 border-t border-border py-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground">
              La información publicada en esta sección es de carácter público y se actualiza
              periódicamente conforme a la normatividad de transparencia.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
