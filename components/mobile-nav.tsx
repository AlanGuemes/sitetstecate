"use client"

import { useEffect, useState } from "react"
import {
  Home, Search, ClipboardList, LayoutGrid,
  LayoutDashboard, Eye, Building2, Users, Wallet, Scale, X
} from "lucide-react"
import Link from "next/link"

interface NavItem {
  id: string
  observeId: string
  label: string
  icon: React.ElementType
  scrollTop?: boolean
}

const navItems: NavItem[] = [
  { id: "top",               observeId: "",              label: "Inicio",        icon: Home,         scrollTop: true },
  { id: "div-explorar",      observeId: "modulos",       label: "Explorar",      icon: Search        },
  { id: "div-cumplimiento",  observeId: "obligaciones",  label: "Cumplimiento",  icon: ClipboardList },
  { id: "div-acceso-rapido", observeId: "acceso-rapido", label: "Acceso Rápido", icon: LayoutGrid    },
]

const modules = [
  { label: "Transparencia",     href: "/transparencia",        icon: Eye       },
  { label: "Estructura",        href: "/estructura",            icon: Building2 },
  { label: "Administración",    href: "/administracion",        icon: Users     },
  { label: "Finanzas",          href: "/finanzas",              icon: Wallet    },
  { label: "Normatividad",      href: "/normatividad",          icon: Scale     },
  { label: "Recursos Humanos",  href: "/administracion#recursos", icon: LayoutDashboard },
]

export function MobileNav() {
  const [active, setActive]     = useState<string>("top")
  const [visible, setVisible]   = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    navItems.forEach(({ observeId }) => {
      if (!observeId) return
      const el = document.getElementById(observeId)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(observeId) },
        { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    const onScroll = () => { if (window.scrollY < 150) setActive("top") }
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observers.forEach((o) => o.disconnect())
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const handleNav = (item: NavItem) => {
    setMenuOpen(false)
    if (item.scrollTop) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setActive("top")
      return
    }
    const el = document.getElementById(item.id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div
      className={`lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      aria-label="Navegación móvil"
    >
      {/* Panel de módulos — aparece encima de la píldora */}
      <div
        className={`transition-all duration-300 origin-bottom ${
          menuOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-foreground/92 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-3 w-72">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[11px] font-bold text-background/50 uppercase tracking-widest">
              Módulos
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-background/40 hover:text-background transition-colors"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Grid de módulos */}
          <div className="grid grid-cols-3 gap-2">
            {modules.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="group flex flex-col items-center gap-1.5 bg-white/5 hover:bg-primary/80 rounded-xl px-2 py-3 transition-all duration-150 active:scale-95"
              >
                <Icon className="h-5 w-5 text-background/60 group-hover:text-white transition-colors" />
                <span className="text-[10px] font-semibold text-center text-background/60 group-hover:text-white leading-tight transition-colors">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Píldora principal */}
      <div className="flex items-center gap-1 bg-foreground/90 backdrop-blur-md rounded-full px-2 py-2 shadow-2xl border border-white/10">
        {/* Botones de navegación */}
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = item.scrollTop ? active === "top" : active === item.observeId

          return (
            <button
              key={item.id}
              onClick={() => handleNav(item)}
              aria-label={item.label}
              title={item.label}
              className={`group relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 active:scale-90
                ${isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/40"
                  : "text-background/60 hover:text-background hover:bg-white/10"
                }`}
            >
              <Icon className="h-5 w-5" />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold bg-foreground text-background px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
                {item.label}
              </span>
            </button>
          )
        })}

        {/* Separador */}
        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Botón módulos */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Módulos"
          title="Módulos"
          className={`group relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 active:scale-90
            ${menuOpen
              ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/40"
              : "text-background/60 hover:text-background hover:bg-white/10"
            }`}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <LayoutDashboard className="h-5 w-5" />}
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold bg-foreground text-background px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
            Módulos
          </span>
        </button>
      </div>
    </div>
  )
}
