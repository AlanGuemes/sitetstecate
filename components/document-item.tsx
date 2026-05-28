import { FileText, Download, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface DocumentItemProps {
  title: string
  description?: string
  date?: string
  downloadUrl?: string
  externalUrl?: string
  variant?: "default" | "bordered" | "compact"
}

export function DocumentItem({
  title,
  description,
  date,
  downloadUrl,
  externalUrl,
  variant = "default"
}: DocumentItemProps) {
  const isCompact = variant === "compact"

  return (
    <div className={cn(
      "flex items-center gap-4 transition-colors hover:bg-muted/80",
      isCompact ? "p-2.5 px-4" : "p-4 rounded-lg",
      variant === "bordered" && "border border-border"
    )}>
      <div className={cn(
        "flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center",
        isCompact ? "w-8 h-8" : "w-10 h-10"
      )}>
        <FileText className={cn("text-primary", isCompact ? "h-4 w-4" : "h-5 w-5")} />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className={cn(
          "font-medium text-foreground truncate",
          isCompact ? "text-xs" : "text-sm"
        )}>{title}</h4>
        {description && (
          <p className={cn(
            "text-muted-foreground",
            isCompact ? "text-[11px] mt-0.5 line-clamp-1" : "text-sm mt-1 line-clamp-2"
          )}>{description}</p>
        )}
        {date && !isCompact && (
          <p className="text-xs text-muted-foreground mt-1">{date}</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        {date && isCompact && (
          <span className="text-[10px] font-medium text-muted-foreground/80 bg-muted px-1.5 py-0.5 rounded border border-border/40 select-none hidden sm:inline-block">
            {date}
          </span>
        )}
        {downloadUrl && (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/5 rounded-md"
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
            className="p-1.5 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/5 rounded-md"
            title="Ver documento"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  )
}
