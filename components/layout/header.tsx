"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, MapPin, Clock, Mail, Search } from "lucide-react"
import Modal from '@/components/create-appointment/modal'
import { NAVIGATION_ITEMS,SITE_CONFIG } from "@/lib/constants"

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
            // Handle search logic here
            console.log("Searching for:", searchQuery)
            setIsSearchOpen(false)
            setSearchQuery("")
        }
    }

    return (
        <>

            {/* Main header */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
                    }`}
            >
                {/* Top bar */}
                <div className="bg-blue-600 text-white py-2 hidden md:block">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center items-center text-sm">
                            <div className="flex items-center space-x-6 flex-wrap justify-center">
                                <div className="flex items-center space-x-2">
                                    <Phone className="w-4 h-4" />
                                    <span>{SITE_CONFIG.phone}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span className="">{SITE_CONFIG.address}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="">{SITE_CONFIG.working_time}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4" />
                                    <span>{SITE_CONFIG.email}</span>
                                </div>
                                <div className="p-2 px-4 ml-10 rounded-3xl bg-blue-950  flex items-center space-x-2">
                                    <Modal/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 lg:h-20 overflow-hidden">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="flex items-center justify-center">
                                <img src="/logo/logo.webp" alt="Logo" className="h-12 lg:h-16" />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-gray-800">Bệnh viện 1A</h1>
                                <p className="text-sm text-gray-600">Bệnh viện Chỉnh hình và Phục hồi chức năng TP.HCM</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden  lg:flex items-center space-x-8">
                            {NAVIGATION_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`font-medium transition-colors duration-200 relative group ${pathname === item.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                                        }`}
                                >
                                    {item.label}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    ></span>
                                </Link>
                            ))}
                        </nav>

                        {/* Search and CTA Button */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {/* Search */}
                            <div className="relative">
                                {isSearchOpen ? (
                                    <form onSubmit={handleSearch} className="flex items-center">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Tìm kiếm..."
                                            className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            autoFocus
                                            onBlur={() => {
                                                setTimeout(() => setIsSearchOpen(false), 200)
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setIsSearchOpen(false)}
                                            className="ml-2 p-2 text-gray-500 hover:text-gray-700"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </form>
                                ) : (
                                    <button
                                        onClick={() => setIsSearchOpen(true)}
                                        className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
                                    >
                                        <Search className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Mobile menu and search buttons */}
                        <div className="lg:hidden flex items-center space-x-2">
                            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 text-gray-700 hover:text-blue-600">
                                <Search className="w-5 h-5" />
                            </button>
                            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Search */}
                {isSearchOpen && (
                    <div className="lg:hidden bg-white border-t shadow-lg">
                        <div className="container mx-auto px-4 py-4">
                            <form onSubmit={handleSearch} className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Tìm kiếm..."
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    autoFocus
                                />
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                    <Search className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t shadow-lg">
                        <nav className="container mx-auto px-4 py-4">
                            {NAVIGATION_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block py-3 font-medium border-b border-gray-100 last:border-b-0 transition-colors ${pathname === item.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}

                        </nav>
                    </div>
                )}
            </header>
        </>
    )
}
