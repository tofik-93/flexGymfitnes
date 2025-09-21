import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

const schedule = [
  {
    day: "Monday",
    classes: [
      {
        time: "6:00 AM",
        name: "Morning HIIT",
        instructor: "Alex Thompson",
        duration: "45 min",
        capacity: "20 spots",
        difficulty: "High",
        location: "Studio A",
      },
      {
        time: "9:00 AM",
        name: "Yoga Flow",
        instructor: "Maria Santos",
        duration: "60 min",
        capacity: "15 spots",
        difficulty: "Beginner",
        location: "Studio B",
      },
      {
        time: "12:00 PM",
        name: "Strength Training",
        instructor: "David Kim",
        duration: "50 min",
        capacity: "12 spots",
        difficulty: "Intermediate",
        location: "Weight Room",
      },
      {
        time: "6:00 PM",
        name: "Spin Class",
        instructor: "Sarah Johnson",
        duration: "45 min",
        capacity: "25 spots",
        difficulty: "High",
        location: "Spin Studio",
      },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      {
        time: "7:00 AM",
        name: "Pilates",
        instructor: "Maria Santos",
        duration: "50 min",
        capacity: "18 spots",
        difficulty: "Beginner",
        location: "Studio B",
      },
      {
        time: "10:00 AM",
        name: "CrossFit",
        instructor: "Alex Thompson",
        duration: "60 min",
        capacity: "15 spots",
        difficulty: "High",
        location: "CrossFit Box",
      },
      {
        time: "5:30 PM",
        name: "Zumba",
        instructor: "Lisa Rodriguez",
        duration: "45 min",
        capacity: "30 spots",
        difficulty: "Beginner",
        location: "Studio A",
      },
      {
        time: "7:00 PM",
        name: "Boxing",
        instructor: "Mike Chen",
        duration: "50 min",
        capacity: "16 spots",
        difficulty: "Intermediate",
        location: "Boxing Ring",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        time: "6:00 AM",
        name: "Morning HIIT",
        instructor: "Alex Thompson",
        duration: "45 min",
        capacity: "20 spots",
        difficulty: "High",
        location: "Studio A",
      },
      {
        time: "11:00 AM",
        name: "Gentle Yoga",
        instructor: "Maria Santos",
        duration: "60 min",
        capacity: "20 spots",
        difficulty: "Beginner",
        location: "Studio B",
      },
      {
        time: "1:00 PM",
        name: "Functional Training",
        instructor: "David Kim",
        duration: "45 min",
        capacity: "14 spots",
        difficulty: "Intermediate",
        location: "Functional Area",
      },
      {
        time: "6:30 PM",
        name: "Hot Yoga",
        instructor: "Emma Wilson",
        duration: "75 min",
        capacity: "12 spots",
        difficulty: "Intermediate",
        location: "Hot Studio",
      },
    ],
  },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800 hover:bg-green-100"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
    case "High":
      return "bg-red-100 text-red-800 hover:bg-red-100"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100"
  }
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-balance">
            Class <span className="text-primary">Schedule</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            Join our expert-led fitness classes designed for all skill levels. From high-intensity workouts to relaxing
            yoga sessions, find the perfect class for your fitness journey.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Book a Class</Link>
          </Button>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {schedule.map((day) => (
              <div key={day.day}>
                <h2 className="font-heading font-bold text-2xl mb-6 text-center lg:text-left">{day.day}</h2>
                <div className="space-y-4">
                  {day.classes.map((classItem, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{classItem.name}</CardTitle>
                          <Badge className={getDifficultyColor(classItem.difficulty)}>{classItem.difficulty}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">with {classItem.instructor}</p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>
                              {classItem.time} • {classItem.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>{classItem.capacity}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{classItem.location}</span>
                          </div>
                        </div>
                        <Button size="sm" className="w-full mt-4" asChild>
                          <Link href="/contact">Reserve Spot</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Types Info */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-balance">
              Class <span className="text-primary">Information</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Everything you need to know about our fitness classes and booking policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-center">Booking Policy</h3>
                <p className="text-muted-foreground text-sm text-center text-pretty">
                  Reserve your spot up to 7 days in advance. Cancel at least 2 hours before class to avoid charges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-center">Class Sizes</h3>
                <p className="text-muted-foreground text-sm text-center text-pretty">
                  Small class sizes ensure personalized attention and proper form guidance from our certified
                  instructors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-center">Schedule Updates</h3>
                <p className="text-muted-foreground text-sm text-center text-pretty">
                  Check our mobile app for real-time schedule updates, class changes, and special events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
