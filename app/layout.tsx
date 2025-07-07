import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bệnh viện 1A - Chăm sóc sức khỏe chuyên nghiệp",
  description:
    "Bệnh viện 1A cung cấp dịch vụ y tế chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị hiện đại.",
  keywords: "bệnh viện, y tế, sức khỏe, bác sĩ, khám bệnh, chữa bệnh",
  openGraph: {
    title: "Bệnh viện 1A - Chăm sóc sức khỏe chuyên nghiệp",
    description: "Bệnh viện 1A cung cấp dịch vụ y tế chất lượng cao",
    url: "https://benhvien1a.com",
    siteName: "Bệnh viện 1A",
    locale: "vi_VN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        
      </body>
    </html>
  )
}
