import { Metadata } from 'next';
import Image from 'next/image';
import CTAButtons from '@/components/CTAButtons';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'مكافحة الحشرات والقوارض بالرياض | شركة أجواء',
  description: 'مكافحة حشرات احترافية بالرياض من شركة أجواء. إبادة نهائية للحشرات الزاحفة والطائرة والقوارض بمبيدات آمنة. اتصل: 0533263551',
  keywords: 'مكافحة حشرات الرياض، رش مبيدات الرياض، شركة مكافحة حشرات، إبادة حشرات',
  alternates: {
    canonical: 'https://cleanajwa.com/mokafahat-hasharaat',
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
          <div className="relative w-40 h-40 md:w-56 md:h-56 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:drop-shadow-2xl cursor-pointer bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex justify-center items-center">
            <Image src="https://cleanajwa.com/wp-content/uploads/2026/03/1.png" alt="أيقونة خدمة تنظيف المنازل من شركة أجواء" fill sizes="(max-width: 768px) 160px, 224px" className="object-contain p-4" quality={85} loading="lazy" />
          </div>
          <div className="relative w-40 h-40 md:w-56 md:h-56 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:drop-shadow-2xl cursor-pointer bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex justify-center items-center">
            <Image src="https://cleanajwa.com/wp-content/uploads/2026/03/2.png" alt="أيقونة التواصل مع شركة أجواء للنظافة" fill sizes="(max-width: 768px) 160px, 224px" className="object-contain p-4" quality={85} loading="lazy" />
          </div>
          <div className="relative w-40 h-40 md:w-56 md:h-56 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:drop-shadow-2xl cursor-pointer bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex justify-center items-center">
            <Image src="https://cleanajwa.com/wp-content/uploads/2026/03/3.png" alt="أيقونة خدمة مكافحة الحشرات من شركة أجواء" fill sizes="(max-width: 768px) 160px, 224px" className="object-contain p-4" quality={85} loading="lazy" />
          </div>
          <div className="relative w-40 h-40 md:w-56 md:h-56 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:drop-shadow-2xl cursor-pointer bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex justify-center items-center">
            <Image src="https://cleanajwa.com/wp-content/uploads/2026/03/4.png" alt="أيقونة خدمة تنظيف الشركات من شركة أجواء" fill sizes="(max-width: 768px) 160px, 224px" className="object-contain p-4" quality={85} loading="lazy" />
          </div>
        </div>

        {/* قسم أول — صورة يمين، نص يسار */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <Image
              src="https://cleanajwa.com/wp-content/uploads/2026/03/16345-pest-control-1024x531.avif"
              alt="خدمة مكافحة الحشرات الاحترافية من شركة أجواء باستخدام أحدث التقنيات في الرياض"
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
              src="https://cleanajwa.com/wp-content/uploads/2026/03/شركة-مكافحة-حشرات-بالاحساء.webp"
              alt="شركة مكافحة حشرات بالرياض — أجواء للتخلص النهائي من الآفات والقوارض"
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
