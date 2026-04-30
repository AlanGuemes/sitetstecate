import { FileText, Download } from "lucide-react"

interface DocumentCardProps {
  title: string
  description?: string
  date?: string
  downloadUrl?: string
}

/**
 * Compact card variant for DocumentItem — optimised for grid layouts
 * with large collections of documents.
 */
export function DocumentCard({ title, description, date, downloadUrl }: DocumentCardProps) {
  const content = (
    <div className="group relative flex flex-col gap-2 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md hover:bg-primary/[0.02] transition-all duration-200 cursor-pointer h-full">
      {/* Top row: icon + download */}
      <div className="flex items-start justify-between gap-2">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <FileText className="h-4 w-4 text-primary" />
        </div>
        {downloadUrl && downloadUrl !== "#" && (
          <div className="w-7 h-7 rounded-lg bg-primary/5 border border-border flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <Download className="h-3.5 w-3.5 text-primary" />
          </div>
        )}
      </div>

      {/* Title */}
      <p className="text-xs font-semibold text-foreground leading-snug line-clamp-3 flex-1">
        {title}
      </p>

      {/* Footer */}
      {date && (
        <p className="text-[10px] text-muted-foreground mt-auto pt-1 border-t border-border/60">
          {date}
        </p>
      )}

      {/* Disabled overlay for no-URL docs */}
      {(!downloadUrl || downloadUrl === "#") && (
        <span className="absolute top-2 right-2 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground/60 bg-muted rounded px-1 py-0.5">
          Próximamente
        </span>
      )}
    </div>
  )

  if (downloadUrl && downloadUrl !== "#") {
    return (
      <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    )
  }

  return <div className="h-full">{content}</div>
}
