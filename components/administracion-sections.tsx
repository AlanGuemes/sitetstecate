"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
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
  Folder,
  Search,
  X,
} from "lucide-react"

/** Threshold: above this count, switch to compact card grid */
const GRID_THRESHOLD = 4

type DocType = {
  title: string
  description?: string
  date?: string
  url?: string
  trimestre?: number
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
  "PENSIONADOS Y JUBILADOS",
  "METAS Y OBJETIVOS",
  "DECLARACION PATRIMONIAL",
  "TRAMITES OFRECIDOS",
  "SERVICIOS OFRECIDOS",
  "LICENCIAS DE CONSTRUCCION",
  "LICENCIAS DE USO DE SUELO",
]

/** Renders a unified vertical list for documents with alternating backgrounds and optional search/filter */
function DocList({
  docs,
  showFilters = false,
}: {
  docs: DocType[]
  showFilters?: boolean
}) {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const isLargeGroup = showFilters && docs.length >= 10

  // Extract first letter of each document title
  const getFirstLetter = (t: string): string => {
    const match = t.match(/[a-zA-ZáéíóúñÁÉÍÓÚÑ]/)
    return match ? match[0].toUpperCase() : "#"
  }

  // Get unique letters that have documents
  const availableLetters = Array.from(
    new Set(docs.map((doc) => getFirstLetter(doc.title)))
  ).sort()

  // Normalize text for accent-insensitive search
  const normalizeText = (text: string) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

  // Filter documents by selected letter AND search query
  const filteredDocs = docs.filter((doc) => {
    const matchesLetter = selectedLetter ? getFirstLetter(doc.title) === selectedLetter : true
    const matchesQuery = searchQuery
      ? normalizeText(doc.title).includes(normalizeText(searchQuery)) ||
      (doc.description && normalizeText(doc.description).includes(normalizeText(searchQuery)))
      : true
    return matchesLetter && matchesQuery
  })

  return (
    <div className="flex flex-col">
      {/* Search Bar + Alphabet Filter Container (only if enabled and 10+ documents) */}
      {isLargeGroup && (
        <div className="flex flex-col gap-2 p-3 bg-muted/15 border-b border-border/50 select-none">
          {/* Intelligent Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por título o descripción..."
              className="w-full pl-9 pr-8 py-1.5 bg-background border border-border rounded-lg text-xs outline-none focus:border-primary/45 transition-colors placeholder:text-muted-foreground/60 text-foreground"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Alphabet Filter */}
          {availableLetters.length > 1 && (
            <div className="flex flex-wrap items-center gap-1 mt-1 select-none">
              <span className="text-[10px] font-semibold text-muted-foreground mr-1.5">
                Inicial:
              </span>
              <button
                onClick={() => setSelectedLetter(null)}
                className={cn(
                  "px-2 py-0.5 rounded text-[10px] font-bold transition-colors border",
                  selectedLetter === null
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                )}
              >
                Todos
              </button>
              {availableLetters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={cn(
                    "px-2 py-0.5 rounded text-[10px] font-bold transition-colors border",
                    selectedLetter === letter
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                  )}
                >
                  {letter}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Render Document List */}
      <div className="animate-in fade-in duration-200">
        {filteredDocs.length > 0 ? (
          <div className="flex flex-col">
            {Object.entries(
              filteredDocs.reduce<Record<string, typeof filteredDocs>>((acc, doc) => {
                const desc = doc.description || "";
                if (!acc[desc]) acc[desc] = [];
                acc[desc].push(doc);
                return acc;
              }, {})
            ).map(([desc, docsInGroup], groupIndex) => (
              <div key={groupIndex} className="flex flex-col">
                {desc && (
                  <div className="bg-muted/30 border-y border-border/50 px-4 py-2.5">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{desc}</span>
                  </div>
                )}
                <div className="divide-y divide-border/60">
                  {docsInGroup.map((doc, i) => (
                    <div
                      key={i}
                      className={i % 2 === 0 ? "bg-card" : "bg-muted/15"}
                    >
                      <DocumentItem
                        title={doc.title}
                        description={undefined}
                        date={doc.date}
                        trimestre={doc.trimestre}
                        downloadUrl={doc.url}
                        variant="compact"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-xs text-muted-foreground select-none">
            No se encontraron documentos que coincidan con la búsqueda.
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedLetter(null)
              }}
              className="block mx-auto mt-2 text-primary font-bold hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

/** Formats a string to Title Case, leaving standard Spanish prepositions and conjunctions in lowercase */
function formatTitleCase(str: string): string {
  const lowercaseWords = ["al", "del", "de", "para", "en", "con", "y", "la", "el", "los", "las", "a", "o"];
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) => {
      if (index > 0 && lowercaseWords.includes(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

/** Renders an individual folder card with optional alphabetical filtering and intelligent search (if 10+ documents) */
function FolderCard({
  title,
  docs,
}: {
  title: string
  docs: DocType[]
}) {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const isLargeGroup = docs.length >= 10

  // Extract first letter of each document title
  const getFirstLetter = (t: string): string => {
    const match = t.match(/[a-zA-ZáéíóúñÁÉÍÓÚÑ]/)
    return match ? match[0].toUpperCase() : "#"
  }

  // Get unique letters that have documents
  const availableLetters = Array.from(
    new Set(docs.map((doc) => getFirstLetter(doc.title)))
  ).sort()

  // Normalize text for accent-insensitive search
  const normalizeText = (text: string) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

  // Filter documents by selected letter AND search query
  const filteredDocs = docs.filter((doc) => {
    const matchesLetter = selectedLetter ? getFirstLetter(doc.title) === selectedLetter : true
    const matchesQuery = searchQuery
      ? normalizeText(doc.title).includes(normalizeText(searchQuery)) ||
      (doc.description && normalizeText(doc.description).includes(normalizeText(searchQuery)))
      : true
    return matchesLetter && matchesQuery
  })

  return (
    <details
      className="group/sub select-none border border-border bg-muted/30 hover:bg-muted/50 open:bg-card rounded-xl shadow-sm hover:shadow hover:border-primary/25 transition-all duration-200 overflow-hidden border-l-4 border-l-primary"
      open={isLargeGroup}
    >
      {/* Folder Header */}
      <summary className="flex items-center gap-3 px-4 py-3.5 cursor-pointer list-none select-none">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Folder className="h-4 w-4 text-primary" />
        </div>
        <span className="text-xs font-bold text-foreground/80 flex-1 truncate">
          {formatTitleCase(title)}
        </span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/15 shrink-0 select-none mr-1">
          {docs.length} {docs.length === 1 ? "doc." : "docs."}
        </span>
        <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 group-open/sub:rotate-90" />
      </summary>

      {/* Document container */}
      <div className="border-t border-border/50 bg-card">
        {/* Search Bar + Alphabet Filter Container (only if 10+ documents) */}
        {isLargeGroup && (
          <div className="flex flex-col gap-2 p-3 bg-muted/15 border-b border-border/50 select-none">
            {/* Intelligent Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por título o descripción..."
                className="w-full pl-9 pr-8 py-1.5 bg-background border border-border rounded-lg text-xs outline-none focus:border-primary/45 transition-colors placeholder:text-muted-foreground/60 text-foreground"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* Alphabet Filter */}
            {availableLetters.length > 1 && (
              <div className="flex flex-wrap items-center gap-1 mt-1 select-none">
                <span className="text-[10px] font-semibold text-muted-foreground mr-1.5">
                  Inicial:
                </span>
                <button
                  onClick={() => setSelectedLetter(null)}
                  className={cn(
                    "px-2 py-0.5 rounded text-[10px] font-bold transition-colors border",
                    selectedLetter === null
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                  )}
                >
                  Todos
                </button>
                {availableLetters.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(letter)}
                    className={cn(
                      "px-2 py-0.5 rounded text-[10px] font-bold transition-colors border",
                      selectedLetter === letter
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="animate-in fade-in duration-200">
          {filteredDocs.length > 0 ? (
            <DocList docs={filteredDocs} />
          ) : (
            <div className="p-8 text-center text-xs text-muted-foreground select-none">
              No se encontraron documentos que coincidan con la búsqueda.
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedLetter(null)
                }}
                className="block mx-auto mt-2 text-primary font-bold hover:underline"
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </details>
  )
}

/** Renders collapsible subsubsections as card folders with left primary accents (Option A + C Combined) */
function SubGroupFolders({
  subGroups,
}: {
  subGroups: Record<string, DocType[]>
}) {
  const keys = Object.keys(subGroups)

  if (keys.length === 0) return null

  return (
    <div className="flex flex-col space-y-3 p-4 bg-muted/10">
      {keys.map((key) => (
        <FolderCard key={key} title={key} docs={subGroups[key] || []} />
      ))}
    </div>
  )
}

export function AdministracionSections({ documentos }: { documentos: DocType[] }) {
  return (
    <YearTabs documentos={documentos}>
      {(filtered) => {
        const allSubsections = Array.from(new Set(filtered.map(d => d.subsection).filter(Boolean))) as string[];
        const unknownSubsections = allSubsections.filter(sub => !seccionOrder.includes(sub)).sort();
        const displayOrder = [...seccionOrder, ...unknownSubsections];

        const grouped = displayOrder.reduce<Record<string, DocType[]>>(
          (acc, key) => {
            acc[key] = filtered.filter((d) => d.subsection === key)
            return acc
          },
          {}
        )

        return (
          <div className="space-y-3">
            {displayOrder.map((key) => {
              const docs = grouped[key]
              if (!docs || docs.length === 0) return null

              const config = seccionConfig[key] || {
                label: formatTitleCase(key),
                description: `Documentos de la sección ${formatTitleCase(key)}.`,
                icon: Folder
              };
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
                            Lista compacta
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
                      <DocList docs={docs} showFilters={true} />
                    ) : (
                      <SubGroupFolders subGroups={subGroups} />
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
