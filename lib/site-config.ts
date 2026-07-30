import {
  FileText,
  Search,
  Users,
  Shield,
  LayoutGrid,
  Scale,
  Eye,
} from "lucide-react";

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
    { label: "Tabla de Aplicabilidad", href: "https://s3-public-presigner-production-ed97.up.railway.app/2026_TablaAplicabilidad.pdf", icon: LayoutGrid, external: true },
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

export const normatividadCategories = [
  { id: "all", label: "Todos" },
  { id: "leyes", label: "Leyes" },
  { id: "código", label: "Códigos" },
  { id: "reglamentos", label: "Reglamentos" },
  { id: "manuales", label: "Manuales" },
  { id: "lineamientos", label: "Lineamientos" },
  { id: "sesiones", label: "Sesiones de Cabildo" },
  { id: "actas", label: "Actas de Comisión" },
];
