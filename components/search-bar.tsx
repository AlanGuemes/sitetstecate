"use client"

import { useState, useRef, useEffect } from "react"
import { Search, FileText, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { getAllSearchableItems } from "@/lib/data"

const suggestions = [
  "Acceso a la Información",
  "Avisos de Privacidad",
  "Responsabilidades",
  "Adquisiciones",
  "Contabilidad",
  "Leyes",
]

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [focused, setFocused] = useState(false)
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const allSearchableItems = getAllSearchableItems();

  const filteredResults = query.trim() === "" 
    ? [] 
    : allSearchableItems.filter(item => {
        const q = query.toLowerCase();
        return item.title.toLowerCase().includes(q) || 
               item.description.toLowerCase().includes(q) ||
               item.type.toLowerCase().includes(q);
      }).slice(0, 6);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/busqueda?q=${encodeURIComponent(query.trim())}`)
      setFocused(false)
    }
  }

  const handleSuggestion = (text: string) => {
    setQuery(text)
    setFocused(true) // Mostrar el dropdown con resultados
  }

  // Cerrar el dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFocused(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div id="buscador" className="mx-auto max-w-3xl px-4 lg:px-8 mb-10" ref={dropdownRef}>
      <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-5">
        ¿Qué información buscas?
      </h2>

      <div className="relative">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 relative z-20">
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
              onChange={(e) => {
                setQuery(e.target.value)
                setFocused(true)
              }}
              onFocus={() => setFocused(true)}
              placeholder="Ej. contratos, leyes, denuncias, artículos..."
              className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm sm:text-base outline-none min-w-0"
              aria-label="Buscar documentos de transparencia"
            />
          </div>

          <button
            type="submit"
            className="mx-auto sm:mx-0 sm:w-auto flex-shrink-0 bg-primary text-primary-foreground px-5 py-2.5 rounded-2xl text-sm font-semibold hover:bg-primary/90 active:scale-95 transition-all duration-150"
          >
            Buscar
          </button>
        </form>

        {/* Resultados de búsqueda (Dropdown) */}
        {query.trim() !== "" && focused && (
          <div className="absolute top-full mt-2 left-0 right-0 bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden">
            {filteredResults.length > 0 ? (
              <ul className="py-2 max-h-80 overflow-y-auto">
                {filteredResults.map((result, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault(); // Evitar el blur del input
                        setFocused(false);
                        window.open(result.url, "_blank", "noopener,noreferrer");
                      }}
                      className="w-full text-left px-5 py-3 hover:bg-muted transition-colors flex items-center justify-between group"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">{result.title}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-2 mt-1.5">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide ${
                            result.type === 'Documento' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                            result.type === 'Artículo' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                            result.type === 'Sección' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                            'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                          }`}>
                            {result.type}
                          </span>
                          <span className="truncate max-w-[200px] sm:max-w-xs">{result.description}</span>
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all -translate-x-2 group-hover:translate-x-0" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-6 text-center text-sm text-muted-foreground flex flex-col items-center gap-2">
                <FileText className="h-8 w-8 text-muted-foreground/30 mb-2" />
                No se encontraron resultados para "<span className="text-foreground font-medium">{query}</span>"
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <span className="text-xs text-muted-foreground self-center w-full text-center sm:w-auto">
          Búsquedas frecuentes:
        </span>
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => handleSuggestion(s)}
            className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted/50 text-muted-foreground hover:border-primary/50 hover:text-foreground hover:bg-muted transition-all duration-150 shadow-sm"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
