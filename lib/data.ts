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
  // FEDERALES
  {
    category: "leyes",
    title: "Constitución Política de los Estados Unidos Mexicanos",
    description: "Documento supremo y fundamental que rige jurídicamente al país.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf",
    date: "Última Reforma 2025",
    type: "PDF",
    ambito: "Federal"
  },
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
    title: "Constitución Política del Estado Libre y Soberano de Baja California",
    description: "Norma suprema estatal. Define autonomía municipal y derechos ciudadanos.",
    url: "https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Leyes/TOMO_I/20200214_CONSTBC.PDF",
    date: "Última Reforma 2020",
    section: "Normatividad",
    type: "PDF",
    ambito: "Estatal"
  },
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
    url: "",
    date: "Reforma dic-2025 (Art. 199, fracc. X adicionada)",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento de Tránsito Municipal para el Municipio de Tecate, B.C.",
    description: "Circulación vehicular, sanciones y reconocimiento de licencias digitales de otras entidades.",
    url: "",
    date: "Reforma oct-2025 (Art. 49); reforma previa jun-2025",
    section: "Normatividad",
    type: "PDF",
    ambito: "Municipal"
  },
  {
    category: "reglamentos",
    title: "Reglamento Municipal de Protección Civil para el Municipio de Tecate, B.C.",
    description: "Prevención, preparación y respuesta ante emergencias y desastres.",
    url: "",
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
    url: "",
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

export const normatividadData = {
  categories: [
    { id: "all", label: "Todos", count: documentos.length },
    { id: "leyes", label: "Leyes", count: documentos.filter(d => d.category === "leyes").length },
    { id: "código", label: "Códigos", count: documentos.filter(d => d.category === "código").length },
    { id: "reglamentos", label: "Reglamentos", count: documentos.filter(d => d.category === "reglamentos").length },
    { id: "manuales", label: "Manuales", count: documentos.filter(d => d.category === "manuales").length },
    { id: "lineamientos", label: "Lineamientos", count: documentos.filter(d => d.category === "lineamientos").length },
  ],
  documentos,
  enlacesExternos
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
    { label: "¿Cómo Presentar una Denuncia?", href: "https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/denuncia/denunciaCiudadana.xhtml", icon: Eye },
    { label: "Avisos de Privacidad", href: "/aviso-privacidad", icon: Search },
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
  ...normatividadData.documentos.map(d => ({
    title: d.title,
    description: d.description,
    type: "Documento" as const,
    url: d.url,
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
