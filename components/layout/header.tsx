"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, MapPin, Mail, Search, Clock } from "lucide-react"
import Modal from "@/components/create-appointment/modal"
import { NAVIGATION_ITEMS, SITE_CONFIG } from "@/lib/constants"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsSearchOpen(false)
  }, [pathname])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300  ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top Contact Bar */}
      <div className="bg-blue-600 md:px-20 text-white py-3 hidden md:block">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Contact Information */}
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">{SITE_CONFIG.phone}</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="hidden xl:flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{SITE_CONFIG.email}</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{SITE_CONFIG.working_time}</span>
              </div>
            </div>

            {/* Appointment Button */}
            <div className="flex items-center">
              <div className="bg-blue-800 hover:bg-blue-900 rounded-full px-6 py-2 transition-colors duration-200">
                <Modal />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container sm:px-20 mx-auto px-4 lg:px-20">
        <div className="flex items-center justify-between h-20 lg:h-24 ">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0 w-80">
            <img src="/images/logo/logo.webp" alt="Bệnh viện 1A Logo" className="h-16 lg:h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-semibold text-base transition-all duration-200 relative group py-2 ${
                  pathname === item.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm dịch vụ, bác sĩ..."
                    className="w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                    onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-3 w-80 flex justify-end text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  aria-label="Tìm kiếm"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Tìm kiếm"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <form onSubmit={handleSearch} className="flex items-center space-x-2 ">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm dịch vụ, bác sĩ..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
              <button
                type="submit"
                className="px-6 py-3  bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-4 font-medium border-b border-gray-100 last:border-b-0 transition-colors ${
                  pathname === item.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                } rounded-lg px-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Appointment Button */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="bg-blue-600 hover:bg-blue-700 rounded-lg p-3 text-center transition-colors">
                <Modal />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
