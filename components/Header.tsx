import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        {/* زر واتساب يمين */}
        <div className="flex-shrink-0 order-1 md:order-3">
          <a
            href="https://api.whatsapp.com/send/?phone=966533263551"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
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
          <Link href="/" className="relative block w-20 h-16 md:w-28 md:h-20 transition-transform duration-300 hover:scale-105">
            <Image 
              src="https://cleanajwa.com/wp-content/uploads/2026/03/اجواء-68x58.png"
              alt="شعار شركة أجواء للنظافة والتعقيم الشامل"
              fill
              sizes="(max-width: 768px) 80px, 112px"
              className="object-contain"
              priority={true}
              quality={100}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
