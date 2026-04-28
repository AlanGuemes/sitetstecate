import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { DocumentItem } from "@/components/document-item"
import { Phone, Mail, MapPin, Download, Network, Scale, ListChecks, ChevronDown } from "lucide-react"
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
      {/* ── Collapsed row — 5 horizontal zones ───────────────────────── */}
      <summary className="flex items-center gap-3 px-4 py-3.5 cursor-pointer list-none bg-card border border-border rounded-xl hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm group-open:rounded-b-none group-open:border-b-0 group-open:shadow-sm transition-all duration-200">

        {/* Avatar */}
        <div className={avatarClass}>
          {initials}
        </div>

        {/* Zone 1: Nombre + Titular — always visible, flexible width */}
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-foreground text-sm leading-tight">{dept.nombre}</p>
          <p className="text-xs text-primary font-medium mt-0.5 truncate">{dept.titular}</p>
        </div>

        <div className="hidden sm:block w-px h-8 bg-border shrink-0" />

        {/* Zone 2: Teléfono + Correo — sm+ */}
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

        {/* Zone 3: Dirección — lg+, fixed width to give priority to name */}
        <div className="hidden lg:flex items-start gap-1.5 w-64 shrink-0">
          <MapPin className="h-3 w-3 text-primary/50 shrink-0 mt-0.5" />
          <span className="text-xs text-muted-foreground leading-snug">{dept.direccion}</span>
        </div>


        <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 ml-auto transition-transform duration-200 group-open:rotate-180" />
      </summary>

      {/* ── Expanded panel ─────────────────────────────────────────────── */}
      <div className="border border-t-0 border-border rounded-b-xl bg-muted/20 px-5 py-5 group-open:shadow-sm">

        {/* Fundamento — always in expanded panel */}
        {dept.fundamento && (
          <div className="flex items-start gap-2 text-xs text-muted-foreground mb-4">
            <Scale className="h-3.5 w-3.5 text-primary/60 shrink-0 mt-0.5" />
            <span className="leading-relaxed font-medium text-foreground/80">{dept.fundamento}</span>
          </div>
        )}

        {/* Contact info for small screens where it's hidden in the row */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4 text-xs text-muted-foreground">
          <span className="flex sm:hidden items-center gap-1.5"><Phone className="h-3 w-3 text-primary/50" />{dept.telefono}</span>
          <span className="flex sm:hidden items-center gap-1.5 truncate max-w-xs"><Mail className="h-3 w-3 text-primary/50 shrink-0" />{dept.correo}</span>
          <span className="flex lg:hidden items-start gap-1.5"><MapPin className="h-3 w-3 text-primary/50 shrink-0 mt-0.5" />{dept.direccion}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mb-4" />

        {/* Funciones + Áreas + Email action */}
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

            <div className="space-y-2">
              {organigramas.map((org, index) => (
                <a
                  key={index}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3.5 bg-card border border-border rounded-xl hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm transition-all duration-200 group"
                >
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Network className="h-5 w-5 text-secondary" />
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">{org.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{org.description}</p>
                  </div>

                  <div className="hidden sm:block w-px h-8 bg-border shrink-0" />

                  {/* Date */}
                  <div className="hidden sm:flex items-center w-36 shrink-0">
                    <span className="text-xs text-muted-foreground">{org.date}</span>
                  </div>

                  <div className="w-px h-8 bg-border shrink-0" />
                  
                  {/* Download Icon */}
                  <div className="flex items-center justify-center w-10 h-10 shrink-0 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Download className="h-4 w-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Directorio Unificado */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Directorio Municipal"
              description={`${contactos.length + contactosParamunicipales.length} dependencias y organismos · Haz clic en cada fila para ver funciones y áreas internas.`}
            />

            {/* Grupo: Administración Municipal */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-primary px-2.5 py-1 bg-primary/10 rounded-full">
                Administración Municipal
              </span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">{contactos.length}</span>
            </div>
            <div className="space-y-2 mb-8">
              {contactos.map((dept, index) => (
                <DeptCard key={`m-${index}`} dept={dept} variant="municipal" />
              ))}
            </div>

            {/* Grupo: Organismos Paramunicipales */}
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
        </section>

        {/* Información adicional */}
        <section className="py-12 bg-muted">
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
