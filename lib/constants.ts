export const NAVIGATION_ITEMS = [
    { href: "/", label: "Trang chủ" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/services", label: "Dịch vụ" },
    { href: "/doctors", label: "Đội ngũ bác sĩ" },
    { href: "/contact", label: "Liên hệ" },
] as const
export const SERVICES = [
  { id: "cardiology", name: "Tim mạch", icon: "Heart" },
  { id: "neurology", name: "Thần kinh", icon: "Brain" },
  { id: "orthopedics", name: "Xương khớp", icon: "Bone" },
  { id: "ophthalmology", name: "Mắt", icon: "Eye" },
  { id: "pediatrics", name: "Nhi khoa", icon: "Baby" },
  { id: "internal", name: "Nội tổng quát", icon: "Stethoscope" },
] as const
export const WORKING_HOURS = {
  weekdays: "Thứ 2 - Thứ 6: 7:00 - 17:00",
  weekends: "Thứ 7 - CN: 8:00 - 16:00",
  emergency: "Cấp cứu: 24/7",
} as const
export const SITE_CONFIG = {
  name: "Bệnh viện 1A",
  description: "Bệnh viện Chỉnh hình và Phục hồi chức năng TP.HCM",
  url: "https://benhvien1a.com",
  phone: "(028) 3971 2960",
  email: "benhvien1a@benhvien1a.vn",
  address: "1A Lý Thường Kiệt, Phường Tân Sơn Nhất, TP.HCM",
  working_time:"T2-T6: 07:00-16:30 , T7: 07:00 - 11:30",
} as const

