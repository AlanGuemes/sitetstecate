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
  {
    category: "leyes",
    title: "Ley de Transparencia y Acceso a la Información Pública del Estado de Baja California",
    description: "Ley que regula el derecho de acceso a la información pública en el Estado.",
    url: "https://s3-public-presigner-production-ed97.up.railway.app/2026-Ley-de-transparencia-baja-california-Reformada.pdf",
    date: "Última reforma: 2024",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Constitución Política de los Estados Unidos Mexicanos",
    description: "Documento supremo y fundamental que rige jurídicamente al país.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf",
    date: "Última Reforma 2025",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley General de Transparencia y Acceso a la Información Pública",
    description: "Ley que establece los principios y bases generales para garantizar el derecho de acceso a la información.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGTAIP.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados",
    description: "Normativa general sobre el tratamiento y protección de datos personales.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley General de Responsabilidades Administrativas",
    description: "Ley que distribuye competencias para establecer responsabilidades administrativas de los Servidores Públicos.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGRA.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley General de Contabilidad Gubernamental",
    description: "Normativa para el registro contable de las operaciones gubernamentales.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGCG.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley General de Desarrollo Social",
    description: "Ley que regula el diseño, implementación y evaluación de la política de desarrollo social.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LDS.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley de Adquisiciones, Arrendamientos y Servicios del Sector Público",
    description: "Normativa que regula los procedimientos de contratación pública de bienes y servicios.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LAASSP.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley de Obras Públicas y Servicios Relacionados con las Mismas",
    description: "Ley que establece las bases para la contratación y ejecución de obras públicas.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LOPSRM.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley Federal de Presupuesto y Responsabilidad Hacendaria",
    description: "Normativa sobre la programación, presupuestación, aprobación y ejercicio del gasto público.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPRH.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley General de Bienes Nacionales",
    description: "Ley que regula el régimen de dominio público y privado de la Federación.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGBN.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley General del Sistema Nacional Anticorrupción",
    description: "Ley que establece las bases del Sistema Nacional Anticorrupción.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSNA.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley Federal del Trabajo",
    description: "Ley reglamentaria del artículo 123 constitucional en materia laboral.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley del Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado",
    description: "Normativa aplicable a la seguridad social de los trabajadores del Estado.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LISSSTE.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Código Fiscal de la Federación",
    description: "Ordenamiento jurídico que establece las obligaciones fiscales de los contribuyentes.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
  },
  {
    category: "leyes",
    title: "Ley del Impuesto sobre la Renta",
    description: "Ley que regula el pago del impuesto sobre la renta de personas físicas y morales.",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf",
    date: "Última Reforma 2025",
    section: "Normatividad",
    type: "PDF"
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

export const normatividadData = {
  categories: [
    { id: "all", label: "Todos", count: documentos.length },
    { id: "leyes", label: "Leyes", count: documentos.filter(d => d.category === "leyes").length },
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
    url: d.url
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
