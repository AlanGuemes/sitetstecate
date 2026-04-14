import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { DocumentItem } from "@/components/document-item"
import { Building2, Users, Phone, Mail, MapPin, Download, Network } from "lucide-react"

const departments = [
  {
    name: "Secretaría General de Gobierno",
    titular: "Lic. Juan Pérez García",
    cargo: "Secretario General",
    email: "secretaria.general@municipio.gob.mx",
    telefono: "(000) 000-0001",
    ubicacion: "Planta Alta, Palacio Municipal"
  },
  {
    name: "Dirección de Administración",
    titular: "C.P. María López Hernández",
    cargo: "Directora de Administración",
    email: "administracion@municipio.gob.mx",
    telefono: "(000) 000-0002",
    ubicacion: "Planta Baja, Edificio Administrativo"
  },
  {
    name: "Dirección de Finanzas",
    titular: "Lic. Carlos Rodríguez Martínez",
    cargo: "Director de Finanzas",
    email: "finanzas@municipio.gob.mx",
    telefono: "(000) 000-0003",
    ubicacion: "Planta Baja, Palacio Municipal"
  },
  {
    name: "Dirección de Recursos Humanos",
    titular: "Lic. Ana García Torres",
    cargo: "Directora de Recursos Humanos",
    email: "rh@municipio.gob.mx",
    telefono: "(000) 000-0004",
    ubicacion: "Planta Alta, Edificio Administrativo"
  },
  {
    name: "Dirección de Desarrollo Social",
    titular: "Lic. Roberto Sánchez Vega",
    cargo: "Director de Desarrollo Social",
    email: "desarrollo.social@municipio.gob.mx",
    telefono: "(000) 000-0005",
    ubicacion: "Planta Baja, Centro Comunitario"
  },
  {
    name: "Dirección de Obras Públicas",
    titular: "Ing. Patricia Flores Luna",
    cargo: "Directora de Obras Públicas",
    email: "obras@municipio.gob.mx",
    telefono: "(000) 000-0006",
    ubicacion: "Edificio de Obras Públicas"
  },
]

const organigramas = [
  {
    title: "Organigrama General del Municipio",
    description: "Estructura orgánica completa de la administración municipal",
    date: "Actualizado: Enero 2025"
  },
  {
    title: "Organigrama Secretaría General",
    description: "Estructura de la Secretaría General de Gobierno",
    date: "Actualizado: Enero 2025"
  },
  {
    title: "Organigrama Dirección de Administración",
    description: "Estructura de la Dirección de Administración",
    date: "Actualizado: Enero 2025"
  },
  {
    title: "Organigrama Dirección de Finanzas",
    description: "Estructura de la Dirección de Finanzas",
    date: "Actualizado: Enero 2025"
  },
]

export default function EstructuraPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground">Estructura Orgánica</h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl leading-relaxed">
              Conoce la estructura organizacional, organigramas y directorio de servidores públicos de la administración municipal.
            </p>
          </div>
        </section>

        {/* Organigramas */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader 
              title="Organigramas" 
              description="Descarga los organigramas de las diferentes áreas de la administración municipal."
            />
            
            <div className="grid md:grid-cols-2 gap-4">
              {organigramas.map((org, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Network className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{org.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{org.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">{org.date}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                      <Download className="h-4 w-4" />
                      Descargar PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Directorio */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader 
              title="Directorio de Servidores Públicos" 
              description="Información de contacto de los titulares de las diferentes áreas."
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="bg-primary/5 px-6 py-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm">{dept.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="font-medium text-foreground">{dept.titular}</p>
                      <p className="text-sm text-secondary">{dept.cargo}</p>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{dept.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        <span>{dept.telefono}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>{dept.ubicacion}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Información adicional */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader 
              title="Atribuciones y Funciones" 
              description="Documentos que describen las atribuciones y funciones de cada área."
            />
            
            <div className="bg-card border border-border rounded-lg divide-y divide-border">
              <DocumentItem
                title="Manual de Organización General"
                description="Documento que describe la estructura, funciones y responsabilidades de cada área."
                date="Actualizado: Enero 2025"
                downloadUrl="#"
                variant="default"
              />
              <DocumentItem
                title="Reglamento Interior de la Administración"
                description="Normativa que regula la organización y funcionamiento de las dependencias."
                date="Actualizado: Diciembre 2024"
                downloadUrl="#"
                variant="default"
              />
              <DocumentItem
                title="Catálogo de Puestos"
                description="Descripción de los puestos y perfiles de la administración municipal."
                date="Actualizado: Enero 2025"
                downloadUrl="#"
                variant="default"
              />
              <DocumentItem
                title="Tabulador de Sueldos"
                description="Tabulador de sueldos y salarios del personal de la administración."
                date="Actualizado: Enero 2025"
                downloadUrl="#"
                variant="default"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
