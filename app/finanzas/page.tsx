import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { DocumentItem } from "@/components/document-item"
import {
  Wallet,
  TrendingUp,
  FileSpreadsheet,
  PieChart,
  Download,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign
} from "lucide-react"
import { finanzasData } from "@/lib/data"

const estadosFinancieros = [
  {
    title: "Estado de Situación Financiera",
    periodo: "4to Trimestre 2024",
    date: "Diciembre 2024"
  },
  {
    title: "Estado de Actividades",
    periodo: "4to Trimestre 2024",
    date: "Diciembre 2024"
  },
  {
    title: "Estado de Variación en la Hacienda Pública",
    periodo: "4to Trimestre 2024",
    date: "Diciembre 2024"
  },
  {
    title: "Estado de Cambios en la Situación Financiera",
    periodo: "4to Trimestre 2024",
    date: "Diciembre 2024"
  },
  {
    title: "Estado de Flujos de Efectivo",
    periodo: "4to Trimestre 2024",
    date: "Diciembre 2024"
  },
  {
    title: "Estado Analítico del Activo",
    periodo: "4to Trimestre 2024",
    date: "Diciembre 2024"
  },
]

const presupuestos = [
  {
    year: "2025",
    ingresos: "$450,000,000",
    egresos: "$448,500,000",
    status: "Vigente"
  },
  {
    year: "2024",
    ingresos: "$420,000,000",
    egresos: "$418,200,000",
    status: "Ejercido"
  },
  {
    year: "2023",
    ingresos: "$380,000,000",
    egresos: "$378,500,000",
    status: "Ejercido"
  },
]

const cuentasPublicas = [
  {
    title: "Cuenta Pública 2024",
    description: "Información financiera del ejercicio fiscal 2024",
    trimestres: ["1er Trimestre", "2do Trimestre", "3er Trimestre", "4to Trimestre"]
  },
  {
    title: "Cuenta Pública 2023",
    description: "Información financiera del ejercicio fiscal 2023",
    trimestres: ["1er Trimestre", "2do Trimestre", "3er Trimestre", "4to Trimestre"]
  },
  {
    title: "Cuenta Pública 2022",
    description: "Información financiera del ejercicio fiscal 2022",
    trimestres: ["1er Trimestre", "2do Trimestre", "3er Trimestre", "4to Trimestre"]
  },
]

export default function FinanzasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground">Finanzas</h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl leading-relaxed">
              Consulta el presupuesto, estados financieros, cuenta pública y gastos operativos de la administración municipal.
            </p>
          </div>
        </section>

        {/* Padrón de Proveedores */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Padrón de Proveedores"
              description="Consulta el listado oficial de proveedores y prestadores de servicios."
            />

            <div className="bg-card border border-border rounded-lg">
              {finanzasData.documentos
                .filter(doc => doc.title === "Padron de Proveedores 2026")
                .map((doc, index) => (
                  <DocumentItem
                    key={index}
                    title="1ER TRIMESTRE 2026"
                    description={doc.description}
                    date={`Publicado: ${doc.date}`}
                    downloadUrl={doc.url}
                    variant="default"
                  />
                ))}
            </div>
          </div>
        </section>

        {/* Gastoss */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Gastos"
              description="Consulta el listado oficial de gastos del municipio."
            />

            <div className="bg-card border border-border rounded-lg">
              {finanzasData.documentos
                .filter(doc => doc.title === "Gastos de Representación y Viáticos 2026")
                .map((doc, index) => (
                  <DocumentItem
                    key={index}
                    title="1ER TRIMESTRE 2026 - Gastos de Representación y Viáticos"
                    description={doc.description}
                    date={`Publicado: ${doc.date}`}
                    downloadUrl={doc.url}
                    variant="default"
                  />
                ))}
            </div>
          </div>
        </section>

        {/* Documentos adicionales */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Documentos Financieros"
              description="Información adicional sobre las finanzas municipales."
            />

            <div className="bg-card border border-border rounded-lg divide-y divide-border">
              {finanzasData.documentos
                .filter(doc => doc.title !== "Padron de Proveedores 2026")
                .map((doc, index) => (
                  <DocumentItem
                    key={index}
                    title={doc.title}
                    description={doc.description}
                    date={`Fecha: ${doc.date}`}
                    downloadUrl={doc.url}
                  />
                ))
              }
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
