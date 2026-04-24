"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Mail, MapPin, Phone, FileText, Globe, CheckCircle2 } from "lucide-react"

export default function AvisoPrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary-foreground/10 rounded-full mb-6">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <p className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm mb-2">
              H. Ayuntamiento de Tecate, Baja California
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Aviso de Privacidad
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-10 shadow-sm space-y-12">
              
              {/* I. Responsable */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm">I</span>
                  Responsable del tratamiento
                </h2>
                <div className="prose prose-sm sm:prose-base text-muted-foreground">
                  <p className="mb-6">
                    El H. Ayuntamiento de Tecate, Baja California, a través de la Unidad de Transparencia Municipal, es el responsable del tratamiento de los datos personales que los usuarios proporcionen al interactuar con el Portal de Transparencia del Municipio de Tecate.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-6 rounded-xl border border-border/50">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Domicilio oficial</p>
                        <p className="text-sm">Calzada de los Insurgentes S/N, Centro, Tecate, B.C.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Correo electrónico</p>
                        <p className="text-sm">transparencia@tecate.gob.mx</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Teléfono</p>
                        <p className="text-sm">(665) 655-3500</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Fundamento legal</p>
                        <p className="text-sm">LTAIPBC, publicada el 16 de septiembre de 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* II. Datos personales que se recaban */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm">II</span>
                  Datos personales que se recaban
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    En el Portal de Transparencia únicamente se recaban los datos personales estrictamente necesarios para atender solicitudes de acceso a la información pública. Estos son:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Datos de identificación:</strong> Nombre completo, correo electrónico, domicilio (opcional), número telefónico de contacto.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Datos de navegación:</strong> Registros de acceso (IP, fecha, sección visitada) únicamente con fines estadísticos y de seguridad.</span>
                    </li>
                  </ul>
                  <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mt-4">
                    <p className="text-sm text-foreground">
                      El portal no solicita datos sensibles (Art. 3 LTAIPBC). La consulta de información pública no requiere registro previo ni identificación del usuario (Art. 14 LTAIPBC).
                    </p>
                  </div>
                </div>
              </section>

              {/* III. Finalidad del tratamiento */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm">III</span>
                  Finalidad del tratamiento
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Los datos personales recabados serán utilizados exclusivamente para las siguientes finalidades primarias:
                  </p>
                  <div className="grid gap-4">
                    {[
                      "Tramitar, registrar y dar seguimiento a solicitudes de acceso a la información pública (Arts. 66–89 LTAIPBC).",
                      "Notificar al solicitante sobre el estado de su solicitud dentro del plazo legal de 20 días hábiles (prorrogable 10 días adicionales).",
                      "Generar estadísticas agregadas y anónimas sobre el uso del portal para mejorar el servicio.",
                      "Garantizar la seguridad e integridad del portal y prevenir accesos no autorizados."
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start bg-muted/30 p-4 rounded-lg border border-border/50">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm italic mt-4">
                    Los datos personales no serán utilizados para fines de publicidad, mercadotecnia, ni transferidos a terceros, salvo obligación legal o requerimiento de la autoridad garante (ITAIPBC).
                  </p>
                </div>
              </section>

              {/* IV. Transferencias de datos */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm">IV</span>
                  Transferencias de datos
                </h2>
                <div className="text-muted-foreground">
                  <p className="mb-4">
                    Sus datos podrán ser comunicados únicamente en los siguientes supuestos, sin requerir su consentimiento:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Al <strong>ITAIPBC</strong> (Instituto de Transparencia y Acceso a la Información de Baja California), cuando así lo requiera en ejercicio de sus atribuciones de verificación y resolución de recursos de revisión.</li>
                    <li>A la <strong>Plataforma Nacional de Transparencia (PNT)</strong> conforme al Art. 46 LTAIPBC, para el registro y seguimiento federal de solicitudes.</li>
                    <li>A <strong>autoridades judiciales o administrativas</strong> competentes, ante mandato legal o judicial.</li>
                  </ul>
                </div>
              </section>

              {/* V. Derechos ARCO */}
              <section id="derechos-arco">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm">V</span>
                  Derechos ARCO y mecanismo de ejercicio
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercerlos, podrá presentar solicitud por cualquiera de los siguientes medios:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card border border-border p-5 rounded-xl shadow-sm text-center">
                      <Globe className="h-6 w-6 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground text-sm mb-2">En línea</h3>
                      <p className="text-xs">A través de la Plataforma Nacional de Transparencia<br/><a href="https://www.plataformadetransparencia.org.mx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-1 inline-block">plataformadetransparencia.org.mx</a></p>
                    </div>
                    <div className="bg-card border border-border p-5 rounded-xl shadow-sm text-center">
                      <MapPin className="h-6 w-6 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground text-sm mb-2">Presencial</h3>
                      <p className="text-xs">Unidad de Transparencia Municipal, Calzada de los Insurgentes S/N, Tecate, B.C.</p>
                    </div>
                    <div className="bg-card border border-border p-5 rounded-xl shadow-sm text-center">
                      <Mail className="h-6 w-6 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground text-sm mb-2">Por escrito</h3>
                      <p className="text-xs">Dirigido a la Unidad de Transparencia al correo<br/><a href="mailto:transparencia@tecate.gob.mx" className="text-primary hover:underline mt-1 inline-block">transparencia@tecate.gob.mx</a></p>
                    </div>
                  </div>
                  <p className="text-sm mt-4">
                    El tiempo de respuesta es de 20 días hábiles a partir de la recepción de la solicitud, prorrogable 10 días adicionales en casos justificados. Si la respuesta es insatisfactoria, puede interponer recurso de revisión ante el ITAIPBC.
                  </p>
                </div>
              </section>

              {/* VI, VII, VIII */}
              <div className="grid grid-cols-1 gap-8 pt-6 border-t border-border">
                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">VI. Uso de cookies y tecnologías de rastreo</h2>
                  <p className="text-sm text-muted-foreground">
                    El Portal de Transparencia puede utilizar cookies de sesión estrictamente necesarias para el funcionamiento técnico del sitio. No se utilizan cookies de rastreo, publicidad o análisis de comportamiento de terceros. El usuario puede configurar su navegador para rechazar cookies, aunque ello puede afectar la funcionalidad del portal.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">VII. Conservación y seguridad de los datos</h2>
                  <p className="text-sm text-muted-foreground">
                    Los datos personales asociados a solicitudes de información serán conservados durante el tiempo que establezcan las disposiciones legales aplicables, incluyendo los plazos del Archivo Municipal. El Municipio de Tecate adopta medidas técnicas, administrativas y físicas para garantizar la confidencialidad e integridad de la información personal, conforme a las mejores prácticas en materia de seguridad de la información.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-foreground mb-3">VIII. Cambios al aviso de privacidad</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    El presente aviso podrá ser modificado en cualquier momento. Cualquier cambio sustancial será notificado mediante publicación en el Portal de Transparencia del Municipio de Tecate, indicando la fecha de la última actualización. Se recomienda consultar periódicamente este aviso.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-xs bg-muted/50 p-4 rounded-lg border border-border/50">
                    <div>
                      <span className="font-semibold text-foreground">Autoridad garante: </span>
                      <a href="http://itaipbc.org.mx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ITAIPBC · itaipbc.org.mx</a>
                    </div>
                    <span className="text-muted-foreground hidden sm:inline">•</span>
                    <div>
                      <span className="font-semibold text-foreground">Última actualización: </span>
                      <span className="text-muted-foreground">Abril 2026</span>
                    </div>
                  </div>
                </section>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
