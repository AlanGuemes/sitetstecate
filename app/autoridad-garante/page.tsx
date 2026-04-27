import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { ScrollIndexGeneric } from "@/components/scroll-index"
import { Building2, MapPin, Mail, Phone, Globe, ExternalLink, ChevronRight, AlertCircle, FileText, Shield } from "lucide-react"
import Link from "next/link"

const navSections = [
  { navId: "identificacion",   observeId: "identificacion",   label: "Identificación"       },
  { navId: "domicilios",       observeId: "domicilios",       label: "Domicilios"            },
  { navId: "sitios-web",       observeId: "sitios-web",       label: "Sitios Web"            },
  { navId: "denuncia",         observeId: "denuncia",         label: "Cómo Denunciar"        },
  { navId: "recurso-revision", observeId: "recurso-revision", label: "Recurso de Revisión"   },
]

const oficinas = [
  {
    nombre: "Oficina Central — Mexicali",
    domicilio: "Av. Álvaro Obregón y Calle México #599, Primera Sección, C.P. 21100, Mexicali, B.C.",
    telefonos: ["(686) 555-4920", "555-4921", "555-4922"],
    correo: "egonzalezm@baja.gob.mx",
  },
  {
    nombre: "Secretaría Anticorrupción y Buen Gobierno",
    domicilio: "Edificio del Poder Ejecutivo, 4° piso, Calzada Independencia No. 994, Centro Cívico, C.P. 21000, Mexicali, B.C.",
    telefonos: ["(686) 558-1135"],
    correo: null,
  },
  {
    nombre: "Oficina Regional — Tijuana",
    domicilio: "Blvd. Aguacaliente No. 21939, Fraccionamiento El Paraíso, C.P. 22160, Tijuana, B.C.",
    telefonos: ["(664) 979-2920", "979-2926"],
    correo: null,
  },
  {
    nombre: "Oficina Regional — Ensenada",
    domicilio: "Centro de Gobierno del Estado, segundo piso, Carretera Transpeninsular Ensenada-La Paz No. 6500, Ex-Ejido Chapultepec, Ensenada, B.C.",
    telefonos: ["(646) 172-3034"],
    correo: null,
  },
]

const sitiosWeb = [
  { label: "Portal institucional de Transparencia para el Pueblo (BC)", url: "https://www1.bajacalifornia.gob.mx/sabgbc/TPP.html" },
  { label: "Secretaría Anticorrupción y Buen Gobierno BC",              url: "https://sabg.bajacalifornia.gob.mx/"               },
  { label: "Portal de Transparencia BC",                                 url: "http://www.transparenciabc.gob.mx/"                },
  { label: "Plataforma Nacional de Transparencia",                       url: "https://www.plataformadetransparencia.org.mx/"     },
]

const pasosDenuncia = [
  { paso: 1, accion: "Identifica la obligación incumplida (artículo y fracción de la LTAIPBC)",                                                                              plazo: "—"                              },
  { paso: 2, accion: "Reúne evidencia: capturas del portal, fecha y URL específica",                                                                                          plazo: "—"                              },
  { paso: 3, accion: "Presenta tu denuncia por uno de estos medios: Plataforma Nacional de Transparencia, correo electrónico o escrito en oficinas de TPP",                   plazo: "—"                              },
  { paso: 4, accion: "La Autoridad Garante emite dictamen",                                                                                                                    plazo: "20 días (Art. 71)"              },
  { paso: 5, accion: "El sujeto obligado subsana",                                                                                                                             plazo: "20 días (Art. 71)"              },
  { paso: 6, accion: "De no subsanar, la Autoridad Garante notifica al superior jerárquico e impone sanciones",                                                               plazo: "10 + 5 días adicionales (Art. 71-22)" },
]

export default function AutoridadGarantePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <ScrollIndexGeneric sections={navSections} />

      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/transparencia" className="inline-flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                <ChevronRight className="h-4 w-4 rotate-180" />
                Transparencia
              </Link>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Autoridad Garante en materia de transparencia
            </h1>
            <p className="mt-4 text-primary-foreground/80 max-w-3xl leading-relaxed text-sm">
              A partir de la reforma del 16 de septiembre de 2025, la autoridad garante en materia de transparencia y acceso a la información pública para los sujetos obligados de la Administración Pública Estatal y Municipal en Baja California es <strong className="text-primary-foreground">Transparencia para el Pueblo</strong>, órgano administrativo desconcentrado de la Secretaría Anticorrupción y Buen Gobierno del Estado (Art. 3 fracciones IV y XXI; Transitorio Noveno LTAIPBC). Sustituye al anterior Instituto de Transparencia, Acceso a la Información Pública y Protección de Datos Personales del Estado de Baja California (ITAIPBC).
            </p>
          </div>
        </section>

        {/* ── Identificación ───────────────────────────────────────── */}
        <section id="identificacion" className="py-12 bg-background scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Identificación de la Autoridad Garante"
              description="Datos oficiales de Transparencia para el Pueblo conforme a la LTAIPBC vigente."
            />
            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/50 text-secondary border-b border-border text-xs uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="px-5 py-3 w-48">Dato</th>
                      <th className="px-5 py-3">Valor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-foreground">
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-4 font-semibold text-muted-foreground">Nombre oficial</td>
                      <td className="px-5 py-4 font-semibold text-primary">Transparencia para el Pueblo (TPP)</td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-4 font-semibold text-muted-foreground">Adscripción</td>
                      <td className="px-5 py-4">Órgano Administrativo Desconcentrado de la Secretaría Anticorrupción y Buen Gobierno del Estado de Baja California</td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-4 font-semibold text-muted-foreground">Fundamento de creación</td>
                      <td className="px-5 py-4">Arts. 3-IV, 3-XXI y Transitorios Séptimo a Noveno de la LTAIPBC (POE No. 56, 16/09/2025)</td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-4 font-semibold text-muted-foreground">Atribución principal</td>
                      <td className="px-5 py-4">Conocer recursos de revisión, denuncias por incumplimiento y verificación virtual de portales de sujetos obligados</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ── Domicilios ───────────────────────────────────────────── */}
        <section id="domicilios" className="py-12 bg-muted scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Domicilios oficiales"
              description="Oficinas de Transparencia para el Pueblo en el Estado de Baja California."
            />
            <div className="grid md:grid-cols-2 gap-4">
              {oficinas.map((oficina, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Building2 className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{oficina.nombre}</h3>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{oficina.domicilio}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{oficina.telefonos.join(" · ")}</span>
                  </div>
                  {oficina.correo && (
                    <div className="flex items-center gap-2.5 text-sm">
                      <Mail className="h-4 w-4 text-primary shrink-0" />
                      <a href={`mailto:${oficina.correo}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {oficina.correo}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sitios Web ───────────────────────────────────────────── */}
        <section id="sitios-web" className="py-12 bg-background scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Sitios web oficiales"
              description="Recursos digitales para acceder a información, servicios y la Plataforma Nacional de Transparencia."
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {sitiosWeb.map((sitio, i) => (
                <a
                  key={i}
                  href={sitio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all group flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Globe className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm leading-snug">{sitio.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{sitio.url}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cómo Denunciar ───────────────────────────────────────── */}
        <section id="denuncia" className="py-12 bg-muted scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Cómo presentar una denuncia ciudadana"
              description="Art. 72 LTAIPBC — Cualquier persona puede denunciar la falta de publicación de las obligaciones de los Arts. 55 a 66 LTAIPBC. No se requiere trámite previo y la denuncia es gratuita."
            />

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-8 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                Cualquier persona puede denunciar ante la Autoridad Garante la falta de publicación de las obligaciones de los Arts. 55 a 66 LTAIPBC <strong>en cualquier momento</strong>. No se requiere trámite previo y la denuncia es gratuita.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
              <div className="bg-primary/5 px-5 py-3 border-b border-border">
                <h3 className="font-semibold text-primary">Pasos para denunciar</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/30 text-secondary text-xs uppercase tracking-wider font-semibold border-b border-border">
                    <tr>
                      <th className="px-5 py-2.5 w-16 text-center">Paso</th>
                      <th className="px-5 py-2.5">Acción</th>
                      <th className="px-5 py-2.5 w-40">Plazo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-foreground">
                    {pasosDenuncia.map((item) => (
                      <tr key={item.paso} className="hover:bg-muted/20 transition-colors">
                        <td className="px-5 py-4 text-center">
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-xs">
                            {item.paso}
                          </span>
                        </td>
                        <td className="px-5 py-4 leading-relaxed">{item.accion}</td>
                        <td className="px-5 py-4 text-xs text-muted-foreground whitespace-nowrap">{item.plazo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ── Recurso de Revisión ──────────────────────────────────── */}
        <section id="recurso-revision" className="py-12 bg-background scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Recurso de revisión"
              description="Si presentaste una solicitud de información y la respuesta fue negativa, incompleta o no la recibiste en tiempo."
            />

            <div className="bg-card border border-border rounded-xl p-8 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">¿Cuándo puedo interponer un recurso?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Si presentaste una solicitud de información al Municipio de Tecate y la respuesta fue <strong>negativa, incompleta o no la recibiste en tiempo</strong>, puedes interponer Recurso de Revisión ante Transparencia para el Pueblo en un plazo de <strong>15 días hábiles</strong> posteriores a la respuesta o al vencimiento del plazo (Arts. 91 y siguientes LTAIPBC).
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border">
                <a
                  href="https://www.plataformadetransparencia.org.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 bg-muted/30 border border-border rounded-xl p-5 hover:border-primary/30 hover:bg-primary/5 transition-all group text-center"
                >
                  <Globe className="h-6 w-6 text-primary" />
                  <p className="font-semibold text-foreground text-sm">En línea</p>
                  <p className="text-xs text-muted-foreground">Plataforma Nacional de Transparencia</p>
                </a>
                <div className="flex flex-col items-center gap-2 bg-muted/30 border border-border rounded-xl p-5 text-center">
                  <MapPin className="h-6 w-6 text-primary" />
                  <p className="font-semibold text-foreground text-sm">Presencial</p>
                  <p className="text-xs text-muted-foreground">En cualquier oficina de Transparencia para el Pueblo</p>
                </div>
                <div className="flex flex-col items-center gap-2 bg-muted/30 border border-border rounded-xl p-5 text-center">
                  <Mail className="h-6 w-6 text-primary" />
                  <p className="font-semibold text-foreground text-sm">Por correo</p>
                  <p className="text-xs text-muted-foreground">Escrito dirigido a las oficinas de TPP</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-muted/30 border border-border rounded-lg p-5 text-xs text-muted-foreground leading-relaxed space-y-1.5">
              <p><strong>Sujeto obligado responsable de esta publicación:</strong> Ayuntamiento de Tecate, B.C.</p>
              <p><strong>Fundamento legal:</strong> Art. 3-IV, Art. 3-XXI, Art. 36, Art. 70, Art. 71 y Art. 72 LTAIPBC.</p>
              <p><strong>Última actualización:</strong> 20 de abril de 2026 <span className="mx-2 opacity-50">|</span> <strong>Fuente de datos de contacto:</strong> Directorio oficial de la Secretaría Anticorrupción y Buen Gobierno BC, abril 2026.</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
