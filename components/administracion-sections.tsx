"use client"

import { YearTabs } from "@/components/year-tabs"
import { DocumentItem } from "@/components/document-item"
import { DocumentCard } from "@/components/document-card"
import {
  BookOpen,
  AlertTriangle,
  BarChart2,
  UserCheck,
  Target,
  Shield,
  ClipboardList,
  HeartHandshake,
  Key,
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
  "PLAN MUNICIPAL DE DESARROLLO": {
    label: "Plan Municipal de Desarrollo",
    description:
      "Documento estratégico rector que define las prioridades, metas y objetivos de la administración municipal para el período de gobierno.",
    icon: BookOpen,
  },
  "SERVIDORES PUBLICOS CON SANCIONES": {
    label: "Servidores Públicos con Sanciones",
    description:
      "Relación oficial de servidores públicos que han recibido sanciones administrativas, en cumplimiento de la Ley General de Responsabilidades Administrativas.",
    icon: AlertTriangle,
  },
  ESTADISTICAS: {
    label: "Estadísticas",
    description:
      "Indicadores estadísticos de atención y operación de las distintas áreas de la administración municipal, publicados trimestralmente.",
    icon: BarChart2,
  },
  CURRICULUMS: {
    label: "Currículums",
    description:
      "Currículums vitae de los servidores públicos de primer nivel del H. Ayuntamiento de Tecate, B.C., en cumplimiento a la Ley de Transparencia.",
    icon: UserCheck,
  },
  "METAS Y OBJETIVOS": {
    label: "Metas y Objetivos",
    description:
      "Informe trimestral de metas y objetivos alcanzados por las áreas administrativas del municipio para el ejercicio fiscal 2026.",
    icon: Target,
  },
  "DECLARACION PATRIMONIAL": {
    label: "Declaración Patrimonial",
    description:
      "Declaraciones patrimoniales presentadas por los servidores públicos municipales, en cumplimiento de las obligaciones de transparencia.",
    icon: Shield,
  },
  "TRAMITES OFRECIDOS": {
    label: "Trámites Ofrecidos",
    description:
      "Catálogo de trámites administrativos disponibles para la ciudadanía, con información de requisitos, costos y tiempos de respuesta.",
    icon: ClipboardList,
  },
  "SERVICIOS OFRECIDOS": {
    label: "Servicios Ofrecidos",
    description:
      "Servicios municipales disponibles para la ciudadanía, con información sobre cobertura, horarios y canales de acceso.",
    icon: HeartHandshake,
  },
  "LICENCIAS DE CONSTRUCCION": {
    label: "Licencias de Construcción",
    description:
      "Registro público de licencias de construcción emitidas por la Dirección de Gestión Integral del Territorio (DGIT).",
    icon: Key,
  },
  "LICENCIAS DE USO DE SUELO": {
    label: "Licencias de Uso de Suelo",
    description:
      "Registro público de licencias de uso de suelo emitidas por la Dirección de Gestión Integral del Territorio (DGIT).",
    icon: Key,
  },
  "PENSIONADOS Y JUBILADOS": {
    label: "Pensionados y Jubilados",
    description: "Listado de pensionados y jubilados del municipio, organizado por periodos trimestrales.",
    icon: UserCheck,
  },
}

const seccionOrder = [
  "PLAN MUNICIPAL DE DESARROLLO",
  "SERVIDORES PUBLICOS CON SANCIONES",
  "ESTADISTICAS",
  "CURRICULUMS",
  "PENSIONADOS Y JUBILADOS",
  "METAS Y OBJETIVOS",
  "DECLARACION PATRIMONIAL",
  "TRAMITES OFRECIDOS",
  "SERVICIOS OFRECIDOS",
  "LICENCIAS DE CONSTRUCCION",
  "LICENCIAS DE USO DE SUELO",
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

export function AdministracionSections({ documentos }: { documentos: DocType[] }) {
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
                    {docs.length > GRID_THRESHOLD ? (
                      /* ── Flat grid for large sections ── */
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
                    ) : !hasSubgroups ? (
                      /* ── Small flat list ── */
                      <DocList docs={docs} />
                    ) : (
                      /* ── Sub-grouped list (few docs total) ── */
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
