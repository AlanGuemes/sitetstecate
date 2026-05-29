"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DocumentItem } from "@/components/document-item"
import { DocumentCard } from "@/components/document-card"
import { NominasSection } from "@/components/estructura-nominas"
import {
  Phone, Mail, MapPin, Download, Network, Scale, ListChecks,
  ChevronDown, Building2, FileText, Search, X,
} from "lucide-react"
import { contactos, contactosParamunicipales, nominas, organigramas } from "@/lib/data"

const GRID_THRESHOLD = 4;





type Contacto = {
  nombre: string
  titular: string
  direccion: string
  telefono: string
  correo: string
  funciones?: string[]
  areas?: string[]
  fundamento?: string
  sitioWeb?: string
}

const STOPWORDS = new Set(["de", "del", "la", "las", "los", "el", "y", "en", "a", "para", "con"])

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(w => w.length > 0 && !STOPWORDS.has(w.toLowerCase()) && w[0] === w[0].toUpperCase())
    .slice(0, 3)
    .map(w => w[0].toUpperCase())
    .join("")
}

function DeptCard({ dept, variant = "municipal" }: { dept: Contacto; variant?: "municipal" | "paramunicipal" }) {
  const initials = getInitials(dept.nombre)
  const avatarClass = variant === "paramunicipal"
    ? "w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 text-secondary-foreground font-bold text-xs tracking-wide shadow-sm"
    : "w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-bold text-xs tracking-wide shadow-sm"

  return (
    <details className="group">
      <summary className="flex items-center gap-3 px-4 py-3.5 cursor-pointer list-none bg-card border border-border rounded-xl hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm group-open:rounded-b-none group-open:border-b-0 group-open:shadow-sm transition-all duration-200">
        <div className={avatarClass}>{initials}</div>

        <div className="min-w-0 flex-1">
          <p className="font-semibold text-foreground text-sm leading-tight">{dept.nombre}</p>
          <p className="text-xs text-primary font-medium mt-0.5 truncate">{dept.titular}</p>
        </div>

        <div className="hidden sm:block w-px h-8 bg-border shrink-0" />
        <div className="hidden sm:flex flex-col gap-0.5 w-52 shrink-0 min-w-0">
          <span className="text-xs text-muted-foreground flex items-center gap-1.5 truncate">
            <Phone className="h-3 w-3 text-primary/50 shrink-0" />{dept.telefono}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1.5 truncate">
            <Mail className="h-3 w-3 text-primary/50 shrink-0" />
            <span className="truncate">{dept.correo}</span>
          </span>
        </div>

        <div className="hidden lg:block w-px h-8 bg-border shrink-0" />
        <div className="hidden lg:flex items-start gap-1.5 w-64 shrink-0">
          <MapPin className="h-3 w-3 text-primary/50 shrink-0 mt-0.5" />
          <span className="text-xs text-muted-foreground leading-snug">{dept.direccion}</span>
        </div>

        <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 ml-auto transition-transform duration-200 group-open:rotate-180" />
      </summary>

      <div className="border border-t-0 border-border rounded-b-xl bg-muted/20 px-5 py-5 group-open:shadow-sm">
        {dept.fundamento && (
          <div className="flex items-start gap-2 text-xs text-muted-foreground mb-4">
            <Scale className="h-3.5 w-3.5 text-primary/60 shrink-0 mt-0.5" />
            <span className="leading-relaxed font-medium text-foreground/80">{dept.fundamento}</span>
          </div>
        )}

        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4 text-xs text-muted-foreground">
          <span className="flex sm:hidden items-center gap-1.5"><Phone className="h-3 w-3 text-primary/50" />{dept.telefono}</span>
          <span className="flex sm:hidden items-center gap-1.5 truncate max-w-xs"><Mail className="h-3 w-3 text-primary/50 shrink-0" />{dept.correo}</span>
          <span className="flex lg:hidden items-start gap-1.5"><MapPin className="h-3 w-3 text-primary/50 shrink-0 mt-0.5" />{dept.direccion}</span>
        </div>

        <div className="border-t border-border/50 mb-4" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dept.funciones && dept.funciones.filter(f => f.trim() && f !== ".").length > 0 && (
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2 flex items-center gap-1.5">
                <ListChecks className="h-3 w-3" /> Funciones
              </p>
              <ul className="space-y-1.5">
                {dept.funciones.filter(f => f.trim() && f !== ".").map((func, i) => (
                  <li key={i} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />{func}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {dept.areas && dept.areas.filter(a => a.trim()).length > 0 && (
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Áreas Internas</p>
              <ul className="space-y-1.5">
                {dept.areas.filter(a => a.trim()).map((area, i) => (
                  <li key={i} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/70 mt-1.5 shrink-0" />{area}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </details>
  )
}

// ── Collapsible section wrapper for top-level sections ────────────────────────
function CollapsibleSection({
  id,
  icon: Icon,
  title,
  description,
  badge,
  gridBadge,
  children,
}: {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  badge: string
  gridBadge?: boolean
  children: React.ReactNode
}) {
  return (
    <details id={id} className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm group-open:border-primary/40 group-open:shadow-md">
      <summary className="flex items-center gap-4 px-5 py-4 cursor-pointer list-none hover:bg-primary/5 group-open:bg-primary/5 transition-colors">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-foreground text-sm">{title}</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              {badge}
            </span>
            {gridBadge && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-primary/10 text-primary hidden sm:inline">
                Lista compacta
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1 hidden sm:block">
            {description}
          </p>
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="border-t border-border">
        {children}
      </div>
    </details>
  )
}

/** Renders a unified vertical list for documents with alternating backgrounds and optional search/filter */
function DocList({
  docs,
  showFilters = false,
}: {
  docs: Array<{ title: string; description?: string; date?: string; url?: string }>
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
          <div className="divide-y divide-border/60">
            {filteredDocs.map((doc, i) => (
              <div
                key={i}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/15"}
              >
                <DocumentItem
                  title={doc.title}
                  description={doc.description}
                  date={doc.date}
                  downloadUrl={doc.url}
                  variant="compact"
                />
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

export default function EstructuraPage() {
  const totalDependencias = contactos.length + contactosParamunicipales.length

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
                  <Building2 className="h-3.5 w-3.5" />
                  H. Ayuntamiento de Tecate, B.C.
                </span>
                <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                  Estructura Orgánica
                </h1>
                <p className="mt-4 text-primary-foreground/75 max-w-2xl leading-relaxed text-base lg:text-lg">
                  Conoce la estructura organizacional, organigramas y directorio de servidores
                  públicos de la administración municipal del XXV Ayuntamiento de Tecate, B.C.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-center min-w-[100px]">
                <p className="text-3xl font-bold text-primary-foreground">Abril 2026</p>
                <p className="text-xs text-primary-foreground/70 mt-1">Actualización</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Collapsible sections ──────────────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 space-y-3">

          {/* Organigramas */}
          <CollapsibleSection
            id="section-organigramas"
            icon={Network}
            title="Organigramas"
            description="Descarga los organigramas de las diferentes áreas de la administración municipal. Actualizados al ejercicio fiscal 2026."
            badge={`${organigramas.length} documentos`}
            gridBadge={organigramas.length > GRID_THRESHOLD}
          >
            <DocList docs={organigramas} showFilters={true} />
          </CollapsibleSection>

          {/* Directorio Municipal */}
          <CollapsibleSection
            id="section-directorio"
            icon={Building2}
            title="Directorio Municipal"
            description={`${totalDependencias} dependencias y organismos · Haz clic en cada fila para ver funciones y áreas internas.`}
            badge={`${totalDependencias} dependencias`}
          >
            <div className="p-5 space-y-5">
              {/* Administración Municipal */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary px-2.5 py-1 bg-primary/10 rounded-full">
                    Administración Municipal
                  </span>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground">{contactos.length}</span>
                </div>
                <div className="space-y-2">
                  {contactos.map((dept, index) => (
                    <DeptCard key={`m-${index}`} dept={dept} variant="municipal" />
                  ))}
                </div>
              </div>

              {/* Organismos Paramunicipales */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary px-2.5 py-1 bg-secondary/10 rounded-full">
                    Organismos Paramunicipales
                  </span>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground">{contactosParamunicipales.length}</span>
                </div>
                <div className="space-y-2">
                  {contactosParamunicipales.map((dept, index) => (
                    <DeptCard key={`p-${index}`} dept={dept} variant="paramunicipal" />
                  ))}
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Nominas con tabulador de años */}
          <NominasSection nominas={nominas} />
        </div>

        {/* ── Footer CTA ────────────────────────────────────────────── */}
        <section className="bg-primary/5 border-t border-border py-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground">
              La información publicada en esta sección es de carácter público y se actualiza
              trimestralmente conforme a la{" "}
              <span className="font-medium text-foreground">
                Ley de Transparencia y Acceso a la Información Pública del Estado de Baja California
              </span>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
