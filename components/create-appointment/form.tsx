"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, User, Phone, Mail, FileText, UserCheck } from "lucide-react"
import { Appointment } from "@/schemas/appointment"

interface AppointmentFormProps {
  onSubmit: (data: Appointment) => void
 
}

export function AppointmentForm({ onSubmit }: AppointmentFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data: Appointment = {
      name: formData.get("name") as string,
      gender: formData.get("gender") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      department: formData.get("department") as string,
      date: formData.get("date") as string,
      note: formData.get("note") as string,
    }

    onSubmit(data)
  }

  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
      <form onSubmit={handleSubmit} className="space-y-6" id="appointment-form">
        {/* Personal Information Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <User className="w-5 h-5 mr-2 text-blue-600" />
            Thông tin cá nhân
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center">
                Họ và tên <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Nhập họ và tên đầy đủ"
                required
                className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender" className="text-sm font-medium text-gray-700 flex items-center">
                <UserCheck className="w-4 h-4 mr-1" />
                Giới tính <span className="text-red-500 ml-1">*</span>
              </Label>
              <Select name="gender" required>
                <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Chọn giới tính" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Nam</SelectItem>
                  <SelectItem value="female">Nữ</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                Số điện thoại <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="0xxx xxx xxx"
                required
                className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                Email <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                required
                className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Appointment Information Section */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-blue-600" />
            Thông tin đặt lịch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="department" className="text-sm font-medium text-gray-700">
                Khoa khám <span className="text-red-500 ml-1">*</span>
              </Label>
              <Select name="department" required>
                <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Chọn khoa khám" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="orthopedics">Chấn thương chỉnh hình</SelectItem>
                  <SelectItem value="rehabilitation">hục hồi chức năng</SelectItem>
                  <SelectItem value="neurology">Thần kinh</SelectItem>
                  <SelectItem value="general">Khám tổng quát</SelectItem>
                  <SelectItem value="cardiology">Tim mạch</SelectItem>
                  <SelectItem value="dermatology">Da liễu</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                Ngày khám <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 w-full"
              />
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-blue-600" />
            Thông tin bổ sung
          </h3>
          <div className="space-y-2">
            <Label htmlFor="note" className="text-sm font-medium text-gray-700">
              Triệu chứng hoặc ghi chú
            </Label>
            <Textarea
              id="note"
              name="note"
              placeholder="Mô tả triệu chứng, tình trạng sức khỏe hiện tại hoặc yêu cầu đặc biệt (nếu có)..."
              className="min-h-[100px] border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
