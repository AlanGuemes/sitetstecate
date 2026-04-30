"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Search, FileText, ExternalLink, ChevronRight, BookOpen } from "lucide-react"
import { normalizeSearch } from "@/lib/utils"

// ─── Datos por artículo ──────────────────────────────────────────────────────

const articulos = {
  81: {
    label: "Artículo 81",
    numero: 81,
    descripcion:
      "Obligaciones de transparencia comunes a todos los sujetos obligados conforme a la Ley de Transparencia y Acceso a la Información Pública del Estado de Baja California.",
    fracciones: [
      {
        id: "81-I",
        fraccion: "I",
        titulo: "Marco Normativo",
        descripcion:
          "El marco normativo aplicable al sujeto obligado, en el que deberán incluirse todas las disposiciones que regulen su actuar.",
        href: "#",
      },
      {
        id: "81-II",
        fraccion: "II",
        titulo: "Estructura Orgánica",
        descripcion:
          "La estructura orgánica completa del sujeto obligado, en un formato que permita vincular cada parte de la estructura con las atribuciones y responsabilidades.",
        href: "#",
      },
      {
        id: "81-III",
        fraccion: "III",
        titulo: "Facultades de cada Área",
        descripcion:
          "Los sujetos obligados publicarán para cada una de las áreas previstas en el reglamento interior, estatuto orgánico respectivo o normatividad equivalente, las facultades de cada área, entendidas como las aptitudes o potestades que les otorga la ley para para llevar a cabo actos administrativos y/o legales válidos, de los cuales surgen obligaciones, derechos y atribuciones;",
        href: "#",
      },
      {
        id: "81-IV",
        fraccion: "IV",
        titulo: "Objetivos y metas institucionales",
        descripcion:
          "Las metas y objetivos de las Áreas de conformidad con sus programas operativos;",
        href: "#",
      },
      {
        id: "81-V",
        fraccion: "V",
        titulo: "Indicadores de interés público",
        descripcion:
          "Los indicadores relacionados con temas de interés público o trascendencia social que conforme a sus funciones, deban establecer;",
        href: "#",
      },
      {
        id: "81-VI",
        fraccion: "VI",
        titulo: "Indicadores de resultados",
        descripcion:
          "Los indicadores que permitan rendir cuenta de sus objetivos y resultados;",
        href: "#",
      },
      {
        id: "81-VII",
        fraccion: "VII",
        titulo: "Directorio de Servidores(as) Públicos(as)",
        descripcion:
          "El directorio de todos los Servidores Públicos, a partir del nivel de jefe de departamento o su equivalente, o de menor nivel, cuando se brinde atención al público; manejen o apliquen recursos públicos; realicen actos de autoridad o presten servicios profesionales bajo el régimen de confianza u honorarios y personal de base. El directorio deberá incluir, al menos el nombre, cargo o nombramiento asignado, nivel del puesto en la estructura orgánica, fecha de alta en el cargo, número telefónico, domicilio para recibir correspondencia y dirección de correo electrónico oficiales;",
        href: "#",
      },
      {
        id: "81-VIII",
        fraccion: "VIII",
        titulo: "Sueldos - Plantilla de personal",
        descripcion: "La remuneración bruta y neta de todos los Servidores Públicos de base o de confianza, de todas las percepciones, incluyendo sueldos, prestaciones, gratificaciones, primas, comisiones, dietas, bonos, estímulos, ingresos y sistemas de compensación, señalando la periodicidad de dicha remuneración;",
        href: "#",
      },
      {
        id: "81-IX",
        fraccion: "IX",
        titulo: "Gastos por concepto de viáticos y gastos de representación",
        descripcion:
          "Los gastos de representación y viáticos, así como el objeto e informe de comisión correspondiente;",
        href: "#",
      },
      {
        id: "81-X",
        fraccion: "X",
        titulo: "Total de plazas vacantes del personal de base y confianza de (SO)",
        descripcion:
          "El número total de plazas vacantes del personal de base y confianza del organismo garante, con indicación de si son de nueva creación o de nueva contratación, así como el número de las que se encuentren cubiertas por personal de carácter temporal o interino;",
        href: "#",
      },
      {
        id: "81-XI",
        fraccion: "XI",
        titulo: "Personal contratado por honorarios",
        descripcion:
          "Las contrataciones de servicios profesionales por honorarios, señalando los nombres de los prestadores de servicios, los servicios contratados, el monto de los honorarios y el periodo de contratación;",
        href: "#",
      },
      {
        id: "81-XIII",
        fraccion: "XIII",
        titulo: "Unidad de Transparencia (UT)",
        descripcion:
          "El domicilio de la Unidad de Transparencia, además de la dirección electrónica donde podrán recibirse las solicitudes para obtener la información;",
        href: "#",
      },
      {
        id: "81-XIV",
        fraccion: "XIV",
        titulo: "Concursos, Convocatorias, Invitaciones y/o avisos para ocupar Cargos Públicos",
        descripcion:
          "Las convocatorias a concursos para ocupar cargos públicos y los resultados de los mismos;",
        href: "#",
      },
      {
        id: "81-XV",
        fraccion: "XV",
        titulo: "Programas Sociales y Apoyos",
        descripcion:
          "La información de los programas de subsidios, estímulos y apoyos, en el que se deberá informar respecto de los programas de transferencia, de servicios, de infraestructura social y de subsidio;",
        href: "#",
      },
      {
        id: "81-XVI",
        fraccion: "XVI",
        titulo: "Normatividad Laboral del SO",
        descripcion:
          "Las condiciones generales de trabajo, contratos o convenios que regulen las relaciones laborales del personal de base o de confianza, así como los recursos públicos económicos, en especie o donativos, que sean entregados a los sindicatos y ejerzan como recursos públicos;",
        href: "#",
      },
      {
        id: "81-XVII",
        fraccion: "XVII",
        titulo: "Información curricular y las sanciones administrativas definitivas de las personas servidoras públicas",
        descripcion:
          "De todas las personas servidoras públicas y/o personas que desempeñen un empleo, cargo o comisión, la información curricular, desde el nivel de jefe de departamento o equivalente, hasta el titular del sujeto obligado, así como, en su caso, las sanciones administrativas de que haya sido objeto;",
        href: "#",
      },
      {
        id: "81-XVIII",
        fraccion: "XVIII",
        titulo: "Sanciones administrativas a las personas servidoras públicas",
        descripcion:
          "El listado de Servidores Públicos con sanciones administrativas definitivas, especificando la causa de sanción y la disposición;",
        href: "#",
      },
      {
        id: "81-XIX",
        fraccion: "XIX",
        titulo: "Servicios ofrecidos",
        descripcion:
          "Los servicios que ofrecen señalando los requisitos para acceder a ellos;",
        href: "#",
      },
      {
        id: "81-XX",
        fraccion: "XX",
        titulo: "Trámites ofrecidos",
        descripcion:
          "Los trámites, requisitos y formatos que ofrecen;",
        href: "#",
      },
      {
        id: "81-XXI",
        fraccion: "XXI",
        titulo: "Presupuesto del Gasto Público",
        descripcion:
          "La información financiera sobre el presupuesto asignado, así como los informes del ejercicio trimestral del gasto, en términos de la Ley General de Contabilidad Gubernamental y demás normatividad aplicable;",
        href: "#",
      },
      {
        id: "81-XXIII",
        fraccion: "XXIII",
        titulo: "Gastos de publicidad oficial y comunicación social",
        descripcion:
          "Los montos destinados a gastos relativos a comunicación social y publicidad oficial desglosada por tipo de medio, proveedores, número de contrato y concepto o campaña;",
        href: "#",
      },
      {
        id: "81-XXIV",
        fraccion: "XXIV",
        titulo: "Resultados de auditorías realizadas",
        descripcion:
          "Los informes de resultados de las auditorías al ejercicio presupuestal de cada sujeto obligado que se realicen y,en su caso, las aclaraciones que correspondan;",
        href: "#",
      },
      {
        id: "81-XXVI",
        fraccion: "XXVI",
        titulo: "Personas físicas o morales a quienes asigna o permite usar recursos públicos",
        descripcion:
          "Los montos, criterios, convocatorias y listado de personas físicas o morales aquienes, por cualquier motivo, se les asigne o permita usar recursos públicos o, en los términos de las disposicionesaplicables, realicen actos de autoridad. Asimismo, los informes que dichas personas les entreguen sobre el uso y destino de dichos recursos;",
        href: "#",
      },
      {
        id: "81-XXVII",
        fraccion: "XXVII",
        titulo: "Concesiones, contratos, convenios, permisos, licencias o autorizaciones otorgados",
        descripcion:
          "Las concesiones, contratos, convenios, permisos, licencias o autorizaciones otorgados, especificando los titulares de aquéllos, debiendo publicarse suobjeto, nombre o razón social del titular, vigencia, tipo, términos, condiciones, monto y modificaciones, así como si el procedimiento involucra el aprovechamiento de bienes, servicios y/o recursos públicos;",
        href: "#",
      },
      {
        id: "81-XXVIII",
        fraccion: "XXVIII",
        titulo: "Resultados de procedimientos de adjudicación directa, licitación pública e invitación restringida",
        descripcion:
          "La información sobre los resultados sobre procedimientos de adjudicación directa, invitación restringida y licitación de cualquier naturaleza, incluyendo la Versión Pública del Expediente respectivo y de los contratos celebrados;",
        href: "#",
      },
      {
        id: "81-XXIX",
        fraccion: "XXIX",
        titulo: "Informes emitidos",
        descripcion:
          "Los informes que por disposición legal generen los sujetos obligados;",
        href: "#",
      },
      {
        id: "81-XXX",
        fraccion: "XXX",
        titulo: "Estadísticas generadas",
        descripcion:
          "Las estadísticas que generen en cumplimiento de sus facultades, competencias o funciones con la mayor desagregación posible;",
        href: "#",
      },
      {
        id: "81-XXXI",
        fraccion: "XXXI",
        titulo: "Información Financiera",
        descripcion:
          "Informe de avances programáticos o presupuestales, balances generales y su estado financiero;",
        href: "#",
      },
      {
        id: "81-XXXII",
        fraccion: "XXXII",
        titulo: "Padrón de personas proveedoras y contratistas",
        descripcion:
          "Padrón de proveedores y contratistas;",
        href: "#",
      },
      {
        id: "81-XXXIII",
        fraccion: "XXXIII",
        titulo: "Convenios de Coordinación, de concertación con los sectores social y privado",
        descripcion:
          "Los convenios de coordinación de concertación con los sectores social y privado;",
        href: "#",
      },
      {
        id: "81-XXXIV",
        fraccion: "XXXIV",
        titulo: "Inventario de bienes muebles e inmuebles en posesión y propiedad",
        descripcion:
          "Los sujetos obligados publicarán el inventario de bienes muebles e inmuebles que utilicen, tengan a su cargo y/o les hayan sido asignados para el ejercicio de sus funciones; que destinen a un servicio público conforme a la normatividad aplicable o por cualquier concepto, tanto si son propiedad del sujeto obligado como que se encuentren en posesión de éstos;",
        href: "#",
      },
      {
        id: "81-XXXV",
        fraccion: "XXXV",
        titulo: "Recomendaciones emitidas por los órganos públicos del Estado mexicano u organismos internacionales garantes de los derechos humanos",
        descripcion:
          "Las recomendaciones que le han sido emitidas por parte de la Comisión Nacional de los Derechos Humanos (CNDH), los organismos estatales de protección de los derechos humanos y los internacionales en la materia, independientemente de que se hayan aceptado o rechazado, así como la información relativa al seguimiento de las mismas;",
        href: "#",
      },
      {
        id: "81-XXXVII",
        fraccion: "XXXVII",
        titulo: "Los mecanismos de participación ciudadana",
        descripcion:
          "El conjunto de acciones que pretenden impulsar el desarrollo local y la democracia participativa, tales como actividades, informes, concursos, comités, sesiones, encuestas, consultas, foros, eventos, experiencias y demás mecanismos de participación ciudadana de los que dispongan, incluidos aquellos que utilicen como medio las tecnologías de la información y comunicación, como los sitios de Internet (o portales institucionales) de conformidad con la normatividad aplicable;",
        href: "#",
      },
      {
        id: "81-XXXVIII",
        fraccion: "XXXVIII",
        titulo: "Programas que ofrecen",
        descripcion:
          "Los programas que ofrecen, incluyendo información sobre la población, objetivo y destino, así como los trámites, tiempos de respuesta, requisitos y formatos para acceder a los mismos;",
        href: "#",
      },
      {
        id: "81-XXXIX",
        fraccion: "XXXIX",
        titulo: "Actas y resoluciones del Comité de Transparencia de los sujetos obligados",
        descripcion:
          "Información de las resoluciones del Comité de Transparencia;",
        href: "#",
      },
      {
        id: "81-XL",
        fraccion: "XL",
        titulo: "Evaluaciones y encuestas a programas financiados con recursos públicos",
        descripcion:
          "Todas las evaluaciones, y encuestas que hagan los sujetos obligados a programas financiados con recursos públicos;",
        href: "#",
      },
      {
        id: "81-XLI",
        fraccion: "XLI",
        titulo: "Estudios financiados con recursos públicos",
        descripcion:
          "Los sujetos obligados hayan financiado total o parcialmente con recursos públicos, como parte de su naturaleza, sus atribuciones y funciones y de acuerdo con su programación presupuestal;",
        href: "#",
      },
      {
        id: "81-XLIII",
        fraccion: "XLIII",
        titulo: "Ingresos recibidos",
        descripcion:
          "Los ingresos recibidos por cualquier concepto señalando el nombre de los responsables de recibirlos, administrarlos y ejercerlos, así como su destino, indicando el destino de cada uno de ellos;",
        href: "#",
      },
      {
        id: "81-XLIV",
        fraccion: "XLIV",
        titulo: "Donaciones en dinero y en especie realizadas",
        descripcion: "Donaciones hechas a terceros en dinero o en especie;",
        href: "#",
      },
      {
        id: "81-XLV",
        fraccion: "XLV",
        titulo: "El catálogo de disposición y guía de archivo documental",
        descripcion:
          "Instrumentos de control y de consulta archivísticos, con los que deben contar los sujetos obligados conforme a sus atribuciones y funciones;",
        href: "#",
      },
      {
        id: "81-XLVIII",
        fraccion: "XLVIII",
        titulo: "Información de interés público",
        descripcion:
          "Cualquier otra información que sea de utilidad o se considere relevante, además de la que, con base en la información estadística, responda a las preguntas hechas con más frecuencia por el público;",
        href: "#",
      },
    ],
  },
  82: {
    label: "Artículo 82",
    numero: 82,
    descripcion:
      "Todos los sujetos obligados deberán publicar lo relacionado con los gastos de publicidad oficial, que deberá contener:",
    fracciones: [
      {
        id: "82-I",
        fraccion: "I",
        titulo: "Gastos de Publicidad Oficial",
        descripcion:
          "La información relacionada con los gastos de publicidad oficial que genere durante su ejercicio, que de acuerdo con la normatividad aplicable deban elaborar;",
        href: "#",
      },
    ],
  },
  83: {
    label: "Artículo 83",
    numero: 83,
    descripcion:
      "Obligaciones adicionales de transparencia en materia de contrataciones, obra pública y adquisiciones.",
    fracciones: [
      {
        id: "83-I",
        fraccion: "I",
        titulo: "Obligaciones de Transparencia Específicas",
        descripcion:
          "Los sujetos obligados del Poder Ejecutivo del Estado, deberán poner a disposición del público y actualizar la siguiente información;",
        incisos: [
          "B1) Presupuesto de egresos.",
          "B2) Egresos y fórmulas de distribución de los recursos.",
          "D) Listado de expropiaciones realizadas.",
          "F2) Corredores(as) y notarios(as) públicos(as).",
          "F3) Sanciones aplicadas.",
          "P) Disposiciones administrativas.",
        ],
        href: "#",
      },
    ],
  },
} as const

type ArticuloKey = keyof typeof articulos

// ─── Componente principal ─────────────────────────────────────────────────────

function ArticulosContent() {
  const searchParams = useSearchParams()
  const [tabActiva, setTabActiva] = useState<ArticuloKey>(81)
  const [filtro, setFiltro] = useState("")

  useEffect(() => {
    const tabParam = searchParams.get("tab")
    if (tabParam) {
      const num = Number(tabParam) as ArticuloKey
      if (articulos[num]) {
        setTabActiva(num)
      }
    }
  }, [searchParams])

  const articuloActual = articulos[tabActiva]

  const fraccionesFiltradas = useMemo(() => {
    if (!filtro.trim()) return articuloActual.fracciones
    const q = normalizeSearch(filtro)
    return articuloActual.fracciones.filter(
      (f) =>
        normalizeSearch(f.titulo).includes(q) ||
        normalizeSearch(f.descripcion).includes(q) ||
        normalizeSearch(f.fraccion).includes(q)
    )
  }, [filtro, articuloActual])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header de sección */}
        <section className="bg-primary py-10 lg:py-14">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-3">
              <BookOpen className="h-4 w-4" />
              <span>Portal de Transparencia</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-primary-foreground/90 font-medium">Artículos</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Artículos de Transparencia
            </h1>
            <p className="mt-3 text-primary-foreground/75 max-w-2xl text-sm leading-relaxed">
              Consulta las obligaciones de transparencia por artículo conforme a la Ley de
              Transparencia y Acceso a la Información Pública del Estado de Baja California.
            </p>
          </div>
        </section>

        {/* Contenido con pestañas */}
        <section className="py-10 lg:py-14 bg-muted/40 min-h-[60vh]">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">

            {/* Encabezado "Artículos" + pestañas */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Artículos</h2>

              {/* Tab bar */}
              <div className="flex gap-1 border-b border-border">
                {(Object.keys(articulos) as unknown as ArticuloKey[]).map((key) => {
                  const num = Number(key) as ArticuloKey
                  const isActive = tabActiva === num
                  return (
                    <button
                      key={key}
                      id={`tab-art-${key}`}
                      onClick={() => {
                        setTabActiva(num)
                        setFiltro("")
                      }}
                      className={`
                        px-5 py-2.5 text-sm font-bold rounded-t-md border border-b-0 transition-all duration-150
                        ${isActive
                          ? "bg-card border-border text-primary -mb-px z-10"
                          : "bg-transparent border-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
                        }
                      `}
                    >
                      {key}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Descripción del artículo */}
            <p className="text-sm text-muted-foreground mb-5 max-w-3xl leading-relaxed">
              {articuloActual.descripcion}
            </p>

            {/* Buscador / filtro */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                id="articulos-filtro"
                type="text"
                placeholder="Filtrar..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-card border border-border rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50
                  placeholder:text-muted-foreground/60 transition"
              />
            </div>

            {/* Lista de fracciones */}
            <div className="flex flex-col gap-0 rounded-xl border border-border overflow-y-auto bg-card shadow-sm max-h-[700px] scrollbar-thin scrollbar-thumb-primary/20">
              {fraccionesFiltradas.length === 0 ? (
                <div className="py-16 text-center text-muted-foreground text-sm">
                  No se encontraron resultados para &ldquo;{filtro}&rdquo;
                </div>
              ) : (
                fraccionesFiltradas.map((fraccion, idx) => (
                  <a
                    key={fraccion.id}
                    href={fraccion.href}
                    id={`fraccion-${fraccion.id}`}
                    className={`
                      group flex flex-col gap-1.5 px-6 py-5 hover:bg-muted/50 transition-colors
                      ${idx !== 0 ? "border-t border-border" : ""}
                    `}
                  >
                    {/* Etiqueta de fracción */}
                    <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
                      {fraccion.fraccion}
                    </span>

                    {/* Barra lateral + título */}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-1 self-stretch rounded-full bg-primary shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-primary group-hover:text-primary/80 transition-colors">
                          {fraccion.titulo}
                        </h3>
                        <p className="mt-1 text-sm text-secondary leading-relaxed">
                          {fraccion.descripcion}
                        </p>
                        {/* Renderizado de incisos con nuevo estilo */}
                        {"incisos" in fraccion && (
                          <ul className="mt-4 space-y-1.5 ml-0 pl-0">
                            {(fraccion.incisos as readonly string[]).map((inciso, i) => (
                              <li key={i} className="text-[15px] text-primary font-bold leading-tight">
                                {inciso}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                    </div>
                  </a>
                ))
              )}
            </div>

            {/* Contador de resultados */}
            {filtro && (
              <p className="mt-4 text-xs text-muted-foreground text-right">
                {fraccionesFiltradas.length} resultado{fraccionesFiltradas.length !== 1 ? "s" : ""} encontrado{fraccionesFiltradas.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function ArticulosPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-12 bg-primary/20 rounded-full" />
          <div className="h-4 w-32 bg-muted rounded" />
        </div>
      </div>
    }>
      <ArticulosContent />
    </Suspense>
  )
}
