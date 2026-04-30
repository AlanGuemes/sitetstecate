"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { DocumentItem } from "@/components/document-item"
import { useState } from "react"
import { cn, normalizeSearch } from "@/lib/utils"
import {
  Scale,
  FileText,
  Book,
  Gavel,
  Search,
  Filter,
  ChevronRight,
  Download,
  ExternalLink,
  BookOpen
} from "lucide-react"

import { normatividadData } from "@/lib/data"

const { categories, documentos, enlacesExternos } = normatividadData

export default function NormatividadPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDocuments = documentos.filter(doc => {
    const matchesCategory = selectedCategory === "all" || 
      (selectedCategory === "sesiones" 
        ? (doc as any).subsection === "SESIONES DE CABILDO" 
        : doc.category === selectedCategory)
    const searchLower = normalizeSearch(searchQuery)
    const matchesSearch = normalizeSearch(doc.title).includes(searchLower) ||
      normalizeSearch(doc.description).includes(searchLower) ||
      ((doc as any).ambito && normalizeSearch((doc as any).ambito).includes(searchLower))
    return matchesCategory && matchesSearch
  })

  const cabildoDocs = filteredDocuments
    .filter(d => (d as any).subsection === "SESIONES DE CABILDO")
    .sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      // Prioridad por Ayuntamiento (XXV > XXIV)
      const ayunA = titleA.includes("XXV") ? 25 : titleA.includes("XXIV") ? 24 : 0;
      const ayunB = titleB.includes("XXV") ? 25 : titleB.includes("XXIV") ? 24 : 0;

      if (ayunA !== ayunB) return ayunB - ayunA;

      // Orden descendente por número de sesión
      const numA = parseInt(titleA.match(/NO\.\s*(\d+)/)?.[1] || "0");
      const numB = parseInt(titleB.match(/NO\.\s*(\d+)/)?.[1] || "0");

      return numB - numA;
    })
  const actasDocs = filteredDocuments
    .filter(d => (d as any).subsection === "ACTAS DE SESION DE COMISION")
    .sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      // Extraer nombre de la comisión (texto después del guion)
      const comisionA = titleA.split("-")[1]?.trim() || titleA;
      const comisionB = titleB.split("-")[1]?.trim() || titleB;

      // Primero ordenar alfabéticamente por Comisión
      if (comisionA < comisionB) return -1;
      if (comisionA > comisionB) return 1;

      // Si es la misma comisión, ordenar por número de acta (descendente)
      const numA = parseInt(titleA.match(/NO\.\s*(\d+)/)?.[1] || "0");
      const numB = parseInt(titleB.match(/NO\.\s*(\d+)/)?.[1] || "0");

      return numB - numA;
    })
  const generalDocs = filteredDocuments.filter(d => (d as any).subsection !== "SESIONES DE CABILDO" && (d as any).subsection !== "ACTAS DE SESION DE COMISION")

  const renderDocumentCard = (doc: any, index: number) => (
    <div key={`${doc.title}-${index}`} className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          {doc.category === "leyes" && <Gavel className="h-6 w-6 text-primary" />}
          {doc.category === "código" && <BookOpen className="h-6 w-6 text-primary" />}
          {doc.category === "reglamentos" && <Scale className="h-6 w-6 text-primary" />}
          {doc.category === "manuales" && <Book className="h-6 w-6 text-primary" />}
          {(doc.category === "lineamientos" || doc.category === "documento") && <FileText className="h-6 w-6 text-primary" />}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex gap-2 mb-2">
                <span className="inline-block px-2 py-0.5 text-xs font-medium bg-secondary/10 text-secondary rounded capitalize">
                  {doc.category}
                </span>
                {(doc as any).ambito && (
                  <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded uppercase ${(doc as any).ambito === 'Constitucional'
                      ? 'bg-slate-800 text-slate-100'
                      : (doc as any).ambito === 'Federal'
                        ? 'bg-accent text-accent-foreground'
                        : (doc as any).ambito === 'Estatal'
                          ? 'bg-secondary text-secondary-foreground'
                          : 'bg-primary text-primary-foreground'
                    }`}>
                    {(doc as any).ambito}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-foreground">{doc.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
              <p className="text-xs text-muted-foreground mt-2">{doc.date}</p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            {doc.url && doc.url !== "#" ? (
              <>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-accent transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver en línea
                </a>
              </>
            ) : (
              <>
                <button className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-muted/50 text-muted-foreground rounded-lg cursor-not-allowed" disabled>
                  <ExternalLink className="h-4 w-4" />
                  Ver en línea
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground">Normatividad</h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl leading-relaxed">
              Accede al marco normativo aplicable: leyes, reglamentos, manuales administrativos y lineamientos que rigen la actuación de la administración municipal.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-8 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-4xl">
              El Municipio de Tecate y sus organismos paramunicipales se rigen por un marco normativo de cuatro niveles: constitucional, federal, estatal y municipal. A continuación, se enlistan los ordenamientos vigentes.
            </p>
          </div>
        </section>

        {/* Búsqueda y filtros */}
        <section className="py-8 bg-muted border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Buscador */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar documentos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Categorías */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "px-4 py-2 text-sm rounded-lg transition-colors",
                      selectedCategory === cat.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-muted-foreground hover:bg-accent"
                    )}
                  >
                    {cat.label}
                    <span className="ml-1 text-xs opacity-75">({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lista de documentos */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Documentos */}
              <div className="lg:col-span-2">
                {(generalDocs.length > 0 || (cabildoDocs.length === 0 && actasDocs.length === 0)) && (
                  <div className="mb-10">
                    <SectionHeader
                      title="Marco Normativo"
                      description={`${generalDocs.length} documentos encontrados`}
                    />

                    <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20">
                      {generalDocs.map(renderDocumentCard)}
                    </div>
                  </div>
                )}

                {cabildoDocs.length > 0 && (
                  <div className="mb-10">
                    <SectionHeader
                      title="Sesiones de Cabildo"
                      description={`${cabildoDocs.length} documentos encontrados`}
                    />
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20">
                      {cabildoDocs.map(renderDocumentCard)}
                    </div>
                  </div>
                )}

                {actasDocs.length > 0 && (
                  <div className="mb-10">
                    <SectionHeader
                      title="Actas de Sesión de Comisión"
                      description={`${actasDocs.length} documentos encontrados`}
                    />
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20">
                      {actasDocs.map(renderDocumentCard)}
                    </div>
                  </div>
                )}

                {filteredDocuments.length === 0 && (
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-medium text-foreground">No se encontraron documentos</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Intenta con otros términos de búsqueda o selecciona otra categoría.
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Enlaces externos */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-4">Enlaces de Interés</h3>
                    <div className="space-y-3">
                      {enlacesExternos.map((enlace, index) => (
                        <a
                          key={index}
                          href={enlace.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <ExternalLink className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{enlace.title}</p>
                            <p className="text-xs text-muted-foreground">{enlace.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Información adicional */}
                  <div className="bg-accent/30 border border-accent rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">¿No encuentras lo que buscas?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Si necesitas algún documento que no está disponible, puedes solicitarlo a través de la Unidad de Transparencia.
                    </p>
                    <button className="w-full text-sm px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                      Solicitar información
                    </button>
                  </div>

                  {/* Estadísticas */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-4">Documentos por Tipo</h3>
                    <div className="space-y-3">
                      {categories.filter(c => c.id !== "all").map((cat) => (
                        <div key={cat.id} className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground capitalize">{cat.label}</span>
                          <span className="text-sm font-medium text-foreground">{cat.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
