import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DocumentItem } from "@/components/document-item"
import {
  Phone, Mail, MapPin, Download, Network, Scale, ListChecks,
  ChevronDown, Building2, BookOpen, FileText,
} from "lucide-react"
import { contactos, contactosParamunicipales } from "@/lib/data"

const organigramas = [
  {
    title: "Organigrama Central XXV Ayuntamiento",
    description: "ORGANIGRAMA CENTRAL XXV AYUNTAMIENTO.pdf",
    date: "Actualizado: Abril 2026",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/ORGANIGRAMA_CENTRAL_XXV_AYUNTAMIENTO.pdf"
  },
  {
    title: "Organigrama Coordinación de Gabinete",
    description: "COORDINACION DE GABINETE ORGANIGRAMA.pdf",
    date: "Actualizado: Abril 2026",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/COORDINACION_DE_GABINETE_ORGANIGRAMA.pdf"
  },
  {
    title: "Organigrama Coordinación de Gabinete (Versión 2)",
    description: "COORDINACION DE GABINETE ORGANIGRAMA2.pdf",
    date: "Actualizado: Abril 2026",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/COORDINACION_DE_GABINETE_ORGANIGRAMA2.pdf"
  },
  {
    title: "Organigrama Coordinación de Gabinete XXV Ayuntamiento",
    description: "ORGANIGRAMA COORDINACION DE GABINETE XXV AYUNTAMIENTO.pdf",
    date: "Actualizado: Abril 2026",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/ORGANIGRAMA_COORDINACION_DE_GABINETE_XXV_AYUNTAMIENTO.pdf"
  },
  {
    title: "Organigrama Desarrollo Económico",
    description: "DESARROLLO ECONOMICO ORGANIGRAMA 2025.pdf",
    date: "Actualizado: Abril 2026",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/DESARROLLO_ECONOMICO_ORGANIGRAMA_2025.pdf"
  },
  {
    title: "Organigrama DGIT",
    description: "DGIT ORGANIGRAMA.pdf",
    date: "Actualizado: Abril 2026",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/DGIT_ORGANIGRAMA.pdf"
  },
  {
    title: "Organigrama DSCTM",
    description: "DSCTM ORGANIGRAMA.pdf",
    date: "Actualizado: Abril 2026",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/DSCTM_ORGANIGRAMA.pdf"
  },
  {
    title: "Organigrama Tesorería",
    description: "ORGANIGRAMA 2025 TESORERIA.pdf",
    date: "Actualizado: Abril 2026",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/ORGANIGRAMA_2025_TESORERIA.pdf"
  },
  {
    title: "Organigrama Bienestar",
    description: "ORGANIGRAMA BIENESTAR.pdf",
    date: "Actualizado: Abril 2026",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/ORGANIGRAMA_BIENESTAR.pdf"
  },
  {
    title: "Organigrama Protección Civil y Bomberos",
    description: "PROTECCION CIVIL Y BOMBEROS ORGANIGRAMA.pdf",
    date: "Actualizado: Abril 2026",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/ORGANIGRAMA_PROTECCION_CIVIL_Y_BOMBEROS.pdf"
  },
  {
    title: "Organigrama Secretaría del Ayuntamiento",
    description: "SECRETARÍA DEL AYUNTAMIENTO ORGANIGRAMA.pdf",
    date: "Actualizado: Abril 2026",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/ORGANIGRAMA_SECRETARIA_DEL_AYUNTAMIENTO.pdf"
  }
]

const atribuciones = [
  {
    title: "Manual de Organización General",
    description: "Documento que describe la estructura, funciones y responsabilidades de cada área.",
    date: "Actualizado: Enero 2025",
    url: "#"
  },
  {
    title: "Reglamento Interior de la Administración",
    description: "Normativa que regula la organización y funcionamiento de las dependencias.",
    date: "Actualizado: Diciembre 2024",
    url: "#"
  },
  {
    title: "Catálogo de Puestos",
    description: "Descripción de los puestos y perfiles de la administración municipal.",
    date: "Actualizado: Enero 2025",
    url: "#"
  },
  {
    title: "Tabulador de Sueldos",
    description: "Tabulador de sueldos y salarios del personal de la administración.",
    date: "Actualizado: Enero 2025",
    url: "#"
  },
]

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
  children,
}: {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  badge: string
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
              <div className="flex gap-4 flex-shrink-0">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-center min-w-[90px]">
                  <p className="text-3xl font-bold text-primary-foreground">{organigramas.length}</p>
                  <p className="text-xs text-primary-foreground/70 mt-1">Organigramas</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-center min-w-[90px]">
                  <p className="text-3xl font-bold text-primary-foreground">{contactos.length}</p>
                  <p className="text-xs text-primary-foreground/70 mt-1">Municipal</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-center min-w-[90px]">
                  <p className="text-3xl font-bold text-primary-foreground">{contactosParamunicipales.length}</p>
                  <p className="text-xs text-primary-foreground/70 mt-1">Paramunicipal</p>
                </div>
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
          >
            <div className="divide-y divide-border">
              {organigramas.map((org, index) => (
                <a
                  key={index}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3.5 hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Network className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">{org.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{org.description}</p>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-border shrink-0" />
                  <div className="hidden sm:flex items-center w-36 shrink-0">
                    <span className="text-xs text-muted-foreground">{org.date}</span>
                  </div>
                  <div className="w-px h-8 bg-border shrink-0" />
                  <div className="flex items-center justify-center w-10 h-10 shrink-0 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Download className="h-4 w-4" />
                  </div>
                </a>
              ))}
            </div>
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

          {/* Atribuciones y Funciones */}
          <CollapsibleSection
            id="section-atribuciones"
            icon={BookOpen}
            title="Atribuciones y Funciones"
            description="Documentos que describen las atribuciones, funciones y perfiles de cada área de la administración municipal."
            badge={`${atribuciones.length} documentos`}
          >
            <div className="divide-y divide-border">
              {atribuciones.map((doc, i) => (
                <DocumentItem
                  key={i}
                  title={doc.title}
                  description={doc.description}
                  date={doc.date}
                  downloadUrl={doc.url}
                  variant="default"
                />
              ))}
            </div>
          </CollapsibleSection>
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
