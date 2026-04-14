import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Portal de Transparencia</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Acceso a información pública y obligaciones de transparencia conforme a la Ley de Transparencia y Acceso a la Información Pública.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/transparencia" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Obligaciones de Transparencia
                </Link>
              </li>
              <li>
                <Link href="/normatividad" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Marco Normativo
                </Link>
              </li>
              <li>
                <Link href="/estructura" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Estructura Orgánica
                </Link>
              </li>
              <li>
                <Link href="/finanzas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Información Financiera
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">Palacio Municipal, Centro</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">(000) 000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">transparencia@municipio.gob.mx</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Portal de Transparencia Municipal. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
