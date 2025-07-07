"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MapPin, Clock, Mail } from "lucide-react"
import Modal from "../create-appointment/modal"

interface NavItem {
    href: string
    label: string
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems: NavItem[] = [
        { href: "/", label: "Trang chủ" },
        { href: "/about", label: "Giới thiệu" },
        { href: "/services", label: "Dịch vụ" },
        { href: "/doctors", label: "Đội ngũ bác sĩ" },
        { href: "/contact", label: "Liên hệ" },
    ]

    return (
        <>
            {/* Top bar */}
            <div className="bg-blue-600 text-white py-2 hidden md:block">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center text-sm">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span>Hotline: (028) 3971 2960</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span>1A Lý Thường Kiệt, Phường Tân Sơn Nhất, Thành phố Hồ Chí Minh</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4" />
                                <span>Thứ Hai - Thứ Sáu: 07:00 - 16:30
                                    Thứ Bảy: 07:00 - 11:30</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span>
                                    benhvien1a@benhvien1a.vn</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 lg:h-20 overflow-hidden">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3  ">
                            <div className=" flex items-center justify-center">
                                {/* <span className="text-white font-bold text-xl">1A</span> */}
                                <img src='/logo/logo.webp' alt="Image" className="h-20 lg:h-24" />
                            </div>
                            {/* <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-gray-800">Bệnh viện 1A</h1>
                                <p className="text-sm text-gray-600">Bệnh viện Chỉnh hình và Phục hồi chức năng TP.HCM</p>
                            </div> */}


                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center space-x-4">

                            <Button className="bg-blue-600 justify-center items-center flex hover:bg-blue-700 cursor-pointer">
                                <Modal />
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t shadow-lg">
                        <nav className="container mx-auto px-4 py-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100 last:border-b-0"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Button className="bg-blue-600 justify-center items-center flex hover:bg-blue-700 cursor-pointer">
                                    <Modal />
                                </Button>                            </div>
                        </nav>
                    </div>
                )}
            </header>
        </>
    )
}
