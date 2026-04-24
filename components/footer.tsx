import Link from "next/link"
import { Mail, Phone, MapPin, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        {/* Logo centrado en la parte superior */}
        <div className="flex justify-center mb-10">
          <Link href="/">
            <img
              src="/res/tecate_al100_Logo-02.png"
              alt="Gobierno de Tecate"
              className="h-38 w-auto object-contain opacity-90"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Protección de Datos Personales</h3>
            <Link
              href="/aviso-privacidad"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Aviso de Privacidad
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios de Emergencia</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Protección Civil
                </Link>
              </li>
              <li>
                <Link href="" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Bomberos
                </Link>
              </li>
              <li>
                <Link href="" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Secretaría de Seguridad y Protección Ciudadana
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Calzada de los Insurgentes S/N, Centro, Tecate, B.C.</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">transparencia@tecate.gob.mx</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">(665) 655-3500</span>
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
