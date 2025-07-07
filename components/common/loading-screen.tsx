"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo and Hospital Name */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <img src="/images/logo/logo.webp" alt="Logo" className="h-20 animate-pulse" />
          </div>
        </div>
        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">Đang tải... {progress}%</p>
        </div>

       
      </div>
    </div>
  )
}
