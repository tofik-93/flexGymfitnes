import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MembershipTierCard } from "@/components/membership-tier-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, Clock, Dumbbell } from "lucide-react"
import Link from "next/link"
import type { MembershipTier } from "@/lib/types"

const membershipTiers: MembershipTier[] = [
  {
    id: "basic",
    name: "Basic",
    price: 29,
    duration: "month",
    features: [
      "Access to gym floor",
      "Basic equipment usage",
      "Locker room access",
      "Mobile app access",
      "1 guest pass per month",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 59,
    duration: "month",
    popular: true,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Personal training consultation",
      "Nutrition guidance",
      "Priority booking",
      "3 guest passes per month",
      "Access to premium equipment",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: 99,
    duration: "month",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Custom meal planning",
      "Recovery suite access",
      "VIP parking",
      "Unlimited guest passes",
      "24/7 gym access",
      "Exclusive member events",
    ],
  },
]

const benefits = [
  {
    icon: Users,
    title: "Expert Support",
    description: "Access to certified trainers and nutritionists",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Open early morning to late night, 7 days a week",
  },
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description: "State-of-the-art machines and free weights",
  },
  {
    icon: Star,
    title: "Member Perks",
    description: "Exclusive discounts and special events",
  },
]

export default function MembershipsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-balance">
            Choose Your <span className="text-primary">Membership</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            Find the perfect plan that fits your fitness goals and lifestyle. All memberships include access to our
            world-class facilities and supportive community.
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipTiers.map((tier) => (
              <MembershipTierCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-balance">
              All Members <span className="text-primary">Enjoy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Every membership tier includes these core benefits designed to support your fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm text-pretty">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-balance">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">Can I cancel my membership anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your membership with 30 days notice. No long-term contracts or hidden fees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">Do you offer family discounts?</h3>
                <p className="text-muted-foreground">
                  Families of 3 or more receive a 15% discount on all membership tiers. Contact us for details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">What's included in the free trial?</h3>
                <p className="text-muted-foreground">
                  Your 7-day free trial includes full gym access, one group class, and a complimentary fitness
                  assessment with our trainers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 text-pretty">
            Join thousands of members who have transformed their lives. Start with a free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link href="/contact">Start Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
