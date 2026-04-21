import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { DocumentItem } from "@/components/document-item"
import { 
  Users, 
  FileText, 
  ClipboardList, 
  HeartHandshake,
  Building,
  FileCheck,
  Briefcase,
  Calendar,
  Download
} from "lucide-react"
import Link from "next/link"

const servicios = [
  {
    title: "Trámites y Servicios",
    description: "Catálogo completo de trámites y servicios disponibles para la ciudadanía.",
    icon: ClipboardList,
    href: "#tramites"
  },
  {
    title: "Programas Sociales",
    description: "Información sobre programas de apoyo social y desarrollo comunitario.",
    icon: HeartHandshake,
    href: "#programas"
  },
  {
    title: "Atención Ciudadana",
    description: "Canales de atención, quejas, sugerencias y solicitudes de información.",
    icon: Users,
    href: "#atencion"
  },
  {
    title: "Licitaciones y Contratos",
    description: "Información sobre procesos de licitación y contratos públicos.",
    icon: FileCheck,
    href: "#licitaciones"
  },
]

const tramites = [
  {
    title: "Licencia de Funcionamiento Comercial",
    description: "Autorización para operar establecimientos comerciales.",
    requisitos: "INE, Comprobante de domicilio, Uso de suelo"
  },
  {
    title: "Permiso de Construcción",
    description: "Autorización para realizar obras de construcción o remodelación.",
    requisitos: "Planos, Escrituras, Licencia de uso de suelo"
  },
  {
    title: "Constancia de Residencia",
    description: "Documento que acredita el domicilio del solicitante.",
    requisitos: "INE, Comprobante de domicilio reciente"
  },
  {
    title: "Pago de Predial",
    description: "Liquidación del impuesto predial de bienes inmuebles.",
    requisitos: "Clave catastral o recibo anterior"
  },
]

const programas = [
  {
    title: "Programa de Apoyo Alimentario",
    description: "Apoyo en especie para familias en situación de vulnerabilidad.",
    beneficiarios: "500 familias",
    periodo: "Enero - Diciembre 2025"
  },
  {
    title: "Becas Educativas",
    description: "Apoyo económico para estudiantes de educación básica y media superior.",
    beneficiarios: "1,200 estudiantes",
    periodo: "Ciclo escolar 2024-2025"
  },
  {
    title: "Mejoramiento de Vivienda",
    description: "Apoyo para mejoras en viviendas de familias de bajos recursos.",
    beneficiarios: "300 familias",
    periodo: "Enero - Junio 2025"
  },
  {
    title: "Apoyo a Adultos Mayores",
    description: "Programa de atención integral para personas de la tercera edad.",
    beneficiarios: "800 adultos mayores",
    periodo: "Permanente"
  },
]

const actas = [
  {
    title: "Acta de Cabildo Ordinaria - Marzo 2025",
    date: "15 de Marzo, 2025"
  },
  {
    title: "Acta de Cabildo Ordinaria - Febrero 2025",
    date: "15 de Febrero, 2025"
  },
  {
    title: "Acta de Cabildo Extraordinaria - Enero 2025",
    date: "28 de Enero, 2025"
  },
  {
    title: "Acta de Cabildo Ordinaria - Enero 2025",
    date: "15 de Enero, 2025"
  },
]

export default function AdministracionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground">Administración</h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl leading-relaxed">
              Información sobre trámites, servicios, programas sociales y atención ciudadana de la administración municipal.
            </p>
          </div>
        </section>

        {/* Servicios principales */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicios.map((servicio, index) => (
                <Link 
                  key={index} 
                  href={servicio.href}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                    <servicio.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{servicio.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{servicio.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trámites */}
        <section id="tramites" className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader 
              title="Trámites y Servicios" 
              description="Catálogo de trámites más solicitados por la ciudadanía."
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              {tramites.map((tramite, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground">{tramite.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{tramite.description}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs font-medium text-secondary">Requisitos principales:</p>
                    <p className="text-xs text-muted-foreground mt-1">{tramite.requisitos}</p>
                  </div>
                  <button className="mt-4 text-sm px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Ver detalles
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programas Sociales */}
        <section id="programas" className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader 
              title="Programas Sociales" 
              description="Programas de apoyo implementados por la administración municipal."
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              {programas.map((programa, index) => (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="bg-secondary/10 px-6 py-4 border-b border-border">
                    <h3 className="font-semibold text-foreground">{programa.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground">{programa.description}</p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-xs font-medium text-secondary">Beneficiarios</p>
                        <p className="text-foreground">{programa.beneficiarios}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-secondary">Período</p>
                        <p className="text-foreground">{programa.periodo}</p>
                      </div>
                    </div>
                    <button className="mt-4 text-sm px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors">
                      Más información
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Actas de Cabildo */}
        <section id="recursos" className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader 
              title="Actas de Cabildo" 
              description="Actas de las sesiones del H. Ayuntamiento."
            />
            
            <div className="bg-card border border-border rounded-lg divide-y divide-border max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20">
              {actas.map((acta, index) => (
                <div key={index} className="flex items-center justify-between p-4 hover:bg-muted transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground">{acta.title}</h4>
                      <p className="text-xs text-muted-foreground">{acta.date}</p>
                    </div>
                  </div>
                  <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button className="text-sm px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                Ver todas las actas
              </button>
            </div>
          </div>
        </section>

        {/* Gaceta Municipal */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader 
              title="Gaceta Municipal" 
              description="Publicaciones oficiales del H. Ayuntamiento."
            />
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-accent/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">2025</h3>
                <p className="text-sm text-muted-foreground mt-2">3 publicaciones</p>
                <button className="mt-4 text-sm text-primary hover:underline">Ver ediciones</button>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-accent/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">2024</h3>
                <p className="text-sm text-muted-foreground mt-2">12 publicaciones</p>
                <button className="mt-4 text-sm text-primary hover:underline">Ver ediciones</button>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-accent/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">2023</h3>
                <p className="text-sm text-muted-foreground mt-2">12 publicaciones</p>
                <button className="mt-4 text-sm text-primary hover:underline">Ver ediciones</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
