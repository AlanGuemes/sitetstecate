interface SectionHeaderProps {
  title: string
  description?: string
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="border-l-4 border-primary pl-4 mb-8">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      {description && (
        <p className="text-muted-foreground mt-2 leading-relaxed">{description}</p>
      )}
    </div>
  )
}
