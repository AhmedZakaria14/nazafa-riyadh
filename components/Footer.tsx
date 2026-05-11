import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">شركة أجواء</h3>
          <p className="text-gray-400 mb-4">للنظافة والتعقيم الشامل</p>
          <p className="text-gray-400">الرياض، المملكة العربية السعودية</p>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-4">روابط سريعة</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-white transition-colors">الرئيسية</Link></li>
            <li><Link href="/tanzif-manazil" className="hover:text-white transition-colors">تنظيف المنازل والفلل</Link></li>
            <li><Link href="/tanzif-sharikaat" className="hover:text-white transition-colors">تنظيف الشركات والمكاتب</Link></li>
            <li><Link href="/mokafahat-hasharaat" className="hover:text-white transition-colors">مكافحة الحشرات والقوارض</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">تواصل معنا</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <span dir="ltr">0533263551</span> 📞
            </li>
            <li>
              <a href="https://api.whatsapp.com/send/?phone=966533263551" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                تواصل معنا عبر واتساب 💬
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>حقوق النشر © {new Date().getFullYear()} شركة أجواء للنظافة والتعقيم الشامل. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
