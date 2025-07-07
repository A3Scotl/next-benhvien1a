"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const doctors = [
  {
    id: 1,
    name: "BS.CKI Nguyễn Văn A",
    specialty: "Chỉnh hình",
    experience: "15 năm kinh nghiệm",
    education: "Đại học Y Hà Nội",
    image: "/images/docters/docter-1.jpg",
    specialties: ["Chấn thương", "Phẫu thuật xương", "Nội soi khớp"],
  },
  {
    id: 2,
    name: "BS.CKI Trần Thị B",
    specialty: "Phục hồi chức năng",
    experience: "12 năm kinh nghiệm",
    education: "Đại học Y TP.HCM",
    image: "/images/docters/docter-2.jpg",
    specialties: ["Vật lý trị liệu", "Phục hồi vận động", "Điều trị đau"],
  },
  {
    id: 3,
    name: "BS.CKI Lê Văn C",
    specialty: "Thần kinh",
    experience: "18 năm kinh nghiệm",
    education: "Đại học Y Huế",
    image: "/images/docters/docter-3.jpg",
    specialties: ["Đột quỵ", "Parkinson", "Động kinh"],
  },
]

export default function DoctorsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gray">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Đội ngũ bác sĩ</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Đội ngũ bác sĩ giàu kinh nghiệm, được đào tạo chuyên sâu tại các trường đại học y khoa hàng đầu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card
              key={doctor.id}
              className={`group hover:shadow-xl transition-all duration-500  transform py-0 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-3">{doctor.experience}</p>
                  <p className="text-gray-600 text-sm mb-4">{doctor.education}</p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
