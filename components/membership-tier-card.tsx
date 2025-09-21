import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import type { MembershipTier } from "@/lib/types"

interface MembershipTierCardProps {
  tier: MembershipTier
}

export function MembershipTierCard({ tier }: MembershipTierCardProps) {
  return (
    <Card className={`relative ${tier.popular ? "border-primary shadow-lg scale-105" : ""}`}>
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="font-heading text-2xl mb-2">{tier.name}</CardTitle>
        <div className="mb-2">
          <span className="text-4xl font-bold text-primary">${tier.price}</span>
          <span className="text-muted-foreground">/{tier.duration}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Button className="w-full mt-6" variant={tier.popular ? "default" : "outline"}>
          Choose {tier.name}
        </Button>
      </CardContent>
    </Card>
  )
}
