import { Metadata } from 'next';
import Image from 'next/image';
import CTAButtons from '@/components/CTAButtons';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'تنظيف الشركات والمكاتب بالرياض | شركة أجواء',
  description: 'خدمة تنظيف الشركات والمكاتب الاحترافية بالرياض من شركة أجواء. تعقيم وتنظيف يومي وأسبوعي. اتصل: 0533263551',
  keywords: 'تنظيف شركات الرياض، تنظيف مكاتب الرياض، شركة تنظيف مؤسسات، تعقيم مكاتب',
  alternates: {
    canonical: 'https://cleanajwa.com/tanzif-sharikaat',
  }
};

export default function TanzifSharikaatPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'تنظيف الشركات والمكاتب',
    serviceType: 'تنظيف الشركات',
    description: 'خدمة تنظيف الشركات والمكاتب الاحترافية بالرياض من شركة أجواء. تعقيم وتنظيف يومي وأسبوعي.',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">خدمة تنظيف الشركات والمكاتب بالرياض</h1>
          <CTAButtons />
        </div>
      </header>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        {/* معرض صور الأيقونات — شبكة 2x2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-16">
          <Image src="https://cleanajwa.com/wp-content/uploads/2026/03/1.png" alt="أيقونة خدمة تنظيف المنازل من شركة أجواء" width={128} height={128} sizes="(max-width: 768px) 96px, 128px" className="w-24 h-24 md:w-32 md:h-32 object-contain" quality={85} loading="lazy" />
          <Image src="https://cleanajwa.com/wp-content/uploads/2026/03/2.png" alt="أيقونة التواصل مع شركة أجواء للنظافة" width={128} height={128} sizes="(max-width: 768px) 96px, 128px" className="w-24 h-24 md:w-32 md:h-32 object-contain" quality={85} loading="lazy" />
          <Image src="https://cleanajwa.com/wp-content/uploads/2026/03/3.png" alt="أيقونة خدمة مكافحة الحشرات من شركة أجواء" width={128} height={128} sizes="(max-width: 768px) 96px, 128px" className="w-24 h-24 md:w-32 md:h-32 object-contain" quality={85} loading="lazy" />
          <Image src="https://cleanajwa.com/wp-content/uploads/2026/03/4.png" alt="أيقونة خدمة تنظيف الشركات من شركة أجواء" width={128} height={128} sizes="(max-width: 768px) 96px, 128px" className="w-24 h-24 md:w-32 md:h-32 object-contain" quality={85} loading="lazy" />
        </div>

        {/* قسم أول — نص يمين، صورة banner عريضة أسفله */}
        <section className="py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">شركة أجواء.. شريككم الموثوق لبيئة عمل أنقى وأكثر إنتاجية</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            ندرك أن نظافة مقر شركتكم ليست مجرد واجهة تعكس احترافيتكم أمام عملائكم، بل هي ركيزة أساسية لتعزيز إنتاجية موظفيكم وضمان بيئة عمل صحية ومحفزة.
          </p>
          <ul className="space-y-3 mt-4 mb-8">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700"><strong className="text-gray-900">تنظيف وتعقيم المساحات المكتبية:</strong> لضمان بيئة عمل خالية من الملوثات.</p>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700"><strong className="text-gray-900">العناية بالواجهات والمداخل:</strong> لإعطاء الانطباع الأول المثالي لزواركم.</p>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700"><strong className="text-gray-900">صيانة ونظافة المرافق:</strong> من غرف اجتماعات، ممرات، ومرافق خدمية بأحدث المعدات.</p>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700"><strong className="text-gray-900">أنظمة مرنة:</strong> توفير خطط تنظيف دورية (يومية أو أسبوعية) تتناسب مع جدول أعمالكم.</p>
            </li>
          </ul>
          
          <Image
            src="https://cleanajwa.com/wp-content/uploads/2026/03/تعقيم-مكاتب-بالشارقة-1536x570-1-1024x380.jpg"
            alt="تعقيم وتنظيف مكاتب الشركات باحترافية عالية من شركة أجواء بالرياض"
            width={1200}
            height={600}
            sizes="100vw"
            className="w-full h-64 md:h-[450px] object-cover rounded-2xl shadow-lg mt-6"
            quality={85}
            loading="lazy"
          />
          <div className="mt-8 text-center">
            <CTAButtons />
          </div>
        </section>

        {/* قسم ثاني — صورة يمين، نص يسار */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <Image
              src="https://cleanajwa.com/wp-content/uploads/2026/03/عامل-تنظيف-مكاتب-ومنشآت.jpg"
              alt="عامل تنظيف شركات ومنشآت تجارية من فريق أجواء المتخصص بالرياض"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-72 md:h-[450px] object-cover rounded-2xl shadow-lg"
              quality={85}
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">شركة أجواء.. لبيئة عمل تعكس رقيّ مؤسستكم</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              نقدم خدمات متكاملة تضمن بقاء شركتكم في أبهى صورة، مع التركيز على أدق التفاصيل التي تهمكم وتهم عملائكم.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">الاحترافية:</strong> فريق عمل مدرب ومؤهل للتعامل مع كافة بيئات العمل.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">الجودة:</strong> استخدام أفضل مواد التنظيف والتعقيم المعتمدة.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">الالتزام:</strong> تنفيذ الأعمال في الأوقات المحددة دون التأثير على سير العمل.</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700"><strong className="text-gray-900">الشمولية:</strong> تغطية كافة احتياجات النظافة من الأرضيات وحتى الأسقف.</p>
              </li>
            </ul>
            <div className="mt-8">
              <CTAButtons />
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
