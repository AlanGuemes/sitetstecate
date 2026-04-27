"use client"

import { useEffect, useState } from "react"

export interface ScrollSection {
  navId: string
  observeId: string
  label: string
}

const sections: ScrollSection[] = [
  { navId: "div-explorar",      observeId: "modulos",       label: "Explorar"      },
  { navId: "div-cumplimiento",  observeId: "obligaciones",  label: "Cumplimiento"  },
  { navId: "div-acceso-rapido", observeId: "acceso-rapido", label: "Acceso Rápido" },
]

export function ScrollIndex() {
  const [active, setActive]           = useState<string>("")
  const [visible, setVisible]         = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)

  // 1. Mostrar/ocultar según scroll y footer
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // 2. Detectar cuando el footer entra/sale de vista
  useEffect(() => {
    const footer = document.querySelector("footer")
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  // 3. Detectar sección activa con IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ observeId }) => {
      const el = document.getElementById(observeId)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(observeId)
        },
        { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (navId: string) => {
    const el = document.getElementById(navId)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  // Ocultar cuando footer visible o antes de scrollear suficiente
  const show = visible && !footerVisible

  return (
    // hidden en móvil, visible solo en pantallas lg+
    <div
      className={`hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-0 transition-all duration-500 ${
        show
          ? "opacity-40 hover:opacity-80 translate-x-0"
          : "opacity-0 -translate-x-4 pointer-events-none"
      }`}
      aria-label="Índice de secciones"
    >
      {sections.map((section, i) => {
        const isActive = active === section.observeId
        const isLast   = i === sections.length - 1

        return (
          <div key={section.navId} className="flex flex-col items-center">
            <div className="group relative flex items-center">
              {/* Etiqueta */}
              <span
                className={`absolute left-6 whitespace-nowrap text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm border transition-all duration-200 pointer-events-none
                  ${isActive
                    ? "text-primary bg-background border-primary/20 opacity-100 translate-x-0"
                    : "text-muted-foreground bg-background border-border opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1"
                  }`}
              >
                {section.label}
              </span>

              {/* Punto */}
              <button
                onClick={() => scrollTo(section.navId)}
                aria-label={`Ir a ${section.label}`}
                className={`relative flex items-center justify-center transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${isActive
                    ? "w-3 h-3 bg-primary shadow-md shadow-primary/30"
                    : "w-2 h-2 bg-border hover:bg-primary/40 hover:w-2.5 hover:h-2.5"
                  }`}
              />
            </div>

            {/* Línea conectora */}
            {!isLast && (
              <div
                className={`w-px h-8 transition-all duration-500 ${
                  isActive ? "bg-primary/50" : "bg-border"
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Generic variant ────────────────────────────────────────────────────────

interface ScrollIndexGenericProps {
  sections: ScrollSection[]
}

export function ScrollIndexGeneric({ sections }: ScrollIndexGenericProps) {
  const [active, setActive]               = useState<string>("")
  const [visible, setVisible]             = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const footer = document.querySelector("footer")
    if (!footer) return
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach(({ observeId }) => {
      const el = document.getElementById(observeId)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(observeId) },
        { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [sections])

  const scrollTo = (navId: string) => {
    const el = document.getElementById(navId)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const show = visible && !footerVisible

  return (
    <div
      className={`hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-0 transition-all duration-500 ${
        show
          ? "opacity-40 hover:opacity-80 translate-x-0"
          : "opacity-0 -translate-x-4 pointer-events-none"
      }`}
      aria-label="Índice de secciones"
    >
      {sections.map((section, i) => {
        const isActive = active === section.observeId
        const isLast   = i === sections.length - 1
        return (
          <div key={section.navId} className="flex flex-col items-center">
            <div className="group relative flex items-center">
              <span
                className={`absolute left-6 whitespace-nowrap text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm border transition-all duration-200 pointer-events-none
                  ${isActive
                    ? "text-primary bg-background border-primary/20 opacity-100 translate-x-0"
                    : "text-muted-foreground bg-background border-border opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1"
                  }`}
              >
                {section.label}
              </span>
              <button
                onClick={() => scrollTo(section.navId)}
                aria-label={`Ir a ${section.label}`}
                className={`relative flex items-center justify-center transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${isActive
                    ? "w-3 h-3 bg-primary shadow-md shadow-primary/30"
                    : "w-2 h-2 bg-border hover:bg-primary/40 hover:w-2.5 hover:h-2.5"
                  }`}
              />
            </div>
            {!isLast && (
              <div
                className={`w-px h-8 transition-all duration-500 ${
                  isActive ? "bg-primary/50" : "bg-border"
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
