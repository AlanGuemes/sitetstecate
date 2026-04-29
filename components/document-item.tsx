import { FileText, Download, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface DocumentItemProps {
  title: string
  description?: string
  date?: string
  downloadUrl?: string
  externalUrl?: string
  variant?: "default" | "bordered"
}

export function DocumentItem({
  title,
  description,
  date,
  downloadUrl,
  externalUrl,
  variant = "default"
}: DocumentItemProps) {
  return (
    <div className={cn(
      "flex items-start gap-4 p-4 rounded-lg transition-colors hover:bg-muted",
      variant === "bordered" && "border border-border"
    )}>
      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
        <FileText className="h-5 w-5 text-primary" />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-foreground truncate">{title}</h4>
        {description && (
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
        )}
        {date && (
          <p className="text-xs text-muted-foreground mt-1">{date}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        {downloadUrl && (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            title="Descargar"
          >
            <Download className="h-4 w-4" />
          </a>
        )}
        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            title="Ver documento"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  )
}
