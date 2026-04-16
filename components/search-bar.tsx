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
    <div id="buscador" className="mx-auto max-w-3xl px-4 lg:px-8 mb-10">
      <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-5">
        ¿Qué información buscas?
      </h2>

      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
        {/* Campo de búsqueda */}
        <div
          className={`flex items-center gap-2 flex-1 bg-card border-2 rounded-2xl px-4 py-3 shadow-sm transition-all duration-200 ${
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
            placeholder="Ej. presupuesto, nóminas, contratos..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm sm:text-base outline-none min-w-0"
            aria-label="Buscar documentos de transparencia"
          />
        </div>

        {/* Botón — centrado y compacto en móvil, automático en sm+ */}
        <button
          type="submit"
          className="mx-auto sm:mx-0 sm:w-auto flex-shrink-0 bg-primary text-primary-foreground px-5 py-2.5 rounded-2xl text-sm font-semibold hover:bg-primary/90 active:scale-95 transition-all duration-150"
        >
          Buscar
        </button>
      </form>

      {/* Sugerencias rápidas */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <span className="text-xs text-muted-foreground self-center w-full text-center sm:w-auto">
          Búsquedas frecuentes:
        </span>
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
  )
}
