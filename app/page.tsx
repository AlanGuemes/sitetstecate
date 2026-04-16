import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ModuleCard } from "@/components/module-card"
import { SearchBar } from "@/components/search-bar"
import { TransparencyCard } from "@/components/transparency-card"
import { ScrollIndex } from "@/components/scroll-index"
import {
  Building2,
  FileText,
  Users,
  Wallet,
  Scale,
  LayoutGrid,
  Search,
  ArrowRight,
  Shield,
  Eye,
  ClipboardList,
  BookOpen
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 relative">
        <ScrollIndex />
        {/* Hero Section */}
        <section className="relative bg-primary overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen_2026-04-14_100248418-yK4fxwl9IAUS8Mm18vj4GvfM8gFr9h.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

          <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl text-balance">
              Portal de<br />Transparencia<br />Municipal
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
              Obligaciones de transparencia conforme a la Ley de Transparencia y Acceso a la Información Pública de Tecate B.C.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#div-cumplimiento"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                <Eye className="h-5 w-5" />
                Ver Obligaciones
              </Link>
              <Link
                href="#modulos"
                className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
              >
                Explorar Módulos
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

        </section>

        {/* Estadísticas */}
        <section id="estadisticas" className="py-10 lg:py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
              <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-none">48+</p>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-tight">Artículos Publicados</p>
              </div>
              <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-none">120+</p>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-tight">Documentos Disponibles</p>
              </div>
              <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-none">5</p>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-tight">Módulos de Información</p>
              </div>
              <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary leading-tight">Abril{"\u00A0"}2026</p>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-tight">Última Actualización</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divisor — Explorar*/}
        <div id="div-explorar" className="flex flex-col items-center justify-center py-8 bg-background">
          <div className="flex items-center gap-4 w-full max-w-2xl px-4">
            <div className="flex-1 h-px bg-border" />
            <div className="flex flex-col items-center gap-1.5">
              <div className="rounded-full border-2 border-primary/30 bg-primary/5 p-3 shadow-sm">
                <Search className="h-7 w-7 text-primary" aria-label="Explorar" />
              </div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Explorar</span>
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>

        {/* Explorar */}
        <section id="modulos" className="pt-6 pb-16 lg:pt-8 lg:pb-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Buscador rápido */}
            <SearchBar />
            {/* Módulos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ModuleCard
                title="Transparencia"
                description="Consulta las obligaciones de transparencia, avisos de privacidad y tabla de aplicabilidad."
                href="/transparencia"
                icon={Eye}
                variant="primary"
              />
              <ModuleCard
                title="Estructura"
                description="Conoce la estructura organizacional, organigramas y directorio de servidores públicos."
                href="/estructura"
                icon={Building2}
                variant="secondary"
              />
              <ModuleCard
                title="Administración"
                description="Información sobre trámites, servicios, programas sociales y atención ciudadana."
                href="/administracion"
                icon={Users}
                variant="accent"
              />
              <ModuleCard
                title="Finanzas"
                description="Consulta el presupuesto, estados financieros, cuenta pública y gastos operativos."
                href="/finanzas"
                icon={Wallet}
                variant="primary"
              />
              <ModuleCard
                title="Normatividad"
                description="Accede a leyes, reglamentos, manuales administrativos y marco jurídico aplicable."
                href="/normatividad"
                icon={Scale}
                variant="secondary"
              />
              <ModuleCard
                title="Recursos Humanos"
                description="Información sobre nóminas, plazas, tabuladores y plantilla de personal."
                href="/administracion#recursos"
                icon={LayoutGrid}
                variant="accent"
              />
            </div>
          </div>
        </section>

        {/* Banner CTA */}
        <div className="relative overflow-hidden bg-primary">
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-1">Transparencia activa</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground leading-tight">
                La información pública es <span className="text-secondary">tu derecho</span>
              </h2>
              <p className="mt-2 text-primary-foreground/75 text-sm max-w-lg">
                Consulta las obligaciones de transparencia del H. Ayuntamiento de Tecate conforme a la Ley de Transparencia y Acceso a la Información Pública de Baja California.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/#div-cumplimiento"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-secondary/90 transition-colors shadow-lg"
              >
                <Eye className="h-4 w-4" />
                Ver Obligaciones
              </Link>
              <Link
                href="/#buscador"
                className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/25 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-foreground/20 transition-colors"
              >
                <Search className="h-4 w-4" />
                Buscar documentos
              </Link>
            </div>
          </div>
        </div>

        {/* Divisor — Cumplimiento */}
        <div id="div-cumplimiento" className="flex flex-col items-center justify-center py-8 bg-muted">
          <div className="flex items-center gap-4 w-full max-w-2xl px-4">
            <div className="flex-1 h-px bg-border" />
            <div className="flex flex-col items-center gap-1.5">
              <div className="rounded-full border-2 border-primary/30 bg-background p-3 shadow-sm">
                <ClipboardList className="h-7 w-7 text-primary" aria-label="Cumplimiento" />
              </div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Cumplimiento</span>
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>

        {/* Sección de Obligaciones */}
        <section id="obligaciones" className="pt-6 pb-16 lg:pt-8 lg:pb-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">Obligaciones de Transparencia</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm">
                Información conforme a los artículos de la Ley de Transparencia y Acceso a la Información Pública.
              </p>
            </div>

            {/* Fila 1 — Artículos */}
            <div className="mb-3">
              <p className="text-xs font-semibold text-primary/70 uppercase tracking-widest mb-3 pl-1">Artículos</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center" >
                {[
                  { art: "Artículo 81", href: "/transparencia#art81" },
                  { art: "Artículo 82", href: "/transparencia#art82" },
                  { art: "Artículo 83", href: "/transparencia#art83" },
                  { art: "Artículo 85", href: "/transparencia#art85" },
                ].map(({ art, href }) => (
                  <Link
                    key={art}
                    href={href}
                    className="group flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-4 shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-primary uppercase tracking-wide leading-tight">{art}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Fila 2 — Solicitudes */}
            <div className="mb-3">
              <p className="text-xs font-semibold text-primary/70 uppercase tracking-widest mb-3 pl-1">Solicitudes</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Solicitud de Acceso a la Información", href: "/transparencia#acceso", icon: FileText },
                  { label: "Solicitud de Derecho ARCO", href: "/transparencia#arco", icon: Shield },
                  { label: "Listado de Denuncias Públicas", href: "/transparencia#denuncias", icon: Scale },
                  { label: "Material de Apoyo", href: "/transparencia#material", icon: Users },
                ].map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    className="group flex flex-col items-center justify-center text-center bg-card border border-border rounded-xl px-4 py-5 shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-200 min-h-[90px]"
                  >
                    <Icon className="h-5 w-5 text-secondary mb-2 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-semibold text-primary group-hover:text-primary/80 leading-tight">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Fila 3 — Recursos */}
            <div>
              <p className="text-xs font-semibold text-primary/70 uppercase tracking-widest mb-3 pl-1">Recursos</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Tabla de Aplicabilidad", href: "/transparencia#aplicabilidad", icon: LayoutGrid },
                  { label: "Archivo de Sesiones Anteriores", href: "/transparencia#sesiones", icon: FileText },
                  { label: "¿Cómo Presentar una Denuncia?", href: "/transparencia#como-denunciar", icon: Eye },
                  { label: "Avisos de Privacidad", href: "/transparencia#privacidad", icon: Search },
                ].map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    className="group flex flex-col items-center justify-center text-center bg-card border border-border rounded-xl px-4 py-5 shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-200 min-h-[90px]"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted border border-border mb-2 group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-foreground leading-tight">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Divisor — Acceso Rapido */}
        <div id="div-acceso-rapido" className="flex flex-col items-center justify-center py-8">
          <div className="flex items-center gap-4 w-full max-w-2xl px-4">
            <div className="flex-1 h-px bg-border" />
            <div className="flex flex-col items-center gap-1.5">
              <div className="rounded-full border-2 border-primary/30 bg-background p-3 shadow-sm">
                <Search className="h-7 w-7 text-primary" aria-label="Acceso Rapido" />
              </div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Acceso Rapido</span>
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>

        {/* Acceso Rápido */}
        <section id="acceso-rapido" className="pt-4 pb-16 lg:pt-6 lg:pb-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">

            {/* Tarjeta principal + features */}
            <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="grid lg:grid-cols-5">

                {/* Panel izquierdo — CTA */}
                <div className="lg:col-span-2 bg-primary px-8 py-10 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-secondary/20 text-secondary border border-secondary/30 px-3 py-1 rounded-full mb-4">
                      <Search className="h-3 w-3" />
                      Acceso Directo
                    </span>
                    <h2 className="text-2xl font-bold text-primary-foreground leading-tight">
                      ¿Buscas información específica?
                    </h2>
                    <p className="mt-3 text-primary-foreground/75 text-sm leading-relaxed">
                      Utiliza el buscador o navega por los módulos para encontrar la información que necesitas de manera rápida.
                    </p>
                    <Link
                      href="/#buscador"
                      className="mt-6 inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-secondary/90 transition-colors shadow"
                    >
                      <Search className="h-4 w-4" />
                      Buscar Documentos
                    </Link>
                  </div>
                </div>

                {/* Panel derecho — Features en grid 2x2 */}
                <div className="lg:col-span-3 bg-card grid grid-cols-2">
                  {[
                    {
                      icon: Shield,
                      color: "text-primary",
                      bg: "bg-primary/10",
                      title: "Protección de Datos",
                      desc: "Tus datos personales están protegidos conforme a la ley.",
                      badge: "ARCO",
                    },
                    {
                      icon: FileText,
                      color: "text-secondary",
                      bg: "bg-secondary/10",
                      title: "Documentos Oficiales",
                      desc: "Información verificada y publicada por el sujeto obligado.",
                      badge: "Verificado",
                    },
                    {
                      icon: Eye,
                      color: "text-primary",
                      bg: "bg-primary/10",
                      title: "Acceso Público 24/7",
                      desc: "Toda la información disponible en línea, sin restricciones.",
                      badge: "En línea",
                    },
                    {
                      icon: Users,
                      color: "text-secondary",
                      bg: "bg-secondary/10",
                      title: "Atención Ciudadana",
                      desc: "Soporte y orientación para ejercer tus derechos de acceso.",
                      badge: "Soporte",
                    },
                  ].map(({ icon: Icon, color, bg, title, desc, badge }) => (
                    <div key={title} className="p-6 border-b border-r border-border last:border-b-0 [&:nth-child(2)]:border-r-0 [&:nth-child(4)]:border-b-0 [&:nth-child(3)]:border-b-0 hover:bg-muted/30 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`flex items-center justify-center w-9 h-9 rounded-lg ${bg}`}>
                          <Icon className={`h-5 w-5 ${color}`} />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${color === 'text-primary' ? 'border-primary/30 text-primary bg-primary/5' : 'border-secondary/30 text-secondary bg-secondary/5'}`}>
                          {badge}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground text-sm">{title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Logos institucionales */}
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest text-center mt-10 mb-4">Portales gubernamentales</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="https://www.plataformadetransparencia.org.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 min-h-[120px]"
              >
                <img
                  src="/res/pnacionaldetransparencia_logo.jpg"
                  alt="Plataforma Nacional de Transparencia"
                  className="max-h-42 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </a>
              <a
                href="https://transparencia.gob.mx/home.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 min-h-[120px]"
              >
                <img
                  src="/res/transpueblo_logo.jpg"
                  alt="Transparencia para el Pueblo - ITAIPBC"
                  className="max-h-42 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </a>
              <a
                href="https://sabg.bajacalifornia.gob.mx/sabgbc/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 min-h-[120px]"
              >
                <img
                  src="/res/buengobierno_logo.jpg"
                  alt="Baja California - Buen Gobierno"
                  className="max-h-42 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
