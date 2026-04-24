"use client"

import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useSearchParams } from "next/navigation"
import { getAllSearchableItems } from "@/lib/data"
import { FileText, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

function BusquedaContent() {
  const searchParams = useSearchParams()
  const q = searchParams.get("q") || ""
  
  const allItems = getAllSearchableItems()
  const results = q.trim() === "" 
    ? [] 
    : allItems.filter(item => {
        const query = q.toLowerCase();
        return item.title.toLowerCase().includes(query) || 
               item.description.toLowerCase().includes(query) ||
               item.type.toLowerCase().includes(query);
      })

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="bg-primary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Resultados de búsqueda
            </h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {q ? `Mostrando resultados para "${q}"` : "Ingresa un término de búsqueda para comenzar."}
            </p>
          </div>
        </section>

        <section className="py-12 bg-background min-h-[400px]">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
              <h2 className="text-xl font-bold text-foreground">
                {results.length} {results.length === 1 ? "resultado encontrado" : "resultados encontrados"}
              </h2>
            </div>

            {results.length > 0 ? (
              <div className="flex flex-col gap-4">
                {results.map((result, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col">
                        <span className={`w-fit px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase mb-2 ${
                          result.type === 'Documento' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                          result.type === 'Artículo' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                          result.type === 'Sección' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                          'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                        }`}>
                          {result.type}
                        </span>
                        <h3 className="text-lg font-bold text-foreground mb-1">{result.title}</h3>
                        <p className="text-sm text-muted-foreground">{result.description}</p>
                      </div>
                      
                      <a 
                        href={result.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                          result.type === "Documento" 
                            ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                            : "bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        }`}
                        title={result.type === "Documento" ? "Abrir documento" : "Ir a la sección"}
                      >
                        {result.type === "Documento" ? (
                          <ExternalLink className="h-5 w-5" />
                        ) : (
                          <ArrowRight className="h-5 w-5" />
                        )}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-muted/30 rounded-2xl border border-border border-dashed">
                <FileText className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Sin resultados</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  No pudimos encontrar ningún documento, artículo o trámite que coincida con tu búsqueda. 
                  Intenta utilizar términos más generales o verifica la ortografía.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function BusquedaPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-muted-foreground">Cargando resultados...</p>
          </div>
        </div>
        <Footer />
      </div>
    }>
      <BusquedaContent />
    </Suspense>
  )
}
