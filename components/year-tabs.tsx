"use client"

import { useState, useMemo } from "react"
import { Calendar } from "lucide-react"

/* ── helpers ─────────────────────────────────────────────────────────── */

/** Extract a 4-digit year from a free-text date string, or return null. */
function extractYear(dateStr?: string): number | null {
  if (!dateStr) return null
  const m = dateStr.match(/\b(20\d{2})\b/)
  return m ? parseInt(m[1], 10) : null
}

/* ── types ───────────────────────────────────────────────────────────── */

export type DocWithDate = {
  date?: string
  trimestre?: number | null
  [key: string]: unknown
}


type YearTabsProps<T extends DocWithDate> = {
  /** All documents (unfiltered). */
  documentos: T[]
  /** Render callback — receives the filtered documents for the active year. */
  children: (filtered: T[], activeYear: number) => React.ReactNode
}

/* ── component ───────────────────────────────────────────────────────── */

export function YearTabs<T extends DocWithDate>({ documentos, children }: YearTabsProps<T>) {
  /* 1. Compute available years + bucket docs ─────────────────────────── */
  const { years, byYear, noYear } = useMemo(() => {
    const map = new Map<number, T[]>()
    const noYearDocs: T[] = []

    for (const doc of documentos) {
      const y = extractYear(doc.date)
      if (y !== null) {
        if (!map.has(y)) map.set(y, [])
        map.get(y)!.push(doc)
      } else {
        noYearDocs.push(doc)
      }
    }

    // Sort years descending so most recent is first
    const sortedYears = Array.from(map.keys()).sort((a, b) => b - a)

    return { years: sortedYears, byYear: map, noYear: noYearDocs }
  }, [documentos])

  /* 2. Active year and quarter state ─────────────────────────────────── */
  const [activeYear, setActiveYear] = useState<number>(() => years[0] ?? new Date().getFullYear())
  const [activeTrimestre, setActiveTrimestre] = useState<string>("todos")

  /* 3. Get all documents of the active year ──────────────────────────── */
  const yearDocs = useMemo(() => {
    return byYear.get(activeYear) ?? []
  }, [activeYear, byYear])

  /* 4. Determine if this year has quarter data ────────────────────────── */
  const availableQuarters = useMemo(() => {
    const quarters = new Set<number>()
    for (const doc of yearDocs) {
      if (doc.trimestre !== undefined && doc.trimestre !== null) {
        quarters.add(doc.trimestre)
      }
    }
    return Array.from(quarters).sort((a, b) => a - b)
  }, [yearDocs])

  /* 5. Filtered documents (applies quarter filter if active) ──────────── */
  const filtered = useMemo(() => {
    let docs = [...yearDocs, ...noYear]
    if (availableQuarters.length > 0 && activeTrimestre !== "todos") {
      const qNum = parseInt(activeTrimestre, 10)
      docs = docs.filter(doc => doc.trimestre === qNum)
    }
    return docs
  }, [yearDocs, noYear, activeTrimestre, availableQuarters])

  /* 6. Don't render tabs if there's only one year (or none) ──────────── */
  if (years.length <= 1) {
    return <>{children(documentos, activeYear)}</>
  }

  /* 5. Render ────────────────────────────────────────────────────────── */
  return (
    <div>
      {/* ── Year tab bar ── */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-muted-foreground mr-1 shrink-0">
          <Calendar className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">Año</span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {years.map((year) => {
            const isActive = year === activeYear
            const count = (byYear.get(year)?.length ?? 0) + noYear.length
            return (
              <button
                key={year}
                onClick={() => {
                  setActiveYear(year)
                  setActiveTrimestre("todos")
                }}
                className={`
                  relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold
                  transition-all duration-200 whitespace-nowrap cursor-pointer
                  ${isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "bg-card text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground hover:bg-primary/5"
                  }
                `}
              >
                {year}
                <span
                  className={`
                    text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none
                    ${isActive
                      ? "bg-white/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                    }
                  `}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Trimestre sub-tabs bar ── */}
      {availableQuarters.length > 0 && (
        <div className="mb-6 border-b border-border/40 pb-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-muted-foreground uppercase mr-2.5 tracking-wide shrink-0">Trimestre:</span>
            <button
              onClick={() => setActiveTrimestre("todos")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 cursor-pointer ${
                activeTrimestre === "todos"
                  ? "bg-primary/10 text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Todos ({yearDocs.length + noYear.length})
            </button>
            {availableQuarters.map(q => {
              const count = yearDocs.filter(d => d.trimestre === q).length
              const labels: Record<number, string> = {
                1: "1er Trimestre",
                2: "2do Trimestre",
                3: "3er Trimestre",
                4: "4to Trimestre"
              }
              return (
                <button
                  key={q}
                  onClick={() => setActiveTrimestre(q.toString())}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 cursor-pointer ${
                    activeTrimestre === q.toString()
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {labels[q] || `${q}° Trimestre`} ({count})
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* ── Filtered content ── */}
      {children(filtered, activeYear)}
    </div>
  )
}
