import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Target, Heart, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, from equipment to service.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Building lasting relationships and supporting each other's fitness journeys.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest, transparent, and ethical in all our interactions and business practices.",
  },
]

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Head Trainer & Founder",
    bio: "15+ years of experience in fitness training and nutrition. Certified in multiple disciplines.",
    image: "/professional-fitness-trainer-in-gym-setting.png",
  },
  {
    name: "Maria Santos",
    role: "Yoga & Wellness Director",
    bio: "Certified yoga instructor and wellness coach specializing in mind-body connection.",
    image: "/yoga-instructor-in-peaceful-studio-setting.png",
  },
  {
    name: "David Kim",
    role: "Strength & Conditioning Coach",
    bio: "Former professional athlete with expertise in strength training and sports performance.",
    image: "/strength-coach-with-athletic-background.png",
  },
]

const achievements = [
  {
    icon: Award,
    title: "Best Gym 2023",
    description: "Voted #1 fitness center in the city",
  },
  {
    icon: Users,
    title: "5,000+ Members",
    description: "Growing community of fitness enthusiasts",
  },
  {
    icon: Zap,
    title: "10 Years Strong",
    description: "A decade of transforming lives",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-balance">
                About <span className="text-primary">Flex Gym and Fitness center</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty">
                Founded in 2014, Flex Gym and Fitness center has been dedicated to helping individuals achieve their fitness goals
                through expert guidance, state-of-the-art facilities, and an inclusive community atmosphere.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Join Our Community</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/modern-gym-facility-overview-with-equipment.png"
                alt="Flex Gym and Fitness center facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
              To empower individuals to reach their full potential through fitness, wellness, and community support. We
              believe that everyone deserves access to quality fitness resources and expert guidance, regardless of
              their starting point or fitness level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ServiceCard key={index} title={value.title} description={value.description} icon={value.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-balance">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our certified trainers and wellness experts are here to guide you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm text-pretty">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-balance">
              Our <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Recognition and milestones that reflect our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <achievement.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-pretty">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">
              Our <span className="text-primary">Story</span>
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-pretty">
              Flex Gym and Fitness center began as a vision to create more than just a gym – we wanted to build a community where
              people could transform not just their bodies, but their entire approach to health and wellness. What
              started as a small neighborhood fitness center has grown into a premier destination for fitness
              enthusiasts of all levels.
            </p>
            <p className="text-pretty">
              Over the years, we've continuously invested in the latest equipment, expanded our class offerings, and
              most importantly, assembled a team of passionate professionals who genuinely care about your success. Our
              members aren't just customers – they're part of the Flex Gym and Fitness family.
            </p>
            <p className="text-pretty">
              Today, we're proud to serve over 5,000 members and continue growing while maintaining the personal touch
              and community spirit that makes Flex Gym and Fitness center special. Every day, we're inspired by the transformations we
              witness and the goals our members achieve.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6 text-balance">
            Ready to Join Our <span className="text-primary">Community</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Experience the Flex difference for yourself. Start your fitness journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent" asChild>
              <Link href="/memberships">View Memberships</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
