import { Metadata } from 'next';
import Image from 'next/image';
import CTAButtons from '@/components/CTAButtons';
import { CheckCircle2, Home, Building2, Bug, Headset } from 'lucide-react';

export const metadata: Metadata = {
  title: 'مكافحة الحشرات والقوارض بالرياض | شركة أجواء',
  description: 'مكافحة حشرات احترافية بالرياض من شركة أجواء. إبادة نهائية للحشرات الزاحفة والطائرة والقوارض بمبيدات آمنة. اتصل: 0533263551',
  keywords: 'مكافحة حشرات الرياض, رش مبيدات بالرياض, شركة مكافحة حشرات, إبادة حشرات, مكافحة النمل الأبيض, مكافحة صراصير بالرياض, مكافحة بق الفراش, رش دفان',
  alternates: {
    canonical: 'https://cleanajwa.com/mokafahat-hasharaat',
  },
  openGraph: {
    title: 'مكافحة الحشرات والقوارض بالرياض | شركة أجواء',
    description: 'مكافحة حشرات احترافية بالرياض من شركة أجواء. إبادة نهائية للحشرات الزاحفة والطائرة والقوارض بمبيدات آمنة.',
    url: 'https://cleanajwa.com/mokafahat-hasharaat',
    siteName: 'شركة أجواء',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783584134/Professional-Pest-Control-Technician-1_wajt1x.webp',
        width: 1200,
        height: 630,
        alt: 'مكافحة الحشرات والقوارض بالرياض',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مكافحة الحشرات والقوارض بالرياض | شركة أجواء',
    description: 'مكافحة حشرات احترافية بالرياض من شركة أجواء. إبادة نهائية للحشرات الزاحفة والطائرة والقوارض بمبيدات آمنة.',
    images: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783584134/Professional-Pest-Control-Technician-1_wajt1x.webp'],
  }
};

export default function MokafahatHasharaatPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'مكافحة الحشرات والقوارض',
    serviceType: 'مكافحة الحشرات',
    description: 'مكافحة حشرات احترافية بالرياض من شركة أجواء. إبادة نهائية للحشرات الزاحفة والطائرة والقوارض بمبيدات آمنة.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'شركة أجواء للنظافة والتعقيم الشامل',
      telephone: '0533263551',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'الرياض',
        addressCountry: 'SA'
      }
    },
    areaServed: {
      '@type': 'City',
      name: 'الرياض'
    }
  };

  return (
    <article className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <header className="bg-blue-800 text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">مكافحة الحشرات والقوارض بالرياض — شركة أجواء</h1>
          <CTAButtons />
        </div>
      </header>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        {/* معرض أيقونات — نفس شبكة 2x2 من تنظيف الشركات */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-16">
          <div className="relative w-40 h-40 md:w-56 md:h-56 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:drop-shadow-2xl cursor-pointer bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col justify-center items-center group gap-4">
            <Home className="w-16 h-16 md:w-20 md:h-20 text-blue-600 group-hover:text-blue-800 transition-colors" strokeWidth={1.5} />
            <span className="text-gray-800 font-bold md:text-lg group-hover:text-blue-800 transition-colors">تنظيف المنازل</span>
          </div>
          <div className="relative w-40 h-40 md:w-56 md:h-56 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:drop-shadow-2xl cursor-pointer bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col justify-center items-center group gap-4">
            <Building2 className="w-16 h-16 md:w-20 md:h-20 text-blue-600 group-hover:text-blue-800 transition-colors" strokeWidth={1.5} />
            <span className="text-gray-800 font-bold md:text-lg group-hover:text-blue-800 transition-colors">تنظيف الشركات</span>
          </div>
          <div className="relative w-40 h-40 md:w-56 md:h-56 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:drop-shadow-2xl cursor-pointer bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col justify-center items-center group gap-4">
            <Bug className="w-16 h-16 md:w-20 md:h-20 text-blue-600 group-hover:text-blue-800 transition-colors" strokeWidth={1.5} />
            <span className="text-gray-800 font-bold md:text-lg group-hover:text-blue-800 transition-colors">مكافحة الحشرات</span>
          </div>
          <div className="relative w-40 h-40 md:w-56 md:h-56 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:drop-shadow-2xl cursor-pointer bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col justify-center items-center group gap-4">
            <Headset className="w-16 h-16 md:w-20 md:h-20 text-blue-600 group-hover:text-blue-800 transition-colors" strokeWidth={1.5} />
            <span className="text-gray-800 font-bold md:text-lg group-hover:text-blue-800 transition-colors">خدمة العملاء</span>
          </div>
        </div>

        {/* قسم أول — صورة يمين، نص يسار */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <Image
              src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783584134/Professional-Pest-Control-Technician-1_wajt1x.webp"
              alt="خدمة مكافحة الحشرات الاحترافية من شركة أجواء باستخدام أحدث التقنيات الآمنة في الرياض"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-72 md:h-[450px] object-cover rounded-2xl shadow-lg"
              priority={true}
              quality={85}
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">خدمة مكافحة الحشرات من شركة أجواء: حماية ذكية لبيئة آمنة</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              لا نكتفي بتقديم خدمة إبادة مؤقتة، بل نصمم استراتيجية حماية متكاملة تضمن لك التخلص النهائي من كافة أنواع الحشرات (الزاحفة والطائرة) والقوارض. نعتمد على أحدث التقنيات العالمية واستخدام مبيدات صديقة للبيئة وآمنة تماماً على صحة الأفراد والحيوانات الأليفة.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">إبادة فورية:</strong> القضاء على الحشرات بمجرد الرش.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">حماية ممتدة:</strong> مفعول يدوم طويلاً لمنع عودة الحشرات.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">أمان تام:</strong> مبيدات مصرح بها وآمنة على الصحة العامة.</p>
              </li>
            </ul>
            <div className="mt-8">
              <CTAButtons />
            </div>
          </div>
        </section>

        {/* قسم ثاني — نص يمين، صورة يسار */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">وداعاً للإزعاج مع حلول &quot;أجواء&quot; الاحترافية لمكافحة الآفات</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              نقدم &quot;درع حماية&quot; لمنزلك أو شركتك. باستخدام مبيدات ذات فاعلية ممتدة وتقنيات متطورة، نستهدف القضاء على الحشرات في كافة مراحل دورة حياتها، من البيوض إلى الحشرات البالغة.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">مكافحة النمل الأبيض:</strong> حماية أساسات المباني والأخشاب.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">مكافحة بق الفراش:</strong> تعقيم المراتب والمفروشات بالكامل.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">مكافحة الصراصير:</strong> القضاء عليها في المطابخ والحمامات.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">مكافحة القوارض:</strong> اصطياد وإبعاد الفئران بطرق آمنة.</p>
              </li>
            </ul>
            <div className="mt-8">
              <CTAButtons />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783584134/16345-pest-control_kpx7u9.avif"
              alt="شركة مكافحة حشرات بالرياض — أجواء للتخلص النهائي من الآفات والقوارض بطرق صحية"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-72 md:h-[450px] object-cover rounded-2xl shadow-lg"
              quality={85}
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </article>
  );
}
