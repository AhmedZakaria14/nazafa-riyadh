import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex flex-wrap items-center justify-between gap-2">
        {/* أزرار الاتصال والواتساب يمين */}
        <div className="flex-shrink-0 order-1 md:order-3 flex items-center gap-2">
          <a
            id="header-call-btn"
            href="tel:0575386029"
            className="bg-slate-900 hover:bg-slate-800 text-amber-400 px-3 py-2 rounded-lg font-bold text-xs sm:text-sm transition-colors flex items-center gap-1.5 shadow-sm"
            title="اتصال هاتفي: 0575386029"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span dir="ltr">0575386029</span>
          </a>
          <a
            id="header-whatsapp-btn"
            href="https://api.whatsapp.com/send/?phone=966575386029"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline">واتساب</span>
          </a>
        </div>

        {/* قائمة nav */}
        <nav className="w-full md:w-auto order-3 md:order-2 mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-700 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-800 transition-colors">الرئيسية</Link>
            </li>
            <li>
              <Link href="/landingpage" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 font-bold transition-all text-sm border border-blue-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>باقات النظافة (من 299 ر.س)</span>
              </Link>
            </li>
            <li>
              <Link href="/tanzif-manazil" className="hover:text-blue-800 transition-colors">تنظيف المنازل</Link>
            </li>
            <li>
              <Link href="/tanzif-sharikaat" className="hover:text-blue-800 transition-colors">تنظيف الشركات</Link>
            </li>
            <li>
              <Link href="/mokafahat-hasharaat" className="hover:text-blue-800 transition-colors">مكافحة الحشرات</Link>
            </li>
          </ul>
        </nav>

        {/* شعار الشركة */}
        <div className="flex-shrink-0 order-2 md:order-1 flex items-center">
          <Link href="/" className="relative block w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 hover:scale-105">
            <Image 
              src="/logo.png"
              alt="شعار شركة أجواء للنظافة والتعقيم الشامل"
              fill
              sizes="(max-width: 768px) 56px, 64px"
              className="object-contain drop-shadow-sm"
              priority={true}
              quality={100}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
