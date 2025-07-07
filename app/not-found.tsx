import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold ">404</h1>
          <h2 className="text-2xl font-semibold">Không tìm thấy trang</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Trang bạn đang tìm kiếm không tồn tại.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button asChild variant="outline">
            <Link href="javascript:history.back()">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại
            </Link>
          </Button>
          <Button asChild>
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Trang chủ
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
