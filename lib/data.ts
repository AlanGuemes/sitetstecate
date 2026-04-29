import {
  FileText,
  Search,
  Users,
  Shield,
  LayoutGrid,
  Scale,
  Eye,
} from "lucide-react";

const documentos = [
  // CONSTITUCIONALES
  {
    category: "leyes",
    title: "Constitución Política de los Estados Unidos Mexicanos",
    description: "Documento supremo y fundamental que rige jurídicamente al país.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf",
    date: "Última Reforma 2025",
    type: "PDF",
    ambito: "Constitucional"
  },
  {
    category: "leyes",
    title: "Constitución Política del Estado Libre y Soberano de Baja California",
    description: "Norma suprema estatal. Define autonomía municipal y derechos ciudadanos.",
    url: "https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Leyes/TOMO_I/20200214_CONSTBC.PDF",
    date: "Última Reforma 2020",
    section: "Normatividad",
    type: "PDF",
    ambito: "Constitucional"
  },
  // FEDERALES
  {
    category: "leyes",
    title: "Ley General de Transparencia y Acceso a la Información Pública",
    description: "Ley que establece los principios y bases generales para garantizar el derecho de acceso a la información.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGTAIP.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },
  {
    category: "leyes",
    title: "Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados",
    description: "Normativa general sobre el tratamiento y protección de datos personales.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },
  {
    category: "leyes",
    title: "Ley General de Responsabilidades Administrativas",
    description: "Ley que distribuye competencias para establecer responsabilidades administrativas de los Servidores Públicos.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGRA.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },
  {
    category: "leyes",
    title: "Ley General de Contabilidad Gubernamental",
    description: "Normativa para el registro contable de las operaciones gubernamentales.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGCG.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },
  {
    category: "leyes",
    title: "Ley General de Desarrollo Social",
    description: "Ley que regula el diseño, implementación y evaluación de la política de desarrollo social.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGDS.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },
  {
    category: "leyes",
    title: "Ley de Adquisiciones, Arrendamientos y Servicios del Sector Público",
    description: "Normativa que regula los procedimientos de contratación pública de bienes y servicios.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LAASSP.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },
  {
    category: "leyes",
    title: "Ley de Obras Públicas y Services Relacionados con las Mismas",
    description: "Ley que establece las bases para la contratación y ejecución de obras públicas.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LOPSRM.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },
  {
    category: "leyes",
    title: "Ley Federal de Presupuesto y Responsabilidad Hacendaria",
    description: "Normativa sobre la programación, presupuestación, aprobación y ejercicio del gasto público.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPRH.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },
  {
    category: "leyes",
    title: "Ley General de Bienes Nacionales",
    description: "Ley que regula el régimen de dominio público y privado de la Federación.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGBN.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },
  {
    category: "leyes",
    title: "Ley General del Sistema Nacional Anticorrupción",
    description: "Coordinación del SNA y obligaciones municipales anticorrupción.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSNA_200521.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },
  {
    category: "leyes",
    title: "Ley Federal del Trabajo",
    description: "Régimen laboral aplicable al personal del Ayuntamiento.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },
  {
    category: "leyes",
    title: "Ley del Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado",
    description: "Seguridad social de servidores públicos municipales.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LISSSTE.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },
  {
    category: "código",
    title: "Código Fiscal de la Federación",
    description: "Marco fiscal federal de referencia para el municipio.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },
  {
    category: "leyes",
    title: "Ley del Impuesto sobre la Renta",
    description: "Retenciones de ISR al personal y a proveedores de servicios.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Federal"
  },

  // ESTATALES
  {
    category: "leyes",
    title: "Ley de Transparencia, Acceso a la Información Pública y Apertura Institucional para el Estado de Baja California",
    description: "Ley estatal garante. Publicada el 16-sep-2025. Fundamento directo del portal.",
    url: "https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Leyes/TOMO_I/20250916_LEYDETRANSPARENCIA.PDF",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Estatal"
  },
  {
    category: "leyes",
    title: "Ley de Transparencia y Acceso a la Información Pública del Estado de Baja California",
    description: "Ley que regula el derecho de acceso a la información pública en el Estado.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/2026-Ley-de-transparencia-baja-california-Reformada.pdf",
    date: "Última reforma: 2024",
    section: "Normatividad",
    type: "PDF",
    ambito: "Estatal"
  },
  {
    category: "leyes",
    title: "Ley del Régimen Municipal para el Estado de Baja California",
    description: "Última reforma P.O. No. 13, 27-feb-2026. Regula la organización y atribuciones del Ayuntamiento.",
    url: "https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Leyes/TOMO_I/20260227_LEYREGIMENMPAL.PDF",
    date: "Última Reforma 2026",
    section: "Normatividad",
    type: "PDF",
    ambito: "Estatal"
  },
  {
    category: "leyes",
    title: "Ley del Sistema Estatal Anticorrupción de Baja California",
    description: "Coordinación anticorrupción estatal y obligaciones del municipio.",
    url: "https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Leyes/TOMO_I/20231222_LEYSISANTICORRUPC.PDF",
    date: "Última Reforma 2023",
    section: "Normatividad",
    type: "PDF",
    ambito: "Estatal"
  },
  {
    category: "leyes",
    title: "Ley de Presupuesto y Responsabilidad Hacendaria del Estado de Baja California",
    description: "Marco presupuestario estatal aplicable a los municipios (reforma dic-2025).",
    url: "https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Leyes/TOMO_II/20251215_LEYPRESUPUESTO.PDF",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Estatal"
  },
  {
    category: "código",
    title: "Código Fiscal del Estado de Baja California",
    description: "Marco tributario estatal de referencia para la hacienda municipal.",
    url: "https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Leyes/TOMO_II/20240315_CODFISC.PDF",
    date: "Última Reforma 2024",
    section: "Normatividad",
    type: "PDF",
    ambito: "Estatal"
  },
  {
    category: "leyes",
    title: "Ley de Hacienda Municipal del Estado de Baja California",
    description: "Regula impuestos, derechos y contribuciones municipales (predial, ISABI, alumbrado).",
    url: "https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Leyes/TOMO_II/20241104_LEYHAMUN.PDF",
    date: "Última Reforma 2024",
    section: "Normatividad",
    type: "PDF",
    ambito: "Estatal"
  },
  {
    category: "leyes",
    title: "Ley de Desarrollo Urbano del Estado de Baja California",
    description: "Zonificación, usos de suelo y planes de desarrollo urbano.",
    url: "https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Leyes/TOMO_VII/20250314_LEYDESUR.PDF",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Estatal"
  },
  {
    category: "leyes",
    title: "Ley de Edificaciones del Estado de Baja California",
    description: "Licencias de construcción y autorizaciones de uso de suelo.",
    url: "https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Leyes/TOMO_VII/20250411_LEYEDIFI.PDF",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Estatal"
  },
  {
    category: "leyes",
    title: "Ley del Servicio Civil de los Trabajadores al Servicio de los Poderes del Estado y Municipios de Baja California",
    description: "Régimen laboral especial de servidores públicos municipales.",
    url: "https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Leyes/TOMO_III/20230623_LEYSERVCIVILBC.PDF",
    date: "Última Reforma 2023",
    section: "Normatividad",
    type: "PDF",
    ambito: "Estatal"
  },
  {
    category: "reglamentos",
    title: "Reglamento Ley de Transparencia ITAIPBC",
    description: "Reglamento de la Ley de Transparencia y Acceso a la Información Pública para el Estado de Baja California.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/Reglamento-de-la-Ley-de-Transparencia-ITAIPBC-22JUN2021.pdf",
    date: "Última reforma 2021",
    section: "Normatividad",
    type: "PDF",
    ambito: "Estatal"
  },

  // MUNICIPALES
  {
    category: "leyes",
    title: "Ley de Ingresos del Municipio de Tecate, Baja California — Ejercicio Fiscal 2026",
    description: "Tasas y bases gravables vigentes: predial, ISABI, alumbrado, derechos.",
    url: "https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Leyes/TOMO_II/20251230_LEYINGRESOTECATE2026.PDF",
    date: "Aprobada 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "leyes",
    title: "Ley de Ingresos del Municipio de Tecate, Baja California — Ejercicio Fiscal 2025 (referencia)",
    description: "Referencia histórica.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/2025_LeydeIngresos_Tecate_Baja_California.pdf",
    date: "Aprobada 2024",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento de la Administración Pública para el Municipio de Tecate, B.C.",
    description: "Estructura orgánica, atribuciones y funcionamiento de las dependencias municipales.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/REGLAMENTO_DE_LA_ADMINISTRACION_PUBLICA_PARA_EL_MUNICIPIO_DE_TECATE.pdf",
    date: "Última Reforma 2024",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento Interior de Trabajo de los Servidores Públicos y Empleados al Servicio del Ayuntamiento de Tecate y Organismos Paramunicipales",
    description: "Condiciones laborales, derechos y obligaciones del personal municipal.",
    url: "",
    date: "Vigente",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento del Sistema de Apertura Rápida de Empresas (SARE) del Municipio de Tecate, B.C.",
    description: "Ventanilla única y apertura digital de negocios. Primer municipio de B.C. en implementarlo.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/REGLAMENTO_DEL_SISTEMA_DE_APERTURA_RAPIDA_DE_EMPRESAS_DEL_MUNICIPIO_DE_TECATE.pdf",
    date: "Aprobado 2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento de Bando de Policía y Gobierno para el Municipio de Tecate, B.C.",
    description: "Orden público, convivencia ciudadana y facultades de la policía municipal.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/Reglamento_de_Bando_de_Policia_y_Gobierno_Tecate_Baja_California.pdf",
    date: "Reforma dic-2025 (Art. 199, fracc. X adicionada)",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento de Tránsito Municipal para el Municipio de Tecate, B.C.",
    description: "Circulación vehicular, sanciones y reconocimiento de licencias digitales de otras entidades.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/REGLAMENTO_DE_TRANSITO_PARA_EL_MUNICIPIO_DE_TECATE_BAJA_CALIFORNIA.pdf",
    date: "Reforma oct-2025 (Art. 49); reforma previa jun-2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento Municipal de Protección Civil para el Municipio de Tecate, B.C.",
    description: "Prevención, preparación y respuesta ante emergencias y desastres.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/REGLAMENTO_MUNICIPAL_DE_PROTECCION_CIVIL_PARA_EL_MUNICIPIO_DE_TECATE_BAJA_CALIFORNIA.pdf",
    date: "Reforma ago-2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento para la Prevención de Incendios, Explosiones y Siniestros del Municipio de Tecate, B.C.",
    description: "Normas de seguridad contra incendios en establecimientos y edificaciones.",
    url: "",
    date: "Reforma nov-2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento de Edificaciones para el Municipio de Tecate, B.C.",
    description: "Licencias de construcción, uso de suelo, normas técnicas de edificación y vía pública.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/REGLAMENTO_DE_EDIFICACIONES_PARA_EL_MUNICIPIO_DE_TECATE_BAJA_CALIFORNIA.pdf",
    date: "Actualizado dic-2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento de Protección al Ambiente para el Municipio de Tecate, B.C.",
    description: "Normas ambientales locales, emisiones, residuos y sanciones.",
    url: "",
    date: "Reforma dic-2025 (Arts. 130-131 niveles de ruido)",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento para la Prevención y Control del Ruido para el Municipio de Tecate, B.C.",
    description: "Niveles máximos permisibles de ruido en fuentes fijas, móviles y actividades comerciales.",
    url: "",
    date: "Reforma dic-2025 (Arts. 11, 22, 23, 29)",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento del Servicio Público de Manejo Integral de Residuos Sólidos para el Municipio de Tecate, B.C.",
    description: "Recolección, traslado y disposición final de residuos sólidos municipales.",
    url: "",
    date: "Actualizado dic-2025 (reforma P.O. 28-oct-2024 + nueva versión)",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento para el Funcionamiento y Prestación de los Servicios del Rastro Municipal de Tecate, B.C.",
    description: "Operación del rastro municipal, sacrificio de animales y control sanitario.",
    url: "",
    date: "29-abr-1994 (vigente sin reforma reciente)",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento para el Funcionamiento de Negocios de Centros de Acopio de Materiales Reciclables y de Vehículos Usados o Nuevos para su Venta en Partes (Yonkes) del Municipio de Tecate, B.C.",
    description: "Regulación de yonkes, centros de acopio de reciclaje y compraventa de autopartes.",
    url: "",
    date: "28-jul-2009",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  // ─── FINANZAS ─────────────────────────────────────────────────────────────
  {
    category: "documento",
    title: "Adjudicaciones Directas",
    description: "Información sobre adjudicaciones directas del municipio.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "ADJUDICACIONES DIRECTAS",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Auditorías",
    description: "Resultados de las auditorías realizadas al municipio.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "AUDITORIAS",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Contratos de Asesores",
    description: "Convenios y contratos de asesores del municipio.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "CONVENIOS Y CONTRATOS",
    subsubsection: "CONTRATOS DE ASESORES",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Ayudas Sociales — Presidencia",
    description: "Ayudas sociales otorgadas por Presidencia.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "AYUDAS SOCIALES",
    subsubsection: "PRESIDENCIA",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Ayudas Sociales — Regidores",
    description: "Ayudas sociales otorgadas por Regidores.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "AYUDAS SOCIALES",
    subsubsection: "REGIDORES",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Ayudas Sociales — Sindicatura",
    description: "Ayudas sociales otorgadas por Sindicatura.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "AYUDAS SOCIALES",
    subsubsection: "SINDICATURA",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Deuda Pública",
    description: "Información sobre la deuda pública del municipio.",
    url: "#",
    date: "Marzo 2025",
    section: "Finanzas",
    subsection: "DEUDA PUBLICA",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Dictámenes",
    description: "Dictámenes financieros del municipio.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "DICTAMENES",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Estados Financieros y Cuentas Públicas",
    description: "Estados financieros y cuentas públicas del municipio.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "ESTADOS FINANCIEROS Y CUENTAS PUBLICAS",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Gastos de Publicidad — Contratos — Presidencia",
    description: "Contratos de gastos de publicidad de Presidencia.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "GASTOS",
    subsubsection: "GASTOS DE PUBLICIDAD / CONTRATOS / PRESIDENCIA",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Gastos de Publicidad — Contratos — Sindicatura",
    description: "Contratos de gastos de publicidad de Sindicatura.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "GASTOS",
    subsubsection: "GASTOS DE PUBLICIDAD / CONTRATOS / SINDICATURA",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Gastos de Publicidad — Facturas — Presidencia",
    description: "Facturas de gastos de publicidad de Presidencia.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "GASTOS",
    subsubsection: "GASTOS DE PUBLICIDAD / FACTURAS / PRESIDENCIA",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Gastos de Publicidad — Facturas — Sindicatura",
    description: "Facturas de gastos de publicidad de Sindicatura.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "GASTOS",
    subsubsection: "GASTOS DE PUBLICIDAD / FACTURAS / SINDICATURA",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Gastos de Representación y Viáticos — Peajes y Viáticos 1er 2026",
    description: "Gastos de representación y viáticos del 1er trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "GASTOS",
    subsubsection: "GASTOS DE REPRESENTACION Y VIATICOS / 1ER. TRIMESTRE 2026 / PEAJES Y VIATICOS 1ER 2026",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Ley de Ingresos 2025",
    description: "Ley de Ingresos del Municipio para el ejercicio fiscal 2025.",
    url: "#",
    date: "Diciembre 2024",
    section: "Finanzas",
    subsection: "LEY DE INGRESOS",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Padron de Proveedores 2026",
    description: "Listado de proveedores del Municipio de Tecate, B.C.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/2026_PADRON_DE_PROVEEDORES.pdf",
    date: "2026",
    section: "Finanzas",
    subsection: "PADRON DE PROVEEDORES",
    subsubsection: "1ER TRIMESTRE 2026",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Licitaciones",
    description: "Información sobre licitaciones públicas.",
    url: "#",
    date: "2026",
    section: "Finanzas",
    subsection: "LICITACIONES",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Presupuesto de Ingresos y Egresos",
    description: "Presupuesto de Ingresos y Egresos del Municipio.",
    url: "#",
    date: "Diciembre 2024",
    section: "Finanzas",
    subsection: "PRESUPUESTOS",
    subsubsection: "PRESUPUESTO DE INGRESOS Y EGRESOS",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Inventario de Bienes",
    description: "Inventario de bienes muebles e inmuebles del municipio.",
    url: "#",
    date: "Enero 2025",
    section: "Finanzas",
    subsection: "INVENTARIO DE BIENES",
    type: "PDF",
    ambito: "Municipal"
  },

  // ─── ADMINISTRACION ───────────────────────────────────────────────────────

  // Plan Municipal de Desarrollo
  {
    category: "documento",
    title: "Plan Municipal de Desarrollo",
    description: "Plan Municipal de Desarrollo del H. Ayuntamiento de Tecate, B.C.",
    url: "#",
    date: "2025",
    section: "Administracion",
    subsection: "PLAN MUNICIPAL DE DESARROLLO",
    type: "PDF",
    ambito: "Municipal"
  },

  // Servidores Públicos con Sanciones
  {
    category: "documento",
    title: "Servidores Públicos con Sanciones — 1er Trimestre 2026",
    description: "Relación de servidores públicos sancionados correspondiente al 1er Trimestre 2026.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/2026_Sanciones_primer_trimestre_2026.pdf",
    date: "2026",
    section: "Administracion",
    subsection: "SERVIDORES PUBLICOS CON SANCIONES",
    subsubsection: "2026 / 1ER. TRIMESTRE",
    type: "PDF",
    ambito: "Municipal"
  },

  // Estadísticas — Atención Ciudadana
  {
    category: "documento",
    title: "Estadísticas Atención Ciudadana — 1er Trimestre 2026",
    description: "Estadísticas de atención ciudadana correspondientes al 1er Trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "ESTADISTICAS",
    subsubsection: "ATENCION CIUDADANA / 1ER TRIMESTRE 2026",
    type: "PDF",
    ambito: "Municipal"
  },

  // Estadísticas — Seguridad Ciudadana y Tránsito Municipal
  {
    category: "documento",
    title: "Estadísticas Seguridad Ciudadana y Tránsito Municipal — 1er Trimestre 2026",
    description: "Estadísticas de seguridad ciudadana y tránsito municipal del 1er Trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "ESTADISTICAS",
    subsubsection: "SEGURIDAD CIUDADANA Y TRANSITO MUNICIPAL / 1ER. TRIMESTRE 2026",
    type: "PDF",
    ambito: "Municipal"
  },

  // Estadísticas — Bienestar
  {
    category: "documento",
    title: "Estadísticas Bienestar — 1er Trimestre 2026",
    description: "Estadísticas de bienestar municipal correspondientes al 1er Trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "ESTADISTICAS",
    subsubsection: "BIENESTAR / 1ER. TRIMESTRE 2026",
    type: "PDF",
    ambito: "Municipal"
  },

  // Estadísticas — Unidad Coordinadora de Delegaciones
  {
    category: "documento",
    title: "Estadísticas Unidad Coordinadora de Delegaciones — 1er Trimestre 2026",
    description: "Estadísticas de la Unidad Coordinadora de Delegaciones del 1er Trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "ESTADISTICAS",
    subsubsection: "UNIDAD COORDINADORA DE DELEGACIONES / 1ER. TRIMESTRE 2026",
    type: "PDF",
    ambito: "Municipal"
  },

  // Estadísticas — DGIT
  {
    category: "documento",
    title: "Estadísticas DGIT — 1er Trimestre 2026",
    description: "Estadísticas de la Dirección de Gestión Integral del Territorio del 1er Trimestre.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "ESTADISTICAS",
    subsubsection: "DGIT / 1ER TRIMESTRE",
    type: "PDF",
    ambito: "Municipal"
  },

  // Currículums
  {
    category: "documento",
    title: "Currículum — Sindicatura",
    description: "Currículum vitae del titular de la Sindicatura Procuradora.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "CURRICULUMS",
    subsubsection: "SINDICATURA",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Currículum — Seguridad Ciudadana",
    description: "Currículum vitae del titular de Seguridad Ciudadana y Tránsito Municipal.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "CURRICULUMS",
    subsubsection: "SEGURIDAD CIUDADANA",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Currículum — Tesorería",
    description: "Currículum vitae del titular de la Tesorería Municipal.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "CURRICULUMS",
    subsubsection: "TESORERIA",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Currículum — Secretaría del Ayuntamiento",
    description: "Currículum vitae del titular de la Secretaría del Ayuntamiento.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "CURRICULUMS",
    subsubsection: "SECRETARIA DEL AYUNTAMIENTO",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Currículum — Regidores",
    description: "Currículums vitae de los Regidores del H. Ayuntamiento de Tecate.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "CURRICULUMS",
    subsubsection: "REGIDORES",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Currículum — Protección Civil y Bomberos",
    description: "Currículum vitae del titular de la Coordinación de Protección Civil y Bomberos.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "CURRICULUMS",
    subsubsection: "PROTECCION CIVIL Y BOMBEROS",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Currículum — Presidencia",
    description: "Currículum vitae del Presidente Municipal de Tecate, B.C.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/CV_RCM.pdf",
    date: "2026",
    section: "Administracion",
    subsection: "CURRICULUMS",
    subsubsection: "PRESIDENCIA",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Currículum — Oficialía Mayor",
    description: "Currículum vitae del titular de la Oficialía Mayor.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "CURRICULUMS",
    subsubsection: "OFICIALIA MAYOR",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Currículum — Bienestar",
    description: "Currículum vitae del titular de la Dirección de Bienestar Municipal.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "CURRICULUMS",
    subsubsection: "BIENESTAR",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Currículum — Coordinación General de Gabinete",
    description: "Currículum vitae del titular de la Coordinación General de Gabinete.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "CURRICULUMS",
    subsubsection: "COORDINACION GENERAL DE GABINETE",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Currículum — Gestión Integral del Territorio",
    description: "Currículum vitae del titular de la Dirección de Gestión Integral del Territorio.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "CURRICULUMS",
    subsubsection: "GESTION INTEGRAL",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Currículum — Desarrollo Económico",
    description: "Currículum vitae del titular de la Dirección de Desarrollo Económico y Turismo.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "CURRICULUMS",
    subsubsection: "DESARROLLOECONOMICO",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Currículum — Atención Ciudadana",
    description: "Currículum vitae del titular de la Dirección de Atención Ciudadana.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "CURRICULUMS",
    subsubsection: "ATENCION CIUDADANA",
    type: "PDF",
    ambito: "Municipal"
  },

  // Metas y Objetivos 2026
  {
    category: "documento",
    title: "Metas y Objetivos — Atención Ciudadana — 1er Trimestre 2026",
    description: "Metas y objetivos de Atención Ciudadana correspondientes al 1er Trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "METAS Y OBJETIVOS",
    subsubsection: "2026 / ATENCION CIUDADANA / 1ER TRIMESTRE 2026",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Metas y Objetivos — Bienestar — 1er Trimestre 2026",
    description: "Metas y objetivos de Bienestar Municipal correspondientes al 1er Trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "METAS Y OBJETIVOS",
    subsubsection: "2026 / BIENESTAR / 1ER. TRIMESTRE 2026",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Metas y Objetivos — Protección Civil y Bomberos — 1er Trimestre 2026",
    description: "Metas y objetivos de Protección Civil y Bomberos del 1er Trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "METAS Y OBJETIVOS",
    subsubsection: "2026 / PROTECCION CIVIL Y BOMBEROS / 1ER TRIMESTRE 2026",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Metas y Objetivos — Oficialía Mayor",
    description: "Metas y objetivos de la Oficialía Mayor para el ejercicio 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "METAS Y OBJETIVOS",
    subsubsection: "2026 / OFICIALIA MAYOR",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Metas y Objetivos — Gestión Integral — 1er Trimestre 2026",
    description: "Metas y objetivos de la Dirección de Gestión Integral del Territorio del 1er Trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "METAS Y OBJETIVOS",
    subsubsection: "2026 / GESTION INTEGRAL / 1ER. TRIMESTRE 2026",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Metas y Objetivos — Desarrollo Económico — 1er Trimestre 2026",
    description: "Metas y objetivos de la Dirección de Desarrollo Económico del 1er Trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "METAS Y OBJETIVOS",
    subsubsection: "2026 / DESARROLLOECONOMICO / 1er TRIMESTRE 2026",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Metas y Objetivos — Sindicatura — 1er Trimestre 2026",
    description: "Metas y objetivos de la Sindicatura Procuradora correspondientes al 1er Trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "METAS Y OBJETIVOS",
    subsubsection: "2026 / SINDICATURA / 1ER TRIMESTRE",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Metas y Objetivos — Seguridad Ciudadana — 1er Trimestre 2026",
    description: "Metas y objetivos de Seguridad Ciudadana y Tránsito del 1er Trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "METAS Y OBJETIVOS",
    subsubsection: "2026 / SEGURIDAD CIUDADANA / 1ER TRIMESTRE 2026",
    type: "PDF",
    ambito: "Municipal"
  },

  // Declaración Patrimonial
  {
    category: "documento",
    title: "Declaración Patrimonial — Segundo Trimestre",
    description: "Declaraciones patrimoniales de servidores públicos correspondientes al segundo trimestre.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "DECLARACION PATRIMONIAL",
    subsubsection: "SEGUNDO TRIMESTRE",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Declaración Patrimonial — Tercer Trimestre",
    description: "Declaraciones patrimoniales de servidores públicos correspondientes al tercer trimestre.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "DECLARACION PATRIMONIAL",
    subsubsection: "TERCER TRIMESTRE",
    type: "PDF",
    ambito: "Municipal"
  },

  // Trámites Ofrecidos
  {
    category: "documento",
    title: "Trámites Ofrecidos — Protección Civil y Bomberos",
    description: "Catálogo de trámites ofrecidos por la Coordinación de Protección Civil y Bomberos.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "TRAMITES OFRECIDOS",
    subsubsection: "PROTECCION CIVIL Y BOMBEROS",
    type: "PDF",
    ambito: "Municipal"
  },

  // Servicios Ofrecidos
  {
    category: "documento",
    title: "Servicios Ofrecidos — Bienestar",
    description: "Catálogo de servicios ofrecidos por la Dirección de Bienestar Municipal.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "SERVICIOS OFRECIDOS",
    subsubsection: "BIENESTAR",
    type: "PDF",
    ambito: "Municipal"
  },

  // Licencias
  {
    category: "documento",
    title: "Licencias de Construcción — DGIT — 1er Trimestre 2026",
    description: "Registro de licencias de construcción emitidas por la DGIT en el 1er Trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "LICENCIAS",
    subsubsection: "LICENCIAS DE CONSTRUCCION / DGIT / 1ER TRIMESTRE 2026",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Licencias de Uso de Suelo — DGIT — 1er Trimestre 2026",
    description: "Registro de licencias de uso de suelo emitidas por la DGIT en el 1er Trimestre 2026.",
    url: "#",
    date: "2026",
    section: "Administracion",
    subsection: "LICENCIAS",
    subsubsection: "LICENCIAS DE USO DE SUELO / DGIT / 1ER TRIMESTRE 2026",
    type: "PDF",
    ambito: "Municipal"
  },
  // ─── SESIONES DE CABILDO Y ACTAS DE SESION DE COMISION (Normatividad) ───
  {
    category: "documento",
    title: "Sesiones de Cabildo - XXV Ayuntamiento",
    description: "Actas y documentos de las Sesiones de Cabildo correspondientes al XXV Ayuntamiento.",
    url: "#",
    date: "2026",
    section: "Normatividad",
    subsection: "SESIONES DE CABILDO",
    subsubsection: "XXV AYUNTAMIENTO",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Sesiones de Cabildo - XXIV Ayuntamiento",
    description: "Actas y documentos de las Sesiones de Cabildo correspondientes al XXIV Ayuntamiento.",
    url: "#",
    date: "2026",
    section: "Normatividad",
    subsection: "SESIONES DE CABILDO",
    subsubsection: "XXIV",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Actas de Sesión - 18 Comisión de Protección Civil y Bomberos",
    description: "Actas de sesión de la 18 Comisión de Protección Civil y Bomberos.",
    url: "#",
    date: "2026",
    section: "Normatividad",
    subsection: "ACTAS DE SESION DE COMISION",
    subsubsection: "18 COMISION DE PROTECCION CIVIL Y BOMBEROS",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Actas de Sesión - 22 Comisión de Protección a las Infancias y Adolescencia",
    description: "Actas de sesión de la 22 Comisión de Protección a las Infancias y Adolescencia.",
    url: "#",
    date: "2026",
    section: "Normatividad",
    subsection: "ACTAS DE SESION DE COMISION",
    subsubsection: "22 COMISION DE PROTECCION A LAS INFANCIAS Y ADOLESCENCIA",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "documento",
    title: "Actas de Sesión - 3 Comisión de Obras y Servicios Públicos",
    description: "Actas de sesión de la 3 Comisión de Obras y Servicios Públicos.",
    url: "#",
    date: "2026",
    section: "Normatividad",
    subsection: "ACTAS DE SESION DE COMISION",
    subsubsection: "3 COMISION DE OBRAS Y SERVICIOS PUBLICOS",
    type: "PDF",
    ambito: "Municipal"
  }
];

const enlacesExternos = [
  {
    title: "Plataforma Nacional de Transparencia",
    description: "Portal del Sistema Nacional de Transparencia",
    url: "https://www.plataformadetransparencia.org.mx"
  },
  {
    title: "ITAIPBC",
    description: "Instituto de Transparencia del Estado de Baja California",
    url: "http://www.transparenciabc.gob.mx/"
  },
];

export const normatividadData = (() => {
  const docs = documentos.filter(d => d.section === "Normatividad" || !d.section);
  return {
    categories: [
      { id: "all", label: "Todos", count: docs.length },
      { id: "leyes", label: "Leyes", count: docs.filter(d => d.category === "leyes").length },
      { id: "código", label: "Códigos", count: docs.filter(d => d.category === "código").length },
      { id: "reglamentos", label: "Reglamentos", count: docs.filter(d => d.category === "reglamentos").length },
      { id: "manuales", label: "Manuales", count: docs.filter(d => d.category === "manuales").length },
      { id: "lineamientos", label: "Lineamientos", count: docs.filter(d => d.category === "lineamientos").length },
    ],
    documentos: docs,
    enlacesExternos
  };
})();

export const finanzasData = {
  documentos: documentos.filter(d => d.section === "Finanzas")
};

export const administracionData = {
  documentos: documentos.filter(d => d.section === "Administracion")
};

export const siteData = {
  articulos: [
    { art: "Artículo 81", href: "/articulos?tab=81" },
    { art: "Artículo 82", href: "/articulos?tab=82" },
    { art: "Artículo 83", href: "/articulos?tab=83" },
    { art: "Artículo 85", href: "/articulos?tab=85" },
  ],
  solicitudes: [
    { label: "Solicitud de Acceso a la Información", href: "https://www.plataformadetransparencia.org.mx/Inicio", icon: FileText },
    { label: "Solicitud de Derecho ARCO", href: "/aviso-privacidad#derechos-arco", icon: Shield },
    { label: "Listado de Denuncias Públicas", href: "/transparencia#denuncias", icon: Scale, disabled: true },
    { label: "Material de Apoyo", href: "/transparencia#material", icon: Users, disabled: true },
  ],
  recursos: [
    { label: "Tabla de Aplicabilidad", href: "https://s3-public-presigner-production-ed97.up.railway.app/2025_TablaAplicabilidad_AytoTecate.pdf", icon: LayoutGrid, external: true },
    { label: "Archivo de Sesiones Anteriores", href: "/transparencia#sesiones", icon: FileText, disabled: true },
    { label: "¿Cómo presentar una solicitud?", href: "/autoridad-garante#solicitud", icon: FileText },
    { label: "¿Cómo presentar una denuncia ciudadana?", href: "/autoridad-garante#denuncia", icon: Eye },
    { label: "Avisos de Privacidad", href: "/aviso-privacidad", icon: Search },
    { label: "Sujetos Obligados", href: "/transparencia#sujetos-obligados", icon: Users },
    { label: "Autoridad Garante", href: "/transparencia#autoridad-garante", icon: Shield },
    { label: "Directorio Municipal", href: "/estructura", icon: Users },
  ],
  portalesGubernamentales: [
    {
      href: "https://www.plataformadetransparencia.org.mx",
      imgSrc: "/res/pnacionaldetransparencia_logo.jpg",
      alt: "Plataforma Nacional de Transparencia"
    },
    {
      href: "https://transparencia.gob.mx/home.html",
      imgSrc: "/res/transpueblo_logo.jpg",
      alt: "Transparencia para el Pueblo - ITAIPBC"
    },
    {
      href: "https://sabg.bajacalifornia.gob.mx/sabgbc/",
      imgSrc: "/res/buengobierno_logo.jpg",
      alt: "Baja California - Buen Gobierno"
    }
  ],
  secciones: [
    { title: "Estructura Orgánica", description: "Conoce el organigrama y la estructura de la dependencia", href: "/estructura" },
    { title: "Administración", description: "Información sobre la administración y recursos humanos", href: "/administracion" },
    { title: "Finanzas", description: "Información financiera, presupuestos y egresos", href: "/finanzas" },
    { title: "Normatividad", description: "Leyes, reglamentos y lineamientos aplicables", href: "/normatividad" },
    { title: "Transparencia", description: "Información pública de oficio y sujetos obligados", href: "/transparencia" },
    { title: "Aviso de Privacidad", description: "Política de privacidad y protección de datos personales", href: "/aviso-privacidad" }
  ]
};

export type SearchableItem = {
  title: string;
  description: string;
  type: "Documento" | "Artículo" | "Solicitud" | "Recurso" | "Sección";
  url: string;
  ambito?: string;
};

export const getAllSearchableItems = (): SearchableItem[] => [
  ...siteData.secciones.map(s => ({
    title: s.title,
    description: s.description,
    type: "Sección" as const,
    url: s.href
  })),
  ...documentos.map(d => ({
    title: d.title,
    description: d.description,
    type: "Documento" as const,
    url: d.url || "#",
    ambito: d.ambito
  })),
  ...siteData.articulos.map(a => ({
    title: a.art,
    description: "Artículo de transparencia",
    type: "Artículo" as const,
    url: a.href
  })),
  ...siteData.solicitudes.filter(s => !s.disabled).map(s => ({
    title: s.label,
    description: "Trámites y solicitudes",
    type: "Solicitud" as const,
    url: s.href
  })),
  ...siteData.recursos.filter(r => !r.disabled).map(r => ({
    title: r.label,
    description: "Recursos y plataformas",
    type: "Recurso" as const,
    url: r.href
  }))
];

export const contactoPrincipal = {
  titular: "Lic. Katya A. Escobar A.",
  cargo: "Jefa de la Unidad Coordinadora de Transparencia",
  dependencia: "H. Ayuntamiento Constitucional de Tecate, B.C.",
  correo: "transparencia@tecate.gob.mx",
  domicilio: "Calzada de los Insurgentes S/N, Centro, Tecate, B.C. C.P. 21400",
  telefono: "(665) 655-3500",
  horario: "Lunes a viernes, 08:00 am a 3:00 pm hrs.",
  plataforma: "www.plataformadetransparencia.org.mx",
  actualizacion: "20 de abril de 2026"
};

export const contactos = [
  {
    nombre: "Dirección de Bienestar Municipal",
    titular: "Monserrat Landeros",
    direccion: "Blvd. Encinos 5000, colonia Rincón Tecate, C.P. 21452",
    telefono: "(665) 521 2118",
    correo: "monserrat.landeros@tecate.gob.mx",
    funciones: [
      "Coordinar y ejecutar programas sociales dirigidos a población vulnerable.",
      "Establecer mecanismos de atención en comunidades marginadas.",
      "Articular esfuerzos entre el gobierno municipal, estatal y sociedad civil para el bienestar colectivo."
    ],
    areas: [
      "Departamento de Programas Sociales",
      "Coordinación de Atención Comunitaria",
      "Jefatura de Apoyos Directos y Subsidios"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 54 y 55"
  },
  {
    nombre: "Tesorería Municipal",
    titular: "Miguel Ángel Ayala Torres",
    direccion: "Pdte. Pascual Ortiz Rubio #1310, Zona Centro, C.P. 21400",
    telefono: "(665) 654 9211",
    correo: "miguel.ayala@tecate.gob.mx",
    funciones: [
      "Administrar los recursos financieros del municipio.",
      "Elaborar y ejecutar la Ley de Ingresos y Presupuesto de Egresos.",
      "Coordinar recaudación, contabilidad y fiscalización."
    ],
    areas: [
      "Departamento de Recaudación",
      "Jefatura de Egresos y Presupuesto",
      "Unidad de Contabilidad Gubernamental"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 60 a 67"
  },
  {
    nombre: "Oficialía Mayor",
    titular: "Omar Blancarte Aragón",
    direccion: "Pdte. Pascual Ortiz Rubio #1310, Zona Centro, C.P. 21400",
    telefono: "(665) 654 9223",
    correo: "omar.blancarte@tecate.gob.mx",
    funciones: [
      "Administrar los recursos humanos, materiales y patrimoniales.",
      "Coordinar procesos de adquisiciones y servicios generales.",
      "Supervisar bienes muebles e inmuebles municipales."
    ],
    areas: [
      "Departamento de Recursos Humanos",
      "Coordinación de Servicios Generales",
      "Unidad de Control Patrimonial"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 68 a 72"
  },
  {
    nombre: "Secretaría del Ayuntamiento",
    titular: "Eduardo Macias Flores",
    direccion: "Pdte. Pascual Ortiz Rubio #1310, Zona Centro, C.P. 21400",
    telefono: "(665) 654 9212",
    correo: "eduardo.macias@tecate.gob.mx",
    funciones: [
      "Coordinar sesiones de Cabildo y elaborar actas oficiales.",
      "Custodiar el archivo municipal y normativo.",
      "Emitir certificaciones y documentos públicos."
    ],
    areas: [
      "Dirección Jurídica",
      "Archivo Municipal",
      "Unidad de Actas y Acuerdos"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 11 a 15"
  },
  {
    nombre: "Sindicatura Procuradora",
    titular: "Sarahi Osuna Arce",
    direccion: "Pdte. Pascual Ortiz Rubio #1310, Zona Centro, C.P. 21400",
    telefono: "(665) 654 9213 / Whatsapp 665 1778 072",
    correo: "sarahi.osuna@sindicaturadetecate.gob.mx",
    funciones: [
      "Vigilar la legalidad en la administración pública.",
      "Proteger el patrimonio municipal.",
      "Representar jurídicamente al Ayuntamiento en litigios."
    ],
    areas: [
      "Dirección General",
      "Subdirección Administrativa",
      "Subdirección de Contraloría Interna",
      "Subdirección de Responsabilidades Administrativas",
      "Subdirección de Investigación",
      "Subdirección de Auditoría de obra Pública y Desarrollo Urbano",
      "Subdirección de Comisarios",
      "Departamento de Supervisión del Servicio Público de Arrastre y Almacenamiento de Vehículos"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 31 al 38"
  },
  {
    nombre: "Coordinación General de Gabinete",
    titular: "Luis Villavicencio Zarate",
    direccion: "Pdte. Pascual Ortiz Rubio #1310, Zona Centro, C.P. 21400",
    telefono: "(665) 654 9203",
    correo: "luis.villavicencio@tecate.gob.mx",
    funciones: [
      "Dar seguimiento a la ejecución de políticas públicas municipales.",
      "Coordinar la agenda operativa de las direcciones.",
      "Monitorear los avances del Plan Municipal de Desarrollo."
    ],
    areas: [
      "Unidad de Seguimiento de Programas",
      "Enlace de Coordinación Interinstitucional"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 73"
  },
  {
    nombre: "Dirección de Seguridad Pública y Tránsito Municipal",
    titular: "José Luis Sarmiento Monje",
    direccion: "Pdte. Pascual Ortiz Rubio #1310, Zona Centro, C.P. 21400",
    telefono: "(665) 654 4782",
    correo: "jose.sarmiento@tecate.gob.mx",
    funciones: [
      "Salvaguardar la integridad y bienes de las personas.",
      "Mantener el orden público y la paz social.",
      "Regular el tránsito municipal."
    ],
    areas: [
      "Policía Preventiva",
      "Tránsito Municipal",
      "Unidad de Inteligencia"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 93 a 97"
  },
  {
    nombre: "Coordinación de Protección Civil y Bomberos",
    titular: "Constantino León",
    direccion: "Av. Lomas de San Humberto S/N, Colonia Lomas de Santa Anita",
    telefono: "(665) 521 1218",
    correo: "constantino.leon@tecate.gob.mx",
    funciones: [
      "Prevenir y atender situaciones de emergencia.",
      "Coordinar acciones de rescate y auxilio.",
      "Supervisar medidas de protección civil."
    ],
    areas: [
      "Coordinación de Bomberos",
      "Unidad de Rescate",
      "Dirección Técnica de Emergencias"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 98 a 100"
  },
  {
    nombre: "Dirección de Desarrollo Económico y Turismo",
    titular: "Grisel García",
    direccion: "Pdte. Pascual Ortiz Rubio #1310, Zona Centro, C.P. 21400",
    telefono: "(665) 654 8095",
    correo: "grisel.garcia@tecate.gob.mx",
    sitioWeb: "www.tecate.gog.mx/DECO",
    funciones: [
      "Impulsar el desarrollo económico y empresarial del municipio.",
      "Gestionar incentivos para inversión local."
    ],
    areas: [
      "Departamento de Fomento Económico",
      "Coordinación de Turismo",
      "Ventanilla de Atención Empresarial"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 101 a 104"
  },
  {
    nombre: "Dirección de Gestión Integral del Territorio",
    titular: "Ivonne Anaya",
    direccion: "Pdte. Pascual Ortiz Rubio #1310, Zona Centro, C.P. 21400",
    telefono: "(665) 654 9243",
    correo: "ivonne.anaya@tecate.gob.mx",
    funciones: [
      "Coordinar el ordenamiento territorial del municipio.",
      "Evaluar y autorizar desarrollos urbanos.",
      "Controlar licencias de construcción y uso de suelo."
    ],
    areas: [
      "Unidad de Catastro",
      "Dirección de Desarrollo Urbano",
      "Departamento de Licencias"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 105 a 109"
  }
];

export const contactosParamunicipales = [
  {
    nombre: "Instituto Municipal de Arte y Cultura (IMACTE)",
    titular: "Alfredo Ochoa Álamos",
    direccion: "Tláloc exterior 400, Cuauhtémoc, 21470, Tecate, Baja California",
    telefono: "(665) 654 4947",
    correo: "alfredo.ochoa@tecate.gob.mx",
    funciones: [
      "Promover las manifestaciones culturales y artísticas.",
      "Coordinar eventos culturales del municipio.",
      "Apoyar la formación artística comunitaria."
    ],
    areas: [
      "Coordinación de Eventos Culturales",
      "Talleres de Formación Artística"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 114 a 117"
  },
  {
    nombre: "Instituto Municipal del Deporte (IMDETE)",
    titular: "Saul Alberto Pruneda",
    direccion: "Portes Gil 180, 21470 Tecate, Baja California, Unidad Eufrasio Santana",
    telefono: "(665) 654 4785",
    correo: "saul.pruneda@tecate.gob.mx",
    funciones: [
      "Fomentar la cultura física y el deporte en la población.",
      "Administrar espacios deportivos municipales.",
      "Impulsar programas de activación física."
    ],
    areas: [
      "Coordinación de Ligas Municipales",
      "Departamento de Promoción Deportiva"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 110 a 113"
  },
  {
    nombre: "Instituto Municipal de la Juventud (IMJUVET)",
    titular: "Sara Rodríguez",
    direccion: "Tláloc exterior 400, Cuauhtémoc, 21470, Tecate, Baja California",
    telefono: "(665) 521 2427",
    correo: "sara.rodriguez@tecate.gob.mx",
    funciones: [
      "Promover la participación de la juventud en el desarrollo local.",
      "Implementar programas educativos y recreativos.",
      "Fomentar la cultura de paz entre jóvenes."
    ],
    areas: [
      "Departamento de Proyectos Juveniles",
      "Coordinación de Vinculación Educativa"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 118 a 120"
  },
  {
    nombre: "Instituto Municipal de la Mujer (IMMUJER)",
    titular: "Mariana Mena",
    direccion: "Cuitláhuac 728, 21470 Tecate, Baja California",
    telefono: "(665) 654 3390",
    correo: "mariana.mena@tecate.gob.mx",
    funciones: [
      "Implementar políticas públicas con perspectiva de género.",
      "Brindar atención integral a mujeres víctimas de violencia.",
      "Promover la igualdad de derechos entre hombres y mujeres."
    ],
    areas: [
      "Área Jurídica y Psicológica",
      "Departamento de Capacitación y Género",
      "Coordinación de Atención a la Mujer"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 121 a 123"
  },
  {
    nombre: "Sistema Integral de Residuos de Tecate (SIRT)",
    titular: "José Luis Barba Duarte",
    direccion: "Pdte. Pascual Ortiz Rubio #1310, Zona Centro, C.P. 21400",
    telefono: "(665) 654 9266",
    correo: "jose.barba@tecate.gob.mx",
    funciones: [
      "Coordinar la recolección y disposición final de residuos.",
      "Supervisar rutas, frecuencias y mantenimiento de unidades.",
      "Promover campañas de reciclaje y cultura ambiental."
    ],
    areas: [
      "Coordinación Operativa de Rutas",
      "Departamento Técnico y Logístico",
      "Unidad de Educación Ambiental"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 124 a 126"
  },
  {
    nombre: "Instituto Municipal de Bienestar Animal (IMBAT)",
    titular: "Gabriela Vázquez",
    direccion: "C.",
    telefono: "(665) 521-3408",
    correo: "gabriela.vazquez@tecate.gob.mx",
    funciones: [
      "Coordinar campañas de esterilización y vacunación.",
      "Fomentar la adopción responsable.",
      "Supervisar el bienestar animal y atención a denuncias."
    ],
    areas: [
      "Clínica Veterinaria Municipal",
      "Departamento de Resguardo Animal",
      "Área de Educación y Adopciones"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 127 a 129"
  },
  {
    nombre: "DIF Municipal",
    titular: "Esther Barbosa",
    direccion: "Blvd. Encinos #5000, Rincón Tecate, C.P. 21452",
    telefono: "(665) 103 6730",
    correo: "esther.barbosa@tecate.gob.mx",
    funciones: [
      "Subdirección de Asistencia Social",
      "Dirección de Programas Alimentarios",
      "Administrar estancias infantiles y casas hogar."
    ],
    areas: [
      "Unidad de Seguimiento de Programas",
      "Enlace de Coordinación Interinstitucional",
      "Unidad de Atención Integral Familiar"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 130 a 134"
  },
  {
    nombre: "Instituto de Planeación y Desarrollo Municipal (INPLADEM)",
    titular: "Alejandro Ruiz",
    direccion: "Pdte. Pascual Ortiz Rubio #1310, Zona Centro, C.P. 21400",
    telefono: "(665) 521 2002",
    correo: "alejandro.ruiz@tecate.gob.mx",
    funciones: [
      "Coordinar la planeación estratégica del desarrollo municipal.",
      "Elaborar y dar seguimiento al Plan Municipal de Desarrollo.",
      "Evaluar el impacto de políticas públicas locales."
    ],
    areas: [
      "Unidad de Planeación Estratégica",
      "Departamento de Evaluación y Seguimiento",
      "Observatorio de Indicadores Municipales"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 135 a 137"
  },
  {
    nombre: "Sistema Municipal de Parques Temáticos (SIMPATE)",
    titular: "Jesús Felipe Vega Ramos",
    direccion: "Quinta, 21482 Tecate, B.C.",
    telefono: "(665) 655 7278",
    correo: "jesus.vega@tecate.gob.mx",
    funciones: [
      "Administrar y conservar parques públicos y temáticos.",
      "Promover actividades recreativas y educativas.",
      "Supervisar servicios y mantenimiento de espacios públicos."
    ],
    areas: [
      "Departamento de Mantenimiento",
      "Coordinación de Actividades Recreativas",
      "Unidad de Atención al Usuario"
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos 138 a 140"
  },
  {
    nombre: "Instituto de Promoción del Desarrollo Urbano (INPRODEUR)",
    titular: "Alfredo Ivan Hernández León",
    direccion: "Agustín Escudero 134, Escudero, 21452 Tecate, B.C.",
    telefono: "(665) 654 1580",
    correo: "alfredo.hernandez@tecate.gob.mx",
    funciones: [
      ".",
      ".",
      "."
    ],
    areas: [
      "",
      "",
      ""
    ],
    fundamento: "Reglamento de la Administración Pública Municipal – Artículos"
  }
];
