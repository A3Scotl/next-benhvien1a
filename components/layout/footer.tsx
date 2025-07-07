import Link from "next/link"
import { Phone, MapPin, Mail, Clock, Facebook, Youtube, Instagram } from "lucide-react"
import { NAVIGATION_ITEMS, SITE_CONFIG } from "@/lib/constants"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container md:px-30 mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* <img src="/images/logo/logo.webp" alt="Logo" className="h-12" /> */}
              <div>
                <h3 className="font-bold text-lg">Bệnh viện 1A</h3>
                <p className="text-sm text-gray-400">Chỉnh hình & Phục hồi chức năng</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bệnh viện 1A cung cấp dịch vụ y tế chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị
              hiện đại.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Thông tin liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-400">{SITE_CONFIG.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-400">{SITE_CONFIG.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                <div className="text-sm text-gray-400">
                  {SITE_CONFIG.working_time}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Liên kết nhanh</h4>
            <div className="space-y-2">
              {NAVIGATION_ITEMS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Dịch vụ chính</h4>
            <div className="space-y-2">
              {[
                "Chấn thương chỉnh hình",
                "Phục hồi chức năng",
                "Thần kinh",
                "Khám tổng quát",
                "Tim mạch",
                "Da liễu",
              ].map((service) => (
                <div key={service} className="text-sm text-gray-400">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Bệnh viện 1A. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
