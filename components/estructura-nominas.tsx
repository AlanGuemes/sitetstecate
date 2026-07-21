"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { YearTabs } from "@/components/year-tabs"
import { DocumentItem } from "@/components/document-item"
import { DocumentCard } from "@/components/document-card"
import { BookOpen, ChevronDown, Search, X } from "lucide-react"

const GRID_THRESHOLD = 4

type NominaDoc = {
  title: string
  description?: string
  date?: string
  url?: string
  [key: string]: unknown
}

/** Renders a unified vertical list for documents with alternating backgrounds and optional search/filter */
function DocList({
  docs,
  showFilters = false,
}: {
  docs: Array<{ title: string; description?: string; date?: string; trimestre?: number; url?: string }>
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

export function NominasSection({ nominas }: { nominas: NominaDoc[] }) {
  const count = nominas.length

  return (
    <details
      id="section-nominas"
      className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm group-open:border-primary/40 group-open:shadow-md"
    >
      <summary className="flex items-center gap-4 px-5 py-4 cursor-pointer list-none hover:bg-primary/5 group-open:bg-primary/5 transition-colors">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <BookOpen className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-foreground text-sm">Nominas</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              {count} documentos
            </span>
            {count > GRID_THRESHOLD && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-primary/10 text-primary hidden sm:inline">
                Lista compacta
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1 hidden sm:block">
            Documentos que describen las atribuciones, funciones y perfiles de cada área de la administración municipal.
          </p>
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 group-open:rotate-180" />
      </summary>

      <div className="border-t border-border p-5 bg-card">
        <YearTabs documentos={nominas}>
          {(filtered) => (
            <DocList docs={filtered} showFilters={true} />
          )}
        </YearTabs>
      </div>
    </details>
  )
}
