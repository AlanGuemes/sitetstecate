import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AdministracionSections } from "@/components/administracion-sections"
import { getDocumentos } from "@/lib/db-data"
import { FileText } from "lucide-react"

export const dynamic = "force-dynamic";

export default async function AdministracionPage() {
  const todosDocs = await getDocumentos()
  const documentos = todosDocs.filter(d => d.section === "Administracion").map(d => ({ ...d, description: d.description || undefined, date: d.date || undefined, trimestre: d.trimestre || undefined, subsection: d.subseccion?.nombre, subsubsection: d.subsubseccion?.nombre }))
  const totalDocs = documentos.length

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
                  <FileText className="h-3.5 w-3.5" />
                  H. Ayuntamiento de Tecate, B.C.
                </span>
                <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                  Administración
                </h1>
                <p className="mt-4 text-primary-foreground/75 max-w-2xl leading-relaxed text-base lg:text-lg">
                  Consulta la información administrativa pública del municipio: estadísticas de
                  gestión, currículums, metas y objetivos, declaraciones patrimoniales, trámites,
                  servicios y licencias.
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
          <AdministracionSections documentos={documentos} />
        </div>

        {/* ── Footer CTA ────────────────────────────────────────────── */}
        <section className="bg-primary/5 border-t border-border py-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground">
              La información publicada en esta sección es de carácter público y se actualiza
              trimestralmente conforme a la{" "}
              <a
                href="https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Leyes/TOMO_I/20250916_LEYDETRANSPARENCIA.PDF"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
              >
                Ley de Transparencia y Acceso a la Información Pública del Estado de Baja California
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
