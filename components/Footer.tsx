'use client';

import Link from 'next/link';
import { trackTikTokEvent } from '@/lib/tiktok';

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
              <a 
                href="tel:0575386029" 
                onClick={() => trackTikTokEvent('Contact', { channel: 'phone', location: 'footer' })}
                className="hover:text-white transition-colors" 
                dir="ltr"
              >
                0575386029
              </a> 📞
            </li>
            <li>
              <a 
                href="https://api.whatsapp.com/send/?phone=966575386029" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackTikTokEvent('Contact', { channel: 'whatsapp', location: 'footer' })}
                className="hover:text-green-400 transition-colors"
              >
                تواصل معنا عبر واتساب 💬
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right text-xs text-gray-400">
        <p>حقوق النشر © {new Date().getFullYear()} شركة أجواء للنظافة والتعقيم الشامل. جميع الحقوق محفوظة.</p>
        <p className="inline-flex items-center gap-1.5 text-gray-400">
          <span>تم التصميم بواسطة</span>
          <a
            id="footer-nasharhub-link"
            href="https://nasharhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 font-bold transition-colors underline decoration-gray-600 hover:decoration-blue-400 underline-offset-4"
          >
            NasharHub
          </a>
        </p>
      </div>
    </footer>
  );
}
