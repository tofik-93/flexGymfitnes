import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/modern-gym-interior-with-equipment-and-natural-lig.png" alt="Modern gym interior" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 text-balance">
          Redefine Your <span className="text-primary">Potential</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto text-pretty">
          Transform your body and mind at Flex Gym and Fitness center. Join our community of champions and unlock your strongest self.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-3" asChild>
            <Link href="/contact">Book a Free Tour</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20"
            asChild
          >
            <Link href="/memberships">View Memberships</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
