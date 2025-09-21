export interface MembershipTier {
  id: string
  name: string
  price: number
  duration: string
  features: string[]
  popular?: boolean
}

export interface ClassSchedule {
  id: string
  name: string
  instructor: string
  time: string
  duration: number
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  capacity: number
  enrolled: number
}

export interface Testimonial {
  id: string
  name: string
  role?: string
  content: string
  rating: number
  image?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image?: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
  subject: string
}
