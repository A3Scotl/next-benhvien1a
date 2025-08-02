import { Construction, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6 text-center space-y-4">
          <Construction className="h-8 w-8 text-orange-500 mx-auto" />

          <div>
            <h1 className="text-xl font-bold text-gray-900">🚧 Website đang được hoàn thiện</h1>
            <p className="text-sm text-gray-600 mt-2">Trong thời gian chờ bạn có thể liên hệ trực tiếp</p>
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-blue-500" />
              <a href="mailto:huy.q.le24@gmail.com" className="text-blue-600 hover:underline">
                huy.q.le24@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-green-500" />
              <div className="space-x-2">
                <a href="tel:+84981268626" className="text-green-600 hover:underline">
                  +84981268626 (VN)
                </a>
                <span className="text-gray-400">/</span>
                <a href="tel:+61426179790" className="text-green-600 hover:underline">
                  +61426179790 (AU)
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
