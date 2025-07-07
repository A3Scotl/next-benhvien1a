"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/sections/hero-section"
import LoadingScreen from "@/components/common/loading-screen"
import DoctorsSection from "@/components/sections/doctors-section"
import ServicesCarousel from "@/components/sections/services-carousel"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen ">
      <HeroSection />
      <div className="px-4 md:px-30 sm:px-20">
        <DoctorsSection />
        <ServicesCarousel />
      </div>
    </div>
  )
}
