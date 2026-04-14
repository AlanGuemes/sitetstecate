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

        {/* Resumen Financiero */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader 
              title="Resumen Financiero 2025" 
              description="Información general del presupuesto del ejercicio fiscal vigente."
            />
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <ArrowUpRight className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Ingresos Presupuestados</span>
                </div>
                <p className="text-3xl font-bold text-foreground">$450M</p>
                <p className="text-sm text-muted-foreground mt-1">Pesos MXN</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <ArrowDownRight className="h-5 w-5 text-red-600" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Egresos Presupuestados</span>
                </div>
                <p className="text-3xl font-bold text-foreground">$448.5M</p>
                <p className="text-sm text-muted-foreground mt-1">Pesos MXN</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Balance</span>
                </div>
                <p className="text-3xl font-bold text-secondary">$1.5M</p>
                <p className="text-sm text-muted-foreground mt-1">Superávit proyectado</p>
              </div>
            </div>
          </div>
        </section>

        {/* Presupuesto por año */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader 
              title="Presupuesto de Egresos" 
              description="Información presupuestal por ejercicio fiscal."
            />
            
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="text-left px-6 py-4 font-medium">Ejercicio</th>
                      <th className="text-left px-6 py-4 font-medium">Ingresos</th>
                      <th className="text-left px-6 py-4 font-medium">Egresos</th>
                      <th className="text-left px-6 py-4 font-medium">Estado</th>
                      <th className="text-right px-6 py-4 font-medium">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {presupuestos.map((presupuesto, index) => (
                      <tr key={index} className="hover:bg-muted transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground">{presupuesto.year}</td>
                        <td className="px-6 py-4 text-muted-foreground">{presupuesto.ingresos}</td>
                        <td className="px-6 py-4 text-muted-foreground">{presupuesto.egresos}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            presupuesto.status === "Vigente" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {presupuesto.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-primary hover:underline text-sm">
                            Ver detalles
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Estados Financieros */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader 
              title="Estados Financieros" 
              description="Información contable conforme a la Ley General de Contabilidad Gubernamental."
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {estadosFinancieros.map((estado, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileSpreadsheet className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-foreground line-clamp-2">{estado.title}</h3>
                      <p className="text-xs text-secondary mt-1">{estado.periodo}</p>
                      <p className="text-xs text-muted-foreground">{estado.date}</p>
                    </div>
                  </div>
                  <button className="mt-4 w-full inline-flex items-center justify-center gap-2 text-sm px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-accent transition-colors">
                    <Download className="h-4 w-4" />
                    Descargar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cuenta Pública */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader 
              title="Cuenta Pública" 
              description="Información trimestral del ejercicio del gasto público."
            />
            
            <div className="space-y-6">
              {cuentasPublicas.map((cuenta, index) => (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="bg-primary/5 px-6 py-4 border-b border-border">
                    <h3 className="font-semibold text-foreground">{cuenta.title}</h3>
                    <p className="text-sm text-muted-foreground">{cuenta.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {cuenta.trimestres.map((trimestre, tIndex) => (
                        <button 
                          key={tIndex}
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-muted rounded-lg hover:bg-accent transition-colors text-sm"
                        >
                          <Calendar className="h-4 w-4 text-primary" />
                          {trimestre}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentos adicionales */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader 
              title="Documentos Financieros" 
              description="Información adicional sobre las finanzas municipales."
            />
            
            <div className="bg-card border border-border rounded-lg divide-y divide-border">
              <DocumentItem
                title="Ley de Ingresos 2025"
                description="Ley de Ingresos del Municipio para el ejercicio fiscal 2025."
                date="Aprobada: Diciembre 2024"
                downloadUrl="#"
              />
              <DocumentItem
                title="Presupuesto de Egresos 2025"
                description="Presupuesto de Egresos del Municipio para el ejercicio fiscal 2025."
                date="Aprobado: Diciembre 2024"
                downloadUrl="#"
              />
              <DocumentItem
                title="Deuda Pública"
                description="Información sobre la deuda pública del municipio."
                date="Actualizado: Marzo 2025"
                downloadUrl="#"
              />
              <DocumentItem
                title="Inventario de Bienes"
                description="Inventario de bienes muebles e inmuebles del municipio."
                date="Actualizado: Enero 2025"
                downloadUrl="#"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
