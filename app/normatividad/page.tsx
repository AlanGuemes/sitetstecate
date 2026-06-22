import { getDocumentos, getEnlacesExternos } from "@/lib/db-data"
import NormatividadClientPage from "./client-page"

export default async function NormatividadPage() {
  const allDocs = await getDocumentos()
  const documentos = allDocs.filter(d => !d.subseccion || d.subseccion.nombre === "Normatividad" || d.section === "Normatividad")
  // Note: Actually in the DB, is it section="Normatividad"? 
  // Let's check how they were filtered in data.ts. In data.ts:
  // docs = documentos.filter(d => d.section === "Normatividad" || !d.section);
  // So we filter allDocs here:
  const filteredDocs = allDocs.filter(d => d.section === "Normatividad" || !d.section)

  const enlacesExternos = await getEnlacesExternos()

  return <NormatividadClientPage documentos={filteredDocs} enlacesExternos={enlacesExternos} />
}
