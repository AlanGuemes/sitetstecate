"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

const suggestions = [
  "Presupuesto de egresos",
  "Nómina de funcionarios",
  "Contratos y licitaciones",
  "Reglamento municipal",
  "Obras públicas",
  "Planes de desarrollo",
]

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [focused, setFocused] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/transparencia?q=${encodeURIComponent(query.trim())}`)
    } else {
      router.push("/transparencia")
    }
  }

  const handleSuggestion = (text: string) => {
    setQuery(text)
    router.push(`/transparencia?q=${encodeURIComponent(text)}`)
  }

  return (
    <section id="buscador" className="bg-background py-10 lg:py-14 border-b border-border">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
          Buscador de documentos
        </p>
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-foreground mb-6">
          ¿Qué información buscas?
        </h2>

        <form onSubmit={handleSearch} className="relative">
          <div
            className={`flex items-center gap-3 bg-card border-2 rounded-2xl px-5 py-4 shadow-sm transition-all duration-200 ${
              focused
                ? "border-primary shadow-lg shadow-primary/10"
                : "border-border hover:border-primary/40"
            }`}
          >
            <Search
              className={`h-5 w-5 flex-shrink-0 transition-colors duration-200 ${
                focused ? "text-primary" : "text-muted-foreground"
              }`}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Ej. presupuesto, nóminas, contratos, reglamentos..."
              className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-base outline-none"
              aria-label="Buscar documentos de transparencia"
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-primary text-primary-foreground px-5 py-2 rounded-xl text-sm font-semibold hover:bg-primary/90 active:scale-95 transition-all duration-150"
            >
              Buscar
            </button>
          </div>
        </form>

        {/* Sugerencias rápidas */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="text-xs text-muted-foreground self-center">Búsquedas frecuentes:</span>
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleSuggestion(s)}
              className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-150"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
