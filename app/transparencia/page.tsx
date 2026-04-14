import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ChevronRight, Users, Info, Building2, Table } from "lucide-react"
import Link from "next/link"

const sections = [
  {
    id: "quienes-somos",
    title: "Quienes Somos",
    icon: Users,
    description:
      "Conoce la misión, visión, historia y estructura de la Coordinación de Gabinete del Municipio de Tecate, Baja California.",
    items: [
      { label: "Misión y Visión", href: "#" },
      { label: "Historia institucional", href: "#" },
      { label: "Atribuciones y funciones", href: "#" },
      { label: "Titular y autoridades", href: "#" },
    ],
  },
  {
    id: "informacion",
    title: "Información",
    icon: Info,
    description:
      "Accede a la información pública de oficio disponible conforme a la Ley de Transparencia y Acceso a la Información Pública para el Estado de Baja California.",
    items: [
      { label: "Avisos de Privacidad", href: "#" },
      { label: "Información Reservada", href: "#" },
      { label: "Derechos ARCO", href: "#" },
      { label: "Plataforma Nacional de Transparencia (PNT)", href: "#" },
    ],
  },
  {
    id: "sujetos-obligados",
    title: "Sujetos Obligados",
    icon: Building2,
    description:
      "Consulta el listado de sujetos obligados conforme a la normatividad vigente del ITAIPBC y sus obligaciones de transparencia aplicables.",
    items: [
      { label: "Listado de sujetos obligados", href: "#" },
      { label: "Obligaciones aplicables", href: "#" },
      { label: "Marco normativo del sujeto obligado", href: "#" },
      { label: "Datos de contacto del ITAIPBC", href: "#" },
    ],
  },
  {
    id: "tabla-aplicabilidad",
    title: "Tabla de Aplicabilidad",
    icon: Table,
    description:
      "Conoce la tabla de aplicabilidad dictaminada por el ITAIPBC con los artículos y fracciones que corresponden a este sujeto obligado.",
    items: [
      { label: "Tabla de aplicabilidad vigente", href: "#" },
      { label: "Artículos aplicables", href: "#" },
      { label: "Fracciones por período", href: "#" },
      { label: "Historial de actualizaciones", href: "#" },
    ],
  },
]

export default function TransparenciaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Transparencia
            </h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl leading-relaxed">
              Gestión de apoyos y atención directa de gran parte de las demandas sociales; la
              promoción y fortalecimiento de las relaciones con los poderes estatales, los
              ayuntamientos y los poderes federales.
            </p>
          </div>
        </section>

        {/* Secciones */}
        <section className="py-14 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <div
                    key={section.id}
                    className="bg-card border border-border rounded-xl overflow-hidden flex flex-col"
                  >
                    {/* Card header */}
                    <div className="flex items-center gap-4 px-6 pt-6 pb-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </span>
                      <h2 className="text-xl font-bold text-primary">{section.title}</h2>
                    </div>

                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-border mx-6" />

                    {/* Items list */}
                    <ul className="flex-1 divide-y divide-border">
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="flex items-center justify-between px-6 py-3.5 text-sm text-foreground hover:bg-muted transition-colors group"
                          >
                            <span className="group-hover:text-primary transition-colors">
                              {item.label}
                            </span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Footer action */}
                    <div className="px-6 py-4">
                      <Link
                        href={`#${section.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline"
                      >
                        Ver todo
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
