import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Dumbbell, Heart, Zap, Clock, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Testimonial } from "@/lib/types"

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Marketing Executive",
    content:
      "Flex Gym and Fitness center transformed my life completely. The trainers are incredible and the community is so supportive. I've never felt stronger!",
    rating: 5,
  },
  {
    id: "2",
    name: "Mike Chen",
    role: "Driver",
    content:
      "The equipment is top-notch and the classes are challenging yet fun. I've been a member for 2 years and still love coming here every day.",
    rating: 5,
  },
  {
    id: "3",
    name: "Yesuf Yasin",
    role: "Teacher",
    content:
      "As a busy mom, I appreciate the flexible schedule and childcare options. Flex Gym and Fitness center makes it easy to prioritize my health.",
    rating: 5,
  },
]

const popularClasses = [
  {
    id: "1",
    name: "HIIT Blast",
    description: "High-intensity interval training for maximum calorie burn",
    image: "/hiit-workout-class-with-people-exercising.png",
    duration: "45 min",
    difficulty: "Intermediate",
  },
  {
    id: "2",
    name: "Yoga Flow",
    description: "Mindful movement and flexibility training",
    image: "/peaceful-yoga-class-with-natural-lighting.png",
    duration: "60 min",
    difficulty: "All Levels",
  },
  {
    id: "3",
    name: "Strength Training",
    description: "Build muscle and increase power with expert guidance",
    image: "/strength-training-with-weights-and-equipment.png",
    duration: "50 min",
    difficulty: "Beginner",
  },
  {
    id: "4",
    name: "Spin Cycle",
    description: "High-energy cycling workouts with motivating music",
    image: "/spin-class-with-cycling-bikes-and-energetic-atmosp.png",
    duration: "45 min",
    difficulty: "Intermediate",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
              Why Choose <span className="text-primary">Flex Gym and Fitness center</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experience the difference with our world-class facilities, expert guidance, and supportive community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Expert Trainers"
              description="Certified professionals dedicated to helping you achieve your fitness goals with personalized guidance and motivation."
              icon={Users}
            />
            <ServiceCard
              title="Top-Tier Equipment"
              description="State-of-the-art machines and free weights maintained to the highest standards for optimal performance and safety."
              icon={Dumbbell}
            />
            <ServiceCard
              title="Community Spirit"
              description="Join a supportive network of like-minded individuals who celebrate each other's victories and progress."
              icon={Heart}
            />
          </div>
        </div>
      </section>

      {/* Popular Classes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
              Popular <span className="text-primary">Classes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover our most loved fitness classes designed to challenge, inspire, and transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularClasses.map((classItem) => (
              <Card
                key={classItem.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={classItem.image || "/placeholder.svg"}
                    alt={classItem.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                    {classItem.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-heading font-semibold text-lg mb-2">{classItem.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3 text-pretty">{classItem.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-medium">{classItem.difficulty}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/schedule">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link href="/schedule">View Full Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8" />
              </div>
              <div className="font-heading font-bold text-3xl mb-1">5,000+</div>
              <div className="text-primary-foreground/80">Happy Members</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Zap className="h-8 w-8" />
              </div>
              <div className="font-heading font-bold text-3xl mb-1">50+</div>
              <div className="text-primary-foreground/80">Weekly Classes</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Clock className="h-8 w-8" />
              </div>
              <div className="font-heading font-bold text-3xl mb-1">24/7</div>
              <div className="text-primary-foreground/80">Access Available</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Trophy className="h-8 w-8" />
              </div>
              <div className="font-heading font-bold text-3xl mb-1">10+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
              What Our <span className="text-primary">Members</span> Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real stories from real people who have transformed their lives at Flex Gym and Fitness center.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 text-balance">
            Ready to <span className="text-primary">Transform</span> Your Life?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Join thousands of members who have already started their fitness journey with us. Your strongest self is
            waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <Link href="/contact">Start Your Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent" asChild>
              <Link href="/memberships">Explore Memberships</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
