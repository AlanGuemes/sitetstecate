import { db } from "./db"

export async function getContactoPrincipal() {
  try {
    return await db.contactoPrincipal.findFirst()
  } catch (error) {
    console.error("Error fetching contacto principal:", error)
    return null
  }
}

export async function getDependencias() {
  try {
    const deps = await db.dependencia.findMany({
      include: {
        areas: true,
        funciones: true
      },
      orderBy: { nombre: "asc" }
    })

    return deps.map(d => ({
      ...d,
      titular: d.titular || "No designado",
      direccion: d.address || "No disponible",
      telefono: d.phone || "No disponible",
      correo: d.email || "No disponible",
      areas: d.areas.map(a => a.nombre),
      funciones: d.funciones.map(f => f.descripcion)
    }))
  } catch (error) {
    console.error("Error fetching dependencias:", error)
    return []
  }
}

export async function getContactos() {
  try {
    const dependencias = await getDependencias()
    return dependencias.filter(d => !d.isParamunicipal)
  } catch (error) {
    console.error("Error fetching contactos:", error)
    return []
  }
}

export async function getContactosParamunicipales() {
  try {
    const dependencias = await getDependencias()
    return dependencias.filter(d => d.isParamunicipal)
  } catch (error) {
    console.error("Error fetching contactos paramunicipales:", error)
    return []
  }
}

export async function getDocumentos() {
  try {
    return await db.documento.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        subseccion: true,
        subsubseccion: true
      }
    })
  } catch (error) {
    console.error("Error fetching documentos:", error)
    return []
  }
}

export async function getEnlacesExternos() {
  try {
    return await db.enlaceExterno.findMany({
      orderBy: { createdAt: "desc" }
    })
  } catch (error) {
    console.error("Error fetching enlaces externos:", error)
    return []
  }
}

export async function getSubsecciones() {
  try {
    return await db.subseccion.findMany({
      orderBy: { nombre: "asc" }
    })
  } catch (error) {
    console.error("Error fetching subsecciones:", error)
    return []
  }
}

export async function getSubsubsecciones() {
  try {
    return await db.subsubseccion.findMany({
      include: { subseccion: true },
      orderBy: { nombre: "asc" }
    })
  } catch (error) {
    console.error("Error fetching subsubsecciones:", error)
    return []
  }
}

import { siteData } from "./site-config"

export async function getAllSearchableItems() {
  try {
    const docs = await getDocumentos()
    const links = await getEnlacesExternos()
    
    const items: { title: string; description: string; url: string; type: string; date?: string; ambito?: string; subsection?: string; subsubsection?: string }[] = []
    
    // 1. Static Sections
    siteData.secciones.forEach(s => {
      items.push({
        title: s.title,
        description: s.description,
        type: "Sección",
        url: s.href
      })
    })

    // 2. Static Articles
    siteData.articulos.forEach(a => {
      items.push({
        title: a.art,
        description: "Artículo de transparencia",
        type: "Artículo",
        url: a.href
      })
    })

    // 3. Static Solicitudes
    siteData.solicitudes.filter(s => !s.disabled).forEach(s => {
      items.push({
        title: s.label,
        description: "Trámites y solicitudes",
        type: "Solicitud",
        url: s.href
      })
    })

    // 4. Static Recursos
    siteData.recursos.filter(r => !r.disabled).forEach(r => {
      items.push({
        title: r.label,
        description: "Recursos y plataformas",
        type: "Recurso",
        url: r.href
      })
    })

    // 5. DB Documents
    docs.forEach(d => {
      const parentUrl = d.subseccion ? `/${d.subseccion.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}` : "#"
      
      let desc = d.description || ""
      if (d.subseccion) {
        desc = `Subsección: ${d.subseccion.nombre}${d.subsubseccion ? ` - ${d.subsubseccion.nombre}` : ''} ${desc}`
      }
      
      items.push({
        title: d.title,
        description: desc,
        url: d.url || parentUrl,
        type: "Documento",
        date: d.date || d.createdAt.toISOString(),
        ambito: d.ambito,
        subsection: d.subseccion?.nombre,
        subsubsection: d.subsubseccion?.nombre
      })
    })
    
    // 6. DB Enlaces
    links.forEach(l => {
      items.push({
        title: l.titulo,
        description: l.descripcion || "Enlace externo",
        url: l.url,
        type: "Enlace",
        date: l.createdAt.toISOString()
      })
    })
    
    return items
  } catch (error) {
    console.error("Error fetching searchable items:", error)
    return []
  }
}
