import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Website Under Construction",
  description: "Website đang được hoàn thiện - trong thời gian chờ bạn có thể liên hệ trực tiếp",
  keywords: ["under construction", "website", "maintenance"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
