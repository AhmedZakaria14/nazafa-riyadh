import { Metadata } from 'next';
import Image from 'next/image';
import CTAButtons from '@/components/CTAButtons';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'تنظيف المنازل والفلل بالرياض | شركة أجواء',
  description: 'خدمة تنظيف المنازل والفلل الشاملة في الرياض من شركة أجواء. تنظيف عميق، تعقيم، جلي رخام بأحدث المعدات. اتصل الآن: 0533263551',
  keywords: 'تنظيف منازل الرياض، تنظيف فلل بالرياض، شركة تنظيف منازل، جلي رخام الرياض',
  alternates: {
    canonical: 'https://cleanajwa.com/tanzif-manazil',
  }
};

export default function TanzifManazilPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'تنظيف المنازل والفلل',
    description: 'خدمة تنظيف المنازل والفلل الشاملة في الرياض من شركة أجواء. تنظيف عميق، تعقيم، جلي رخام بأحدث المعدات.',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">خدمة تنظيف المنازل والفلل بالرياض</h1>
          <CTAButtons />
        </div>
      </header>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        {/* قسم أول — صورة يمين، نص يسار (RTL means right is first in grid) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <Image
              src="https://cleanajwa.com/wp-content/uploads/2026/03/عامل-تنظيف-مكاتب-ومنشآت-1.jpg"
              alt="عامل تنظيف منازل وفلل من شركة أجواء يقوم بعمله باحترافية في الرياض"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-72 md:h-[450px] object-cover rounded-2xl shadow-lg"
              priority={true}
              quality={85}
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">شركة أجواء.. نعتني بمنزلك كما لو كان ملكنا</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ندرك أن نظافة منزلك أو فيلتك ليست مجرد مظهر جمالي، بل هي ركيزة أساسية لراحة عائلتك وصحتهم.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">التنظيف العميق:</strong> للأرضيات، الجدران، والأسقف بأعلى معايير الجودة.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">العناية بالواجهات:</strong> تنظيف وتلميع واجهات الفلل الزجاجية والحجرية.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">التعقيم المتكامل:</strong> تطهير المطابخ والحمامات لضمان بيئة صحية.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">جلي وتلميع الرخام:</strong> لإعادة البريق واللمعان لمداخل الفلل والصالونات.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">أجواء.. مفهوم جديد لنظافة الفلل والمنازل الفاخرة</h2>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">الخدمة الشاملة:</strong> تنظيف وتطهير كافة زوايا المنزل من الأرضيات وحتى الأسقف.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">تلميع الواجهات:</strong> إعادة البريق للواجهات الزجاجية والحجرية.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">التعقيم الصحي:</strong> تعقيم عميق للمطابخ ودورات المياه.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">العناية بالأرضيات والرخام:</strong> تقنيات حديثة لجلي الرخام.</p>
              </li>
            </ul>
            <div className="mt-8">
              <CTAButtons />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://cleanajwa.com/wp-content/uploads/2026/03/1-13.jpg"
              alt="تنظيف فلل راقية بالرياض مع جلي الرخام والتعقيم الشامل من شركة أجواء"
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
