import Link from "next/link"
import { LucideIcon, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModuleCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  variant?: "primary" | "secondary" | "accent"
}

export function ModuleCard({ title, description, href, icon: Icon, variant = "primary" }: ModuleCardProps) {
  const iconBgColors = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  }
  
  const iconTextColors = {
    primary: "text-primary-foreground",
    secondary: "text-secondary-foreground",
    accent: "text-accent-foreground",
  }
  
  const titleColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-primary",
  }

  return (
    <div className="group relative bg-card rounded-lg border border-border p-6 transition-all hover:shadow-lg hover:border-primary/20">
      <div className={cn(
        "inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4",
        iconBgColors[variant]
      )}>
        <Icon className={cn("h-6 w-6", iconTextColors[variant])} />
      </div>
      
      <h3 className={cn("text-lg font-semibold mb-2", titleColors[variant])}>
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      
      <Link 
        href={href}
        className={cn(
          "inline-flex items-center gap-1 text-sm font-medium transition-colors",
          titleColors[variant],
          "hover:underline"
        )}
      >
        Acceder
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}
