import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FinanzasSections } from "@/components/finanzas-sections"
import { finanzasData } from "@/lib/data"
import { FileSpreadsheet } from "lucide-react"

export default function FinanzasPage() {
  const totalDocs = finanzasData.documentos.length

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="bg-primary py-14 lg:py-20 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-white/5" />

          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-primary-foreground/60 mb-3">
                  <FileSpreadsheet className="h-3.5 w-3.5" />
                  H. Ayuntamiento de Tecate, B.C.
                </span>
                <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                  Finanzas
                </h1>
                <p className="mt-4 text-primary-foreground/75 max-w-2xl leading-relaxed text-base lg:text-lg">
                  Consulta la información financiera pública del municipio: presupuestos,
                  estados financieros, gastos, padrón de proveedores, auditorías y más.
                </p>
              </div>
              <div className="flex gap-4 flex-shrink-0">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-center min-w-[90px]">
                  <p className="text-3xl font-bold text-primary-foreground">{totalDocs}</p>
                  <p className="text-xs text-primary-foreground/70 mt-1">Documentos</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-center min-w-[100px]">
                  <p className="text-3xl font-bold text-primary-foreground">Abril 2026</p>
                  <p className="text-xs text-primary-foreground/70 mt-1">Actualización</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Secciones con tabulador de años ─────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10">
          <FinanzasSections documentos={finanzasData.documentos} />
        </div>

        {/* ── Footer CTA ────────────────────────────────────────────── */}
        <section className="bg-primary/5 border-t border-border py-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground">
              La información publicada en esta sección es de carácter público y se actualiza
              periódicamente conforme a la normatividad de transparencia.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
