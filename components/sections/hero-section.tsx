"use client"

import { Button } from "@/components/ui/button"
import { Phone, Heart } from "lucide-react"
import Image from "next/image"
import Modal from "../create-appointment/modal"

export default function HeroSection() {
  return (
    <section className="relative w-[95vw] bg-gradient-to-br from-blue-50 via-white to-blue-50  sm:py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Chỉnh hình và Phục hồi chức năng TP.HCM
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Bệnh viện <span className="text-blue-600">1A</span>
                <br />
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-600 block mt-2">
                  Chỉnh hình & Phục hồi chức năng
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                Với hơn 20 năm kinh nghiệm, chúng tôi cung cấp dịch vụ y tế chất lượng cao với đội ngũ bác sĩ giàu kinh
                nghiệm và trang thiết bị hiện đại.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg h-auto w-full sm:w-auto">
                <Modal />
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 text-base sm:text-lg h-auto bg-transparent w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">Gọi ngay: </span>
                <span className="sm:hidden">Gọi: </span>
                (028) 3971 2960
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">20+</div>
                <div className="text-xs sm:text-sm text-gray-600">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Bác sĩ chuyên khoa</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">10K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Bệnh nhân tin tưởng</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              <Image
                src="/logo/thumb.webp"
                alt="Bệnh viện 1A - Chăm sóc y tế chuyên nghiệp"
                width={500}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>

           

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent rounded-2xl transform rotate-3 -z-10 hidden sm:block"></div>
          </div>
        </div>

    
      </div>
    </section>
  )
}
