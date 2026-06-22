import EstructuraClientPage from "./client-page"
import { getContactos, getContactosParamunicipales, getDocumentos } from "@/lib/db-data"

export const dynamic = "force-dynamic";

export default async function EstructuraPage() {
  const contactos = await getContactos()
  const contactosParamunicipales = await getContactosParamunicipales()
  
  const todosDocs = await getDocumentos()
  const estructuraDocs = todosDocs.filter(d => d.section === "Estructura")
  
  const nominas = estructuraDocs.filter(d => d.subseccion?.nombre === "NOMINAS")
  const organigramas = estructuraDocs.filter(d => d.subseccion?.nombre === "ORGANIGRAMAS")
  const curriculums = estructuraDocs.filter(d => d.subseccion?.nombre === "CURRICULUMS")

  return (
    <EstructuraClientPage 
      contactos={contactos} 
      contactosParamunicipales={contactosParamunicipales}
      nominas={nominas}
      organigramas={organigramas}
      curriculums={curriculums}
    />
  )
}
