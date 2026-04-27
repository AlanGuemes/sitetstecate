"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { ScrollIndexGeneric } from "@/components/scroll-index"
import { Building2, Scale, FileText, ChevronLeft } from "lucide-react"
import Link from "next/link"

const navSections = [
  { navId: "listado",              observeId: "listado",              label: "Listado de Sujetos"          },
  { navId: "obligaciones-comunes", observeId: "obligaciones-comunes", label: "Obligaciones Comunes"        },
  { navId: "obligaciones-municipio", observeId: "obligaciones-municipio", label: "Obligaciones Municipio" },
]

const sujetosObligadosList = [
  { id: 1, acceso: "Portal Tecate · PNT", sujeto: "Ayuntamiento de Tecate y Administración Pública Municipal", tipo: "IV", naturaleza: "Gobierno municipal", creacion: "Constitución Política del Estado de B.C., Art. 80; Ley Orgánica del Municipio Libre del Estado de B.C." },
  { id: 2, acceso: "Portal · PNT", sujeto: "Instituto Municipal del Deporte de Tecate (IMDETE)", tipo: "V", naturaleza: "Organismo descentralizado", creacion: "—" },
  { id: 3, acceso: "Portal · PNT", sujeto: "Instituto Municipal de la Juventud de Tecate (IMJUVET)", tipo: "V", naturaleza: "Organismo descentralizado", creacion: "—" },
  { id: 4, acceso: "Portal · PNT", sujeto: "Instituto Municipal de la Mujer de Tecate (IMMUJER)", tipo: "V", naturaleza: "Organismo descentralizado", creacion: "—" },
  { id: 5, acceso: "Portal · PNT", sujeto: "Instituto Municipal de Planeación de Tecate (INPLADEM)", tipo: "V", naturaleza: "Organismo público descentralizado", creacion: "Acuerdo de creación 23 de enero de 2015 (publicación 23/12/2015)" },
  { id: 6, acceso: "Portal · PNT", sujeto: "Instituto de Promoción al Desarrollo Urbano y Regional (INPRODEUR)", tipo: "V", naturaleza: "Organismo descentralizado", creacion: "Acuerdo de creación 18 de marzo de 1994" },
  { id: 7, acceso: "Portal · PNT", sujeto: "Comisión Estatal de Servicios Públicos de Tecate (CESPTE) o equivalente", tipo: "V", naturaleza: "Organismo descentralizado / participación", creacion: "—" },
  { id: 8, acceso: "Portal · PNT", sujeto: "Sistema para el Desarrollo Integral de la Familia del Municipio de Tecate (DIF Tecate)", tipo: "V", naturaleza: "Organismo descentralizado", creacion: "—" },
  { id: 9, acceso: "Portal · PNT", sujeto: "Patronato del Bosque y/o Centro de Gobierno (si aplica)", tipo: "V", naturaleza: "Organismo de participación", creacion: "—" },
]

const obligacionesComunes = [
  { category: "Información institucional", items: [
    { fraccion: "I", obligacion: "Marco normativo aplicable: leyes, códigos, reglamentos, decretos de creación, manuales, reglas de operación, criterios y políticas" },
    { fraccion: "II", obligacion: "Estructura orgánica completa con atribuciones por área" },
    { fraccion: "III", obligacion: "Facultades específicas de cada área" },
    { fraccion: "IV", obligacion: "Metas y objetivos de áreas (Programa Operativo Anual)" },
    { fraccion: "V", obligacion: "Indicadores de interés público y de rendición de cuentas" }
  ]},
  { category: "Personal y recursos humanos", items: [
    { fraccion: "VI", obligacion: "Directorio de servidores públicos desde jefatura de departamento" },
    { fraccion: "VII", obligacion: "Remuneración bruta y neta de servidores públicos (base y confianza)" },
    { fraccion: "VIII", obligacion: "Gastos de representación y viáticos con informe de comisión" },
    { fraccion: "IX", obligacion: "Plazas de base, confianza y vacantes" },
    { fraccion: "X", obligacion: "Contratos por honorarios" },
    { fraccion: "XI", obligacion: "Versión pública de declaraciones patrimoniales" }
  ]},
  { category: "Unidad de Transparencia y datos de contacto", items: [
    { fraccion: "XII", obligacion: "Domicilio, teléfonos y correo de la Unidad de Transparencia" }
  ]},
  { category: "Finanzas, contratación y auditorías", items: [
    { fraccion: "XIII", obligacion: "Resultados de auditorías internas y externas" },
    { fraccion: "XIV", obligacion: "Contratos y convenios de adquisiciones, arrendamientos y servicios" },
    { fraccion: "XV", obligacion: "Contratos de obra pública" },
    { fraccion: "XVI", obligacion: "Avances físico-financieros de obras contratadas" },
    { fraccion: "XX", obligacion: "Deuda pública vigente" },
    { fraccion: "XXVI", obligacion: "Procedimientos de licitación y adjudicación" },
    { fraccion: "XXVIII", obligacion: "Convocatorias a concursos y resultados" }
  ]},
  { category: "Programas, servicios y trámites", items: [
    { fraccion: "XVII", obligacion: "Programas de apoyo: diseño, metas y evaluaciones" },
    { fraccion: "XVIII", obligacion: "Padrón de beneficiarios con nombre y monto" },
    { fraccion: "XIX", obligacion: "Servicios y trámites con requisitos y costos" }
  ]},
  { category: "Actos jurídicos relevantes", items: [
    { fraccion: "XXI", obligacion: "Concesiones, permisos y licencias otorgadas" },
    { fraccion: "XXII", obligacion: "Actos y resoluciones con erogaciones o afectación patrimonial" },
    { fraccion: "XXIII", obligacion: "Índice de información reservada" },
    { fraccion: "XXIV", obligacion: "Recursos públicos a sindicatos y donativos" },
    { fraccion: "XXV", obligacion: "Inventario de bienes muebles e inmuebles" },
    { fraccion: "XLVI", obligacion: "Otra información de utilidad pública (FAQ)" }
  ]}
]

const obligacionesEspecificas = [
  { fraccion: "I", obligacion: "Plan Municipal de Desarrollo y programas derivados" },
  { fraccion: "II", obligacion: "Presupuesto de egresos y fórmulas de distribución" },
  { fraccion: "III", obligacion: "Ingresos por participaciones federales, estatales y recaudación fiscal" },
  { fraccion: "IV", obligacion: "Expropiaciones decretadas y ejecutadas" },
  { fraccion: "V", obligacion: "Cancelación o condonación de créditos fiscales (RFC, monto)" },
  { fraccion: "VI", obligacion: "Actos de gobierno municipal" },
  { fraccion: "VII", obligacion: "Planes de desarrollo urbano, ordenamiento territorial, usos de suelo, licencias de uso de suelo y construcción" },
  { fraccion: "VIII", obligacion: "Aportaciones estatales recibidas por el Municipio" },
  { fraccion: "IX", obligacion: "Proyectos de disposiciones administrativas (reglamentos, circulares)" },
  { fraccion: "X", obligacion: "Gaceta municipal con resolutivos y acuerdos del Cabildo" },
  { fraccion: "XI", obligacion: "Actas de cabildo, controles de asistencia y sentido de votación de cada miembro" }
]

export default function SujetosObligadosPage() {
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
                <ChevronLeft className="h-4 w-4" />
                Transparencia
              </Link>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Sujetos Obligados
            </h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl leading-relaxed">
              Universo completo de sujetos obligados del Municipio de Tecate a transparentar y permitir el acceso a su información pública, conforme al Art. 19 de la LTAIPBC.
            </p>
          </div>
        </section>

        {/* ── Listado ──────────────────────────────────────────────── */}
        <section id="listado" className="py-12 bg-background scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Listado de Sujetos Obligados"
              description="Conforme al Art. 19, fracciones IV y V de la LTAIPBC."
            />

            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-4xl">
              Conforme al Art. 19, fracciones IV y V de la LTAIPBC, son sujetos obligados a transparentar y permitir el acceso a su información pública el Ayuntamiento de Tecate, su Administración Pública Municipal y los organismos descentralizados, desconcentrados y de participación municipal. A continuación, se presenta el universo completo de sujetos obligados del Municipio.
            </p>

            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
                  <thead className="bg-muted/50 text-secondary border-b border-border text-xs uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="px-4 py-3 text-center w-12">#</th>
                      <th className="px-4 py-3">Sujeto Obligado</th>
                      <th className="px-4 py-3">Acceso</th>
                      <th className="px-4 py-3 text-center">Tipo (Art. 19)</th>
                      <th className="px-4 py-3">Naturaleza Jurídica</th>
                      <th className="px-4 py-3">Acto/Instrumento de creación</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-foreground">
                    {sujetosObligadosList.map((item) => (
                      <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-4 text-center text-muted-foreground font-medium">{item.id}</td>
                        <td className="px-4 py-4 font-semibold text-primary">{item.sujeto}</td>
                        <td className="px-4 py-4 text-muted-foreground">
                          <span className="inline-flex items-center bg-secondary/10 text-secondary border border-secondary/20 px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap">
                            {item.acceso}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-center font-medium">{item.tipo}</td>
                        <td className="px-4 py-4 text-muted-foreground">{item.naturaleza}</td>
                        <td className="px-4 py-4 text-xs text-muted-foreground leading-relaxed min-w-[200px]">{item.creacion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-5 text-xs text-muted-foreground leading-relaxed space-y-1.5">
              <p><strong>Sujeto obligado responsable de esta publicación:</strong> Ayuntamiento de Tecate, B.C., a través de la Unidad de Transparencia.</p>
              <p><strong>Fundamento legal:</strong> Art. 19 fracciones IV y V; Art. 48; Art. 55-II LTAIPBC.</p>
              <p><strong>Última actualización:</strong> 20 de abril de 2026 <span className="mx-2 opacity-50">|</span> <strong>Periodicidad de actualización:</strong> Trimestral, o al crearse o modificarse cualquier organismo.</p>
            </div>
          </div>
        </section>

        {/* ── Obligaciones Comunes ─────────────────────────────────── */}
        <section id="obligaciones-comunes" className="py-12 bg-muted scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Obligaciones de transparencia aplicables al Municipio de Tecate"
              description="Como Ayuntamiento, el Municipio de Tecate tiene dos tipos de obligaciones de transparencia: las comunes (Art. 55) y las específicas para municipios (Art. 56). Toda esta información se actualiza al menos cada tres meses (Art. 48) y se publica en este portal y en la Plataforma Nacional de Transparencia (Art. 46)."
            />

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Obligaciones comunes (Art. 55 LTAIPBC)</h3>
                <div className="space-y-6">
                  {obligacionesComunes.map((grupo) => (
                    <div key={grupo.category} className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                      <div className="bg-primary/5 px-5 py-3 border-b border-border">
                        <h4 className="font-semibold text-primary">{grupo.category}</h4>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
                          <thead className="bg-muted/30 text-secondary text-xs uppercase tracking-wider font-semibold border-b border-border">
                            <tr>
                              <th className="px-5 py-2.5 w-24">Fracción</th>
                              <th className="px-5 py-2.5">Obligación</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border text-foreground">
                            {grupo.items.map((item) => (
                              <tr key={item.fraccion} className="hover:bg-muted/20 transition-colors">
                                <td className="px-5 py-3 font-semibold text-muted-foreground">{item.fraccion}</td>
                                <td className="px-5 py-3 leading-relaxed">{item.obligacion}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Obligaciones Específicas Municipio ───────────────────── */}
        <section id="obligaciones-municipio" className="py-12 bg-background scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Obligaciones específicas para municipios"
              description="Conforme al Art. 56 de la LTAIPBC, aplicables exclusivamente al Municipio de Tecate."
            />

            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
                  <thead className="bg-muted/50 text-secondary border-b border-border text-xs uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="px-5 py-3 w-24">Fracción</th>
                      <th className="px-5 py-3">Obligación</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-foreground">
                    {obligacionesEspecificas.map((item) => (
                      <tr key={item.fraccion} className="hover:bg-muted/30 transition-colors">
                        <td className="px-5 py-4 font-semibold text-muted-foreground">{item.fraccion}</td>
                        <td className="px-5 py-4 leading-relaxed">{item.obligacion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-muted/30 border border-border rounded-lg p-5 text-xs text-muted-foreground leading-relaxed space-y-1.5">
              <p><strong>Sujeto obligado responsable de esta publicación:</strong> Ayuntamiento de Tecate, B.C.</p>
              <p><strong>Fundamento legal:</strong> Arts. 55 y 56 LTAIPBC; Arts. 46 y 48 LTAIPBC.</p>
              <p><strong>Última actualización:</strong> 20 de abril de 2026 <span className="mx-2 opacity-50">|</span> <strong>Periodicidad:</strong> Información estática; revisar al haber reforma a la LTAIPBC.</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
