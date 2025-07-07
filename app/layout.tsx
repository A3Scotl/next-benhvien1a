import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ScrollToTop from "@/components/common/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bệnh viện 1A - Chăm sóc sức khỏe chuyên nghiệp",
  description:
    "Bệnh viện 1A cung cấp dịch vụ y tế chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị hiện đại. Chuyên khoa chỉnh hình và phục hồi chức năng hàng đầu TP.HCM.",
  keywords: "bệnh viện, y tế, sức khỏe, bác sĩ, khám bệnh, chữa bệnh, chỉnh hình, phục hồi chức năng, TP.HCM",
  authors: [{ name: "Bệnh viện 1A" }],
  creator: "Bệnh viện 1A",
  publisher: "Bệnh viện 1A",
  robots: "index, follow",
  openGraph: {
    title: "Bệnh viện 1A - Chăm sóc sức khỏe chuyên nghiệp",
    description:
      "Bệnh viện 1A cung cấp dịch vụ y tế chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị hiện đại.",
    url: "https://benhvien1a.com",
    siteName: "Bệnh viện 1A",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bệnh viện 1A - Chăm sóc sức khỏe chuyên nghiệp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bệnh viện 1A - Chăm sóc sức khỏe chuyên nghiệp",
    description: "Bệnh viện 1A cung cấp dịch vụ y tế chất lượng cao",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://benhvien1a.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} custom-scrollbar`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
