import BusquedaClientPage from "./client-page"
import { getAllSearchableItems } from "@/lib/db-data"

export default async function BusquedaPage() {
  const items = await getAllSearchableItems()

  return <BusquedaClientPage allItems={items} />
}
