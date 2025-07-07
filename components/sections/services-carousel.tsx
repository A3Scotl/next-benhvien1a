"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Brain, Bone, Eye, Baby, Stethoscope, ChevronLeft, ChevronRight } from "lucide-react"
import { SERVICES } from "@/lib/constants"

const iconMap = {
  Heart,
  Brain,
  Bone,
  Eye,
  Baby,
  Stethoscope,
}

const serviceDetails = [
  {
    ...SERVICES[0],
    description: "Chẩn đoán và điều trị các bệnh lý tim mạch với công nghệ hiện đại",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    ...SERVICES[1],
    description: "Chuyên khoa thần kinh với đội ngũ bác sĩ giàu kinh nghiệm",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    ...SERVICES[2],
    description: "Chỉnh hình và phục hồi chức năng xương khớp chuyên nghiệp",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    ...SERVICES[3],
    description: "Khám và điều trị các bệnh lý về mắt với trang thiết bị tiên tiến",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    ...SERVICES[4],
    description: "Chăm sóc sức khỏe toàn diện cho trẻ em từ sơ sinh đến 18 tuổi",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    ...SERVICES[5],
    description: "Khám tổng quát và điều trị các bệnh lý nội khoa",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(1)
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const maxIndex = Math.ceil(serviceDetails.length / itemsPerView) - 1

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * carouselRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
  }, [currentIndex, itemsPerView])

  const getVisibleServices = () => {
    const startIndex = currentIndex * itemsPerView
    return serviceDetails.slice(startIndex, startIndex + itemsPerView)
  }

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 xl:py-24">
      <div className="container mx-auto">
        <div
          className={`text-center mb-8 lg:mb-12 transform transition-all duration-1000  ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Dịch vụ chuyên khoa</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp đầy đủ các dịch vụ y tế chuyên khoa với đội ngũ bác sĩ giàu kinh nghiệm
          </p>
        </div>

        <div className="relative px-0">
          {/* Services Grid */}
          <div
            ref={carouselRef}
            className="card-grid flex  snap-x snap-mandatory scrollbar-hide"
          >
            {getVisibleServices().map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              return (
                <Card
                  key={service.id}
                  className={`group hover:shadow-xl transition-all duration-500 p-0 transform snap-center flex-shrink-0 w-full md:w-1/2 xl:w-1/3 px-2  ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        className="w-full  h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          variant="secondary"
                          className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-xs md:text-sm"
                        >
                          Xem chi tiết
                        </Button>
                      </div>
                    </div>
                    <div className="lg:p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <IconComponent className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 truncate">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-transparent hover:bg-blue-50"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-transparent hover:bg-blue-50"
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}