import { PhoneCall, MessageCircle } from 'lucide-react';

export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mt-8 w-full">
      <a
        href="tel:0533263551"
        className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.7)] overflow-hidden border border-blue-400/30 w-full sm:w-auto"
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
        <PhoneCall className="w-6 h-6 group-hover:animate-pulse" />
        <span className="relative z-10" dir="ltr">0533263551</span>
        <span className="relative z-10">اتصل بنا</span>
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=966533263551"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_40px_-10px_rgba(34,197,94,0.7)] overflow-hidden border border-green-400/30 w-full sm:w-auto"
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="relative z-10">تواصل واتساب</span>
      </a>
    </div>
  );
}
