import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "كيلو لحم جاموسي",
    price: 290,
    image: "/website/images/buffalo_meat_raw_1770671909202.png",
  },
  {
    id: 2,
    name: "كيلو مفروم اقتصادي",
    price: 250,
    image: "/website/images/minced_meat_raw_1770671928857.png",
  },
  {
    id: 3,
    name: "كيلو لحم كندوز صغير",
    price: 380,
    image: "/website/images/veal_meat_raw_1770671942773.png",
  },
  {
    id: 4,
    name: "كيلو لحم وسط",
    price: 340,
    image: "/website/images/mixed_meat_raw_1770671957367.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9F9] flex flex-col items-center" dir="rtl">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center p-4 border-b border-red-100 bg-white sticky top-0 z-50">
        <Button className="bg-[#00C853] hover:bg-[#00A844] text-white rounded-full flex gap-2">
          <MessageCircle size={18} />
          تواصل معنا
        </Button>
        <div className="flex items-center gap-4">
          <div className="text-left">
            <h1 className="text-[#8B1D1D] font-bold text-2xl">صلاح سالم</h1>
            <p className="text-gray-500 text-sm">أجود أنواع اللحوم الطازجة</p>
          </div>
          <img
            src="/website/images/salah_salem_logo_1770671896367.png"
            alt="Salah Salem Logo"
            className="h-16 w-16 rounded-xl shadow-lg border-2 border-red-100"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-6xl py-12 px-4 text-center">
        <h2 className="text-red-900 text-4xl font-bold mb-4">أهلاً وسهلاً بكم في محل المعلم صلاح سالم</h2>
        <p className="text-red-800 text-lg flex items-center justify-center gap-2">
          🥩 نقدم لكم أجود أنواع اللحوم الطازجة يومياً
        </p>
        <p className="text-red-700 font-bold mt-2">بأفضل الأسعار وجودة مضمونة 100% ✔</p>
      </section>

      {/* Product Grid */}
      <main className="w-full max-w-6xl px-4 pb-20">
        <h3 className="text-red-900 text-2xl font-bold mb-8 text-center bg-red-50 py-2 rounded-lg">قائمة المنتجات</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-red-50 flex flex-col transition-transform hover:scale-[1.02]">
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex justify-between items-center">
                <div className="text-right">
                  <h4 className="text-xl font-bold text-gray-800">{product.name}</h4>
                  <p className="text-[#8B1D1D] text-2xl font-bold mt-1">
                    {product.price} <span className="text-sm">ج</span>
                  </p>
                </div>
                <Button className="bg-[#8B1D1D] hover:bg-red-900 text-white px-8 rounded-lg shadow-md">
                  اطلب الآن
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="w-full py-4 text-center text-gray-400 text-xs border-top mt-auto">
        Made with Manus
      </footer>
    </div>
  );
}
