"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, MapPin, Mail, Search, Clock } from 'lucide-react'
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
  }, [pathname])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      // Focus on search input after animation
      setTimeout(() => {
        const searchInput = document.getElementById('search-input')
        if (searchInput) {
          searchInput.focus()
        }
      }, 300)
    }
  }

  return (
    <>
      {/* Search Overlay */}
      <div className={`search-overlay ${isSearchOpen ? 'active' : ''}`} style={{ top: isScrolled ? '0' : '48px' }}>
        <div className="search-container">
          <form onSubmit={handleSearch} className="relative">
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm dịch vụ, bác sĩ, thông tin y tế..."
              className="search-input"
            />
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="search-close"
            >
              <X className="w-5 h-5" />
            </button>
          </form>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-600">Tìm kiếm phổ biến:</span>
            {['Chỉnh hình', 'Phục hồi chức năng', 'Thần kinh', 'Tim mạch'].map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        {/* Top Contact Bar - Hidden on mobile */}
        <div className="top-bar bg-blue-600 text-white py-3">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              {/* Contact Information */}
              <div className="flex items-center space-x-2 text-xs">
                {/* Phone - Always visible */}
                <div className="flex items-center space-x-1">
                  <Phone className="w-3 h-3" />
                  <span className="font-medium">{SITE_CONFIG.phone}</span>
                </div>
                
                {/* Address - Hidden on small screens */}
                <div className="hidden lg:flex items-center space-x-1">
                  <span>|</span>
                  <MapPin className="w-3 h-3" />
                  <span className="truncate max-w-xs">{SITE_CONFIG.address}</span>
                </div>
                
                {/* Email - Hidden on medium screens */}
                <div className="hidden xl:flex items-center space-x-1">
                  <span>|</span>
                  <Mail className="w-3 h-3" />
                  <span>{SITE_CONFIG.email}</span>
                </div>
                
                {/* Working hours - Hidden on small screens */}
                <div className="hidden lg:flex items-center space-x-1">
                  <span>|</span>
                  <Clock className="w-3 h-3" />
                  <span>{SITE_CONFIG.working_time}</span>
                </div>
              </div>

              {/* Appointment Button */}
              <div className="bg-blue-800 hover:bg-blue-900 rounded-full px-3 py-1 transition-colors duration-200">
                <Modal />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
              <img 
                src="/images/logo/logo.webp" 
                alt="Bệnh viện 1A Logo" 
                className="header-logo w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav hidden items-center space-x-6 xl:space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-semibold responsive-text-sm transition-all duration-200 relative group py-2 ${
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

            {/* Desktop Search Button */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={toggleSearch}
                className="p-3 w-36 flex justify-end text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                aria-label="Tìm kiếm"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="mobile-controls flex items-center space-x-2">
              <button
                onClick={toggleSearch}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu bg-white border-t border-gray-200 shadow-lg">
            <nav className="container mx-auto py-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 font-medium border-b border-gray-100 last:border-b-0 transition-colors ${
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  } rounded-lg mx-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Appointment Button */}
              <div className="mt-4 pt-4 border-t border-gray-200 mx-2">
                <div className="bg-blue-600 hover:bg-blue-700 rounded-lg p-3 text-center transition-colors">
                  <Modal />
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
