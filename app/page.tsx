import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ModuleCard } from "@/components/module-card"
import { TransparencyCard } from "@/components/transparency-card"
import { 
  Building2, 
  FileText, 
  Users, 
  Wallet, 
  Scale, 
  LayoutGrid,
  Search,
  ArrowRight,
  Shield,
  Eye
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen_2026-04-14_100248418-yK4fxwl9IAUS8Mm18vj4GvfM8gFr9h.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          
          <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl text-balance">
              Portal de<br />Transparencia<br />Municipal
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
              Obligaciones de transparencia conforme a la Ley de Transparencia y Acceso a la Información Pública.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="/transparencia"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                <Eye className="h-5 w-5" />
                Ver Obligaciones
              </Link>
              <Link 
                href="#modulos"
                className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
              >
                Explorar Módulos
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Módulos principales */}
        <section id="modulos" className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Módulos de Información</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Accede a la información pública organizada por áreas y temáticas para una consulta más eficiente.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ModuleCard
                title="Transparencia"
                description="Consulta las obligaciones de transparencia, avisos de privacidad y tabla de aplicabilidad."
                href="/transparencia"
                icon={Eye}
                variant="primary"
              />
              <ModuleCard
                title="Estructura Orgánica"
                description="Conoce la estructura organizacional, organigramas y directorio de servidores públicos."
                href="/estructura"
                icon={Building2}
                variant="secondary"
              />
              <ModuleCard
                title="Administración"
                description="Información sobre trámites, servicios, programas sociales y atención ciudadana."
                href="/administracion"
                icon={Users}
                variant="accent"
              />
              <ModuleCard
                title="Finanzas"
                description="Consulta el presupuesto, estados financieros, cuenta pública y gastos operativos."
                href="/finanzas"
                icon={Wallet}
                variant="primary"
              />
              <ModuleCard
                title="Normatividad"
                description="Accede a leyes, reglamentos, manuales administrativos y marco jurídico aplicable."
                href="/normatividad"
                icon={Scale}
                variant="secondary"
              />
              <ModuleCard
                title="Recursos Humanos"
                description="Información sobre nóminas, plazas, tabuladores y plantilla de personal."
                href="/administracion#recursos"
                icon={LayoutGrid}
                variant="accent"
              />
            </div>
          </div>
        </section>

        {/* Sección de Obligaciones */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Obligaciones de Transparencia</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Información conforme a los artículos de la Ley de Transparencia.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TransparencyCard
                title="Avisos de Privacidad"
                description="Consulta los Avisos de Privacidad de protección de datos personales."
                href="/transparencia#privacidad"
              />
              <TransparencyCard
                title="Tabla de Aplicabilidad"
                description="Conoce la tabla de aplicabilidad dictaminada por el ITAIPBC."
                href="/transparencia#aplicabilidad"
              />
              <TransparencyCard
                title="Información Reservada"
                description="Consulta el índice de información reservada por parte del sujeto obligado."
                href="/transparencia#reservada"
              />
              <TransparencyCard
                title="Derechos ARCO"
                description="Mecanismo para ejercer tus derechos de Acceso, Rectificación, Cancelación u Oposición."
                href="/transparencia#arco"
              />
              <TransparencyCard
                title="Datos de Contacto ITAIP BC"
                description="Acceso a la página de inicio del Órgano Garante del Estado de Baja California."
                href="/transparencia#itaip"
              />
              <TransparencyCard
                title="Plataforma Nacional"
                description="Consulta de información publicada en la Plataforma Nacional de Transparencia."
                href="/transparencia#pnt"
              />
            </div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-secondary">48</p>
                <p className="mt-2 text-sm text-primary-foreground/80">Artículos Publicados</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-secondary">120+</p>
                <p className="mt-2 text-sm text-primary-foreground/80">Documentos Disponibles</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-secondary">6</p>
                <p className="mt-2 text-sm text-primary-foreground/80">Módulos de Información</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-secondary">2025</p>
                <p className="mt-2 text-sm text-primary-foreground/80">Última Actualización</p>
              </div>
            </div>
          </div>
        </section>

        {/* Acceso Rápido */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    ¿Buscas información específica?
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Utiliza nuestro buscador o navega por los diferentes módulos para encontrar la información que necesitas de manera rápida y sencilla.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link 
                      href="/transparencia"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      <Search className="h-5 w-5" />
                      Buscar Documentos
                    </Link>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <Shield className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-semibold text-foreground">Protección de Datos</h3>
                    <p className="text-sm text-muted-foreground mt-1">Tus datos están protegidos</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <FileText className="h-8 w-8 text-secondary mb-2" />
                    <h3 className="font-semibold text-foreground">Documentos Oficiales</h3>
                    <p className="text-sm text-muted-foreground mt-1">Información verificada</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <Eye className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-semibold text-foreground">Acceso Público</h3>
                    <p className="text-sm text-muted-foreground mt-1">Información disponible 24/7</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <Users className="h-8 w-8 text-secondary mb-2" />
                    <h3 className="font-semibold text-foreground">Atención Ciudadana</h3>
                    <p className="text-sm text-muted-foreground mt-1">Soporte disponible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
