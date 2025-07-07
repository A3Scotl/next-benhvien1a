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
import { AppointmentForm } from "./form"
import type { Appointment } from "@/schemas/appointment"
import { Button } from "@/components/ui/button"

import { Calendar, Stethoscope } from "lucide-react"
import defaultTrigger from "./defautl-trigger"

interface AppointmentModalProps {
  trigger?: React.ReactNode
  onSubmit?: (data: Appointment) => void
}

export function AppointmentModal({ trigger, onSubmit }: AppointmentModalProps) {
  const [open, setOpen] = useState(false)

  const handleSubmit = (data: Appointment) => {
    console.log("Appointment data:", data)

    if (onSubmit) {
      onSubmit(data)
      console.log(data);
    }

    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }



  return (
    <div className="w-full h-full">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger || defaultTrigger}</DialogTrigger>
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

          {/* Form Content */}
          <AppointmentForm onSubmit={handleSubmit}  />

          {/* Fixed Footer */}
          <div className="px-6 py-4 border-t border-gray-100 flex-shrink-0">
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 py-2 bg-transparent"
              >
                Hủy bỏ
              </Button>
              <Button
                type="submit"
                form="appointment-form"
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

export default AppointmentModal
