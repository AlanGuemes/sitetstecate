import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface TransparencyCardProps {
  title: string
  description: string
  href?: string
  items?: { label: string; href: string }[]
}

export function TransparencyCard({ title, description, href, items }: TransparencyCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-bold text-primary uppercase tracking-wide mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      
      {href && (
        <Link 
          href={href}
          className="flex items-center justify-between px-6 py-3 bg-muted hover:bg-accent transition-colors border-t border-border"
        >
          <span className="text-sm font-medium text-foreground">Ver más</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      )}
      
      {items && items.length > 0 && (
        <div className="border-t border-border">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center justify-between px-6 py-3 hover:bg-muted transition-colors border-b border-border last:border-b-0"
            >
              <span className="text-sm text-foreground">{item.label}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
