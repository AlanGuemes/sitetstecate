"use client"

import { YearTabs } from "@/components/year-tabs"
import { DocumentItem } from "@/components/document-item"
import { DocumentCard } from "@/components/document-card"
import { BookOpen, ChevronDown } from "lucide-react"

const GRID_THRESHOLD = 4

type NominaDoc = {
  title: string
  description?: string
  date?: string
  url?: string
  [key: string]: unknown
}

export function NominasSection({ nominas }: { nominas: NominaDoc[] }) {
  return (
    <YearTabs documentos={nominas}>
      {(filtered) => {
        const count = filtered.length

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
                      Vista en cuadrícula
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1 hidden sm:block">
                  Documentos que describen las atribuciones, funciones y perfiles de cada área de la administración municipal.
                </p>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 group-open:rotate-180" />
            </summary>

            <div className="border-t border-border">
              {count > GRID_THRESHOLD ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
                  {filtered.map((doc, i) => (
                    <DocumentCard
                      key={i}
                      title={doc.title}
                      description={doc.description}
                      date={doc.date}
                      downloadUrl={doc.url}
                    />
                  ))}
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {filtered.map((doc, i) => (
                    <DocumentItem
                      key={i}
                      title={doc.title}
                      description={doc.description}
                      date={doc.date}
                      downloadUrl={doc.url}
                      variant="default"
                    />
                  ))}
                </div>
              )}
            </div>
          </details>
        )
      }}
    </YearTabs>
  )
}
