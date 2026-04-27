"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { ScrollIndexGeneric } from "@/components/scroll-index"
import { Users, Info, Building2, Table, FileText, CheckCircle2, Scale, ExternalLink, MapPin, Mail, Phone, Clock, ChevronRight, Shield } from "lucide-react"
import { contactoPrincipal } from "@/lib/data"
import Link from "next/link"

const navSections = [
  { navId: "quienes-somos",       observeId: "quienes-somos",       label: "Quiénes Somos"          },
  { navId: "informacion",         observeId: "informacion",         label: "Información"             },
  { navId: "sujetos-obligados",   observeId: "sujetos-obligados",   label: "Sujetos Obligados"      },
  { navId: "autoridad-garante",   observeId: "autoridad-garante",   label: "Autoridad Garante"      },
  { navId: "tabla-aplicabilidad", observeId: "tabla-aplicabilidad", label: "Tabla de Aplicabilidad" },
]

export default function TransparenciaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <ScrollIndexGeneric sections={navSections} />

      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Transparencia
            </h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl leading-relaxed">
              Portal de acceso a la información pública del H. Ayuntamiento de Tecate, Baja California,
              conforme a la Ley de Transparencia, Acceso a la Información Pública y Apertura Institucional
              para el Estado de Baja California.
            </p>
          </div>
        </section>

        {/* ── Quiénes Somos ────────────────────────────────────────── */}
        <section id="quienes-somos" className="py-12 bg-background scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Quiénes Somos"
              description="Unidad Coordinadora de Transparencia — H. Ayuntamiento de Tecate, Baja California · XXV Ayuntamiento"
            />

            {/* Institution badge */}
            <div className="bg-card border border-border rounded-lg p-5 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Unidad Coordinadora de Transparencia</p>
                  <p className="text-sm text-muted-foreground">H. Ayuntamiento de Tecate, Baja California · XXV Ayuntamiento</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">

              {/* 1. Misión y Visión */}
              <div>
                <h3 className="font-semibold text-foreground mb-1">1. Misión y Visión</h3>
                <p className="text-xs text-primary font-medium mb-4">(Art. 34 y 36 LTAIPBC)</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-5">
                    <h4 className="font-semibold text-foreground text-sm mb-3 text-center">Misión</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Somos la instancia del H. Ayuntamiento de Tecate responsable de garantizar el ejercicio efectivo del derecho de acceso a la información pública. Coordinamos la publicación oportuna y actualizada de las obligaciones de transparencia del municipio, atendemos las solicitudes ciudadanas de información, y promovemos al interior de la administración una cultura de apertura, rendición de cuentas y apego a la legalidad conforme a la Ley de Transparencia, Acceso a la Información Pública y Apertura Institucional para el Estado de Baja California.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-5">
                    <h4 className="font-semibold text-foreground text-sm mb-3 text-center">Visión</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ser una Unidad de Transparencia de referencia en Baja California, reconocida por su capacidad de respuesta, su trabajo proactivo en la publicación de información y su compromiso con acercar al ciudadano de Tecate a la información que le pertenece — de forma clara, accesible y sin necesidad de solicitarla.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Historia Institucional */}
              <div>
                <h3 className="font-semibold text-foreground mb-1">2. Historia Institucional</h3>
                <p className="text-xs text-primary font-medium mb-4">(Art. 55-I LTAIPBC — Marco normativo)</p>
                <div className="bg-card border border-border rounded-lg p-5 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    La Unidad Coordinadora de Transparencia del H. Ayuntamiento de Tecate fue constituida en cumplimiento de las disposiciones de la Ley de Transparencia del Estado de Baja California, como el órgano interno responsable de fungir como enlace entre la ciudadanía y la Administración Pública Municipal en materia de acceso a la información.
                  </p>
                  <p>
                    Durante el XXV Ayuntamiento, la Unidad ha asumido un rol activo en la digitalización del portal de transparencia, la coordinación de los enlaces de transparencia de cada dependencia municipal, y el cumplimiento de las obligaciones de publicación proactiva establecidas en los Arts. 55 y 56 de la LTAIPBC publicada el 16 de septiembre de 2025.
                  </p>
                  <p>
                    La Unidad opera bajo la supervisión del Comité de Transparencia del municipio y en coordinación permanente con la autoridad garante: Transparencia para el Pueblo / ITAIPBC.
                  </p>
                  <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="text-sm text-foreground">
                      <strong>Fundamento legal de creación:</strong> Art. 34 LTAIPBC · Reglamento de Transparencia y Acceso a la Información Pública de los Sujetos Obligados de la Administración Pública Municipal de Tecate, Baja California.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Atribuciones y Funciones */}
              <div>
                <h3 className="font-semibold text-foreground mb-1">3. Atribuciones y Funciones</h3>
                <p className="text-xs text-primary font-medium mb-4">(Art. 34 LTAIPBC — atribuciones literales de la Unidad de Transparencia)</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Conforme al Artículo 34 de la LTAIPBC, la Unidad Coordinadora de Transparencia tiene las siguientes atribuciones:
                </p>
                <div className="grid gap-3">
                  {[
                    { title: "I. Publicación proactiva de información", desc: "Recabar y difundir la información de transparencia obligatoria, propiciando que todas las áreas del municipio la actualicen periódicamente conforme a la ley." },
                    { title: "II. Atención de solicitudes de información", desc: "Recibir y dar trámite a las solicitudes de acceso a la información presentadas por cualquier ciudadano, en un plazo máximo de 20 días hábiles (prorrogables 10 más), de forma gratuita en formato digital." },
                    { title: "III. Orientación ciudadana", desc: "Auxiliar a las personas en la elaboración de sus solicitudes y orientarles sobre qué dependencia es competente para responder cada consulta." },
                    { title: "IV. Gestión interna", desc: "Realizar los trámites internos necesarios para que cada área del municipio atienda las solicitudes en tiempo y forma, y efectuar las notificaciones correspondientes a los solicitantes." },
                    { title: "V. Mejora continua", desc: "Proponer al Comité de Transparencia los procedimientos internos que aseguren mayor eficiencia en la gestión de solicitudes." },
                    { title: "VI. Informe anual", desc: "Recabar y enviar a la autoridad garante los datos necesarios para la elaboración del informe anual de transparencia." },
                    { title: "VII. Capacitación institucional", desc: "Promover y coordinar programas de capacitación en materia de transparencia y acceso a la información para todos los servidores públicos del municipio." },
                    { title: "VIII. Clasificación de información", desc: "Apoyar los procesos de clasificación, reserva y desclasificación de información en coordinación con el Comité de Transparencia, conforme al Art. 88 LTAIPBC." }
                  ].map((attr, idx) => (
                    <div key={idx} className="flex gap-3 items-start bg-card border border-border rounded-lg p-4">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{attr.title}</p>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{attr.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Titular y Autoridades */}
              <div>
                <h3 className="font-semibold text-foreground mb-1">4. Titular y Autoridades</h3>
                <p className="text-xs text-primary font-medium mb-4">(Directorio oficial)</p>
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                    <div className="p-5">
                      <p className="text-xs font-medium text-secondary uppercase tracking-wider mb-1">Titular</p>
                      <p className="font-semibold text-foreground">{contactoPrincipal.titular}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{contactoPrincipal.cargo}</p>
                      <div className="mt-5 space-y-3">
                        <div>
                          <p className="text-xs font-medium text-secondary uppercase tracking-wider mb-0.5">Dependencia</p>
                          <p className="text-sm text-foreground">{contactoPrincipal.dependencia}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-secondary uppercase tracking-wider mb-0.5">Plataforma Nacional</p>
                          <a href={`https://${contactoPrincipal.plataforma}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">{contactoPrincipal.plataforma}</a>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-muted/20">
                      <p className="text-xs font-medium text-secondary uppercase tracking-wider mb-3">Datos de Contacto</p>
                      <ul className="space-y-4 text-sm">
                        <li className="flex gap-3 items-start">
                          <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{contactoPrincipal.domicilio}</span>
                        </li>
                        <li className="flex gap-3 items-center">
                          <Mail className="h-4 w-4 text-primary shrink-0" />
                          <a href={`mailto:${contactoPrincipal.correo}`} className="text-foreground hover:text-primary transition-colors">{contactoPrincipal.correo}</a>
                        </li>
                        <li className="flex gap-3 items-center">
                          <Phone className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-foreground">{contactoPrincipal.telefono}</span>
                        </li>
                        <li className="flex gap-3 items-center">
                          <Clock className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-foreground">{contactoPrincipal.horario}</span>
                        </li>
                      </ul>
                      <div className="mt-6 pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Última actualización: {contactoPrincipal.actualizacion}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Información ──────────────────────────────────────────── */}
        <section id="informacion" className="py-12 bg-muted scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Información"
              description="Accede a la información pública de oficio disponible conforme a la Ley de Transparencia y Acceso a la Información Pública para el Estado de Baja California."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Avisos de Privacidad",                    href: "/aviso-privacidad",                                                                                                                             icon: FileText   },
                { label: "¿Cómo Presentar una Denuncia?",          href: "https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/denuncia/denunciaCiudadana.xhtml",                             icon: FileText   },
                { label: "Derechos ARCO",                           href: "/aviso-privacidad#derechos-arco",                                                                                                               icon: FileText   },
                { label: "Plataforma Nacional de Transparencia",   href: "https://www.plataformadetransparencia.org.mx",                                                                                                   icon: ExternalLink },
              ].map((item, i) => {
                const Icon = item.icon
                const isExternal = item.href.startsWith("http")
                return (
                  <a
                    key={i}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="bg-card border border-border rounded-lg p-5 hover:shadow-md hover:border-primary/20 transition-all group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Sujetos Obligados — enlaces ───────────────────────────── */}
        <section id="sujetos-obligados" className="py-12 bg-background scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Sujetos Obligados"
              description="Consulta el universo de sujetos obligados del Municipio, sus obligaciones de transparencia y el marco normativo aplicable."
            />
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Listado de Sujetos Obligados",
                  desc: "Organismos y dependencias obligados a transparentar su información conforme al Art. 19 LTAIPBC.",
                  href: "/sujetos-obligados#listado",
                  icon: Building2,
                },
                {
                  label: "Obligaciones Comunes (Art. 55)",
                  desc: "Obligaciones de transparencia que aplican a todos los sujetos obligados del Estado.",
                  href: "/sujetos-obligados#obligaciones-comunes",
                  icon: Scale,
                },
                {
                  label: "Obligaciones del Municipio (Art. 56)",
                  desc: "Obligaciones específicas aplicables al Municipio de Tecate como sujeto obligado.",
                  href: "/sujetos-obligados#obligaciones-municipio",
                  icon: FileText,
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <Link
                    key={i}
                    href={item.href}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all group flex flex-col gap-3"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 text-primary text-xs font-medium">
                      Ver detalle <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Autoridad Garante ─────────────────────────────────── */}
        <section id="autoridad-garante" className="py-12 bg-muted scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Autoridad Garante"
              description="Instancia responsable de garantizar el derecho de acceso a la información y resolver recursos de revisión en Baja California."
            />
            <Link
              href="/autoridad-garante"
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all group flex items-start gap-5 max-w-2xl"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <Shield className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Transparencia para el Pueblo (TPP)</p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Órgano garante en materia de transparencia y acceso a la información. Consulta domicilios, sitios web, cómo interponer un recurso de revisión y cómo presentar una denuncia ciudadana.
                </p>
                <div className="flex items-center gap-1 text-primary text-xs font-medium mt-3">
                  Ver datos de contacto <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ── Tabla de Aplicabilidad ───────────────────────────────── */}
        <section id="tabla-aplicabilidad" className="py-12 bg-muted scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Tabla de Aplicabilidad"
              description="Tabla de aplicabilidad dictaminada por el ITAIPBC con los artículos y fracciones que corresponden a este sujeto obligado."
            />
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Table className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground text-sm">Tabla de Aplicabilidad — H. Ayuntamiento de Tecate 2025</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Dictaminada por el ITAIPBC. Especifica los artículos y fracciones de la LTAIPBC aplicables a este sujeto obligado.
                </p>
              </div>
              <a
                href="https://s3-public-presigner-production-ed97.up.railway.app/2025_TablaAplicabilidad_AytoTecate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors shrink-0"
              >
                <ExternalLink className="h-4 w-4" />
                Ver documento
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
