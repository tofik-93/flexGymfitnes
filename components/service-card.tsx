import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export function ServiceCard({ title, description, icon: Icon, className }: ServiceCardProps) {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-pretty">{description}</p>
      </CardContent>
    </Card>
  )
}
