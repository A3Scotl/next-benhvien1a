"use client"
import type React from "react"
import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, User, Phone, Mail, Stethoscope, FileText, UserCheck } from 'lucide-react'

function Modal() {
    const [open, setOpen] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted")
        setOpen(false)
    }

    const handleCancel = () => {
        setOpen(false)
    }

    return (
        <div className="w-full h-full">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className=" cursor-pointer flex justify-center items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Đặt lịch khám
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] h-[90vh] p-0 flex flex-col">
                    {/* Fixed Header */}
                    <DialogHeader className="px-6 py-4 border-b border-gray-100 flex-shrink-0">
                        <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center">
                            <Stethoscope className="w-6 h-6 mr-3 text-blue-600" />
                            Đặt lịch khám bệnh
                        </DialogTitle>
                        <DialogDescription className="text-gray-600 leading-relaxed">
                            Vui lòng điền đầy đủ thông tin để đặt lịch khám. Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
                        <form onSubmit={handleSubmit} className="space-y-6">
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
                                        <Select required>
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
                                        <Select required>
                                            <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                                                <SelectValue placeholder="Chọn khoa khám" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="orthopedics">🦴 Chấn thương chỉnh hình</SelectItem>
                                                <SelectItem value="rehabilitation">🏃‍♂️ Phục hồi chức năng</SelectItem>
                                                <SelectItem value="neurology">🧠 Thần kinh</SelectItem>
                                                <SelectItem value="general">👨‍⚕️ Khám tổng quát</SelectItem>
                                                <SelectItem value="cardiology">❤️ Tim mạch</SelectItem>
                                                <SelectItem value="dermatology">🩺 Da liễu</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                                            Ngày khám <span className="text-red-500 ml-1">*</span>
                                        </Label>
                                        <Input
                                            id="date"
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
                                        placeholder="Mô tả triệu chứng, tình trạng sức khỏe hiện tại hoặc yêu cầu đặc biệt (nếu có)..."
                                        className="min-h-[100px] border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                                    />
                                </div>
                            </div>


                        </form>
                    </div>

                    {/* Fixed Footer */}
                    <div className="px-6 py-4 border-t border-gray-100 flex-shrink-0">
                        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleCancel}
                                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 py-2"
                            >
                                Hủy bỏ
                            </Button>
                            <Button
                                type="submit"
                                onClick={handleSubmit}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-2 shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                <Calendar className="w-4 h-4 mr-2" />
                                Xác nhận đặt lịch
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Modal
