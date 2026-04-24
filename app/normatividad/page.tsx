"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { DocumentItem } from "@/components/document-item"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Scale,
  FileText,
  Book,
  Gavel,
  Search,
  Filter,
  ChevronRight,
  Download,
  ExternalLink
} from "lucide-react"

const categories = [
  { id: "all", label: "Todos", count: 45 },
  { id: "leyes", label: "Leyes", count: 12 },
  { id: "reglamentos", label: "Reglamentos", count: 18 },
  { id: "manuales", label: "Manuales", count: 8 },
  { id: "lineamientos", label: "Lineamientos", count: 7 },
]

const documentos = [
  {
    category: "leyes",
    title: "Ley de Transparencia y Acceso a la Información Pública del Estado de Baja California",
    description: "Ley que regula el derecho de acceso a la información pública en el Estado.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/2026-Ley-de-transparencia-baja-california-Reformada.pdf",
    date: "Última reforma: 2024",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley de Protección de Datos Personales en Posesión de Sujetos Obligados",
    description: "Normativa sobre el tratamiento y protección de datos personales.",
    date: "Última reforma: 2023",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley Orgánica de la Administración Pública Municipal",
    description: "Ley que regula la organización y funcionamiento de los ayuntamientos.",
    date: "Última reforma: 2024",
    type: "PDF"
  },
  {
    category: "reglamentos",
    title: "Reglamento Interior del H. Ayuntamiento",
    description: "Normativa que regula el funcionamiento interno del Cabildo Municipal.",
    date: "Actualizado: 2024",
    type: "PDF"
  },
  {
    category: "reglamentos",
    title: "Reglamento de la Administración Pública Municipal",
    description: "Reglamento que establece la estructura y funciones de las dependencias municipales.",
    date: "Actualizado: 2024",
    type: "PDF"
  },
  {
    category: "reglamentos",
    title: "Reglamento de Transparencia y Acceso a la Información",
    description: "Normativa municipal en materia de transparencia gubernamental.",
    date: "Actualizado: 2023",
    type: "PDF"
  },
  {
    category: "reglamentos",
    title: "Reglamento de Construcción",
    description: "Normativa que regula las obras de construcción en el municipio.",
    date: "Actualizado: 2024",
    type: "PDF"
  },
  {
    category: "manuales",
    title: "Manual de Organización General",
    description: "Documento que describe la estructura organizacional del municipio.",
    date: "Actualizado: 2025",
    type: "PDF"
  },
  {
    category: "manuales",
    title: "Manual de Procedimientos Administrativos",
    description: "Guía de procedimientos para trámites y servicios municipales.",
    date: "Actualizado: 2024",
    type: "PDF"
  },
  {
    category: "manuales",
    title: "Manual de Contabilidad Gubernamental",
    description: "Lineamientos para el registro contable de las operaciones municipales.",
    date: "Actualizado: 2024",
    type: "PDF"
  },
  {
    category: "lineamientos",
    title: "Lineamientos para la Publicación de Información",
    description: "Criterios para la publicación de información en el portal de transparencia.",
    date: "Actualizado: 2024",
    type: "PDF"
  },
  {
    category: "lineamientos",
    title: "Lineamientos de Austeridad y Disciplina del Gasto",
    description: "Medidas de racionalidad en el ejercicio del gasto público.",
    date: "Actualizado: 2025",
    type: "PDF"
  },
]

const enlacesExternos = [
  {
    title: "Plataforma Nacional de Transparencia",
    description: "Portal del Sistema Nacional de Transparencia",
    url: "https://www.plataformadetransparencia.org.mx"
  },
  {
    title: "ITAIPBC",
    description: "Instituto de Transparencia del Estado de Baja California",
    url: "http://www.transparenciabc.gob.mx/"
  },
]

export default function NormatividadPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDocuments = documentos.filter(doc => {
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
                <SectionHeader
                  title="Marco Normativo"
                  description={`${filteredDocuments.length} documentos encontrados`}
                />

                <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20">
                  {filteredDocuments.map((doc, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          {doc.category === "leyes" && <Gavel className="h-6 w-6 text-primary" />}
                          {doc.category === "reglamentos" && <Scale className="h-6 w-6 text-primary" />}
                          {doc.category === "manuales" && <Book className="h-6 w-6 text-primary" />}
                          {doc.category === "lineamientos" && <FileText className="h-6 w-6 text-primary" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <span className="inline-block px-2 py-0.5 text-xs font-medium bg-secondary/10 text-secondary rounded mb-2 capitalize">
                                {doc.category}
                              </span>
                              <h3 className="font-semibold text-foreground">{doc.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                              <p className="text-xs text-muted-foreground mt-2">{doc.date}</p>
                            </div>
                          </div>
                          <div className="mt-4 flex gap-2">
                            {doc.url ? (
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
                  ))}
                </div>

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
