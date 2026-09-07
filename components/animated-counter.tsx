"use client"

import { useEffect, useState } from "react"

type AnimatedCounterProps = {
  value: number
}

export function AnimatedCounter({ value }: AnimatedCounterProps) {
  const target = Math.floor(value / 10) * 10
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduceMotion || target === 0) {
      setDisplayValue(target)
      return
    }

    let animationFrame = 0
    const startTime = performance.now()
    const duration = 900

    const updateCounter = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.floor(target * easedProgress))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter)
      }
    }

    animationFrame = requestAnimationFrame(updateCounter)

    return () => cancelAnimationFrame(animationFrame)
  }, [target])

  return (
    <span className="inline-flex items-center justify-center gap-0.5" aria-label={`${value} elementos`}>
      <span className="inline-flex min-w-[4.5rem] justify-center overflow-hidden rounded-md border border-secondary/30 bg-secondary/10 px-2 py-1 shadow-inner">
        <span key={displayValue} className="animate-in slide-in-from-bottom-1 fade-in duration-100">
          {displayValue}
        </span>
      </span>
      {value > target && <span aria-hidden="true">+</span>}
    </span>
  )
}
