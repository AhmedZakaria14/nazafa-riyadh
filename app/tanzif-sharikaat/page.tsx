import { Metadata } from 'next';
import Image from 'next/image';
import CTAButtons from '@/components/CTAButtons';
import { CheckCircle2, Home, Building2, Bug, Headset } from 'lucide-react';

export const metadata: Metadata = {
  title: 'تنظيف الشركات والمكاتب بالرياض | شركة أجواء',
  description: 'خدمة تنظيف الشركات والمكاتب الاحترافية بالرياض من شركة أجواء. تعقيم وتنظيف يومي وأسبوعي. اتصل: 0533263551',
  keywords: 'تنظيف شركات الرياض, تنظيف مكاتب بالرياض, شركة تنظيف مؤسسات, تعقيم مكاتب, تنظيف مستودعات, تنظيف معارض بالرياض, عقود تنظيف شركات',
  alternates: {
    canonical: 'https://cleanajwa.com/tanzif-sharikaat',
  },
  openGraph: {
    title: 'تنظيف الشركات والمكاتب بالرياض | شركة أجواء',
    description: 'خدمة تنظيف الشركات والمكاتب الاحترافية بالرياض من شركة أجواء. تعقيم وتنظيف يومي وأسبوعي.',
    url: 'https://cleanajwa.com/tanzif-sharikaat',
    siteName: 'شركة أجواء',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'تنظيف شركات ومكاتب بالرياض',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنظيف الشركات والمكاتب بالرياض | شركة أجواء',
    description: 'خدمة تنظيف الشركات والمكاتب الاحترافية بالرياض من شركة أجواء. تعقيم وتنظيف يومي وأسبوعي.',
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'],
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="تعقيم وتنظيف مكاتب الشركات والمؤسسات باحترافية عالية من شركة أجواء بالرياض"
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
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              alt="عامل نظافة محترف ينظف مكاتب ومنشآت تجارية بمدينة الرياض بأعلى جودة"
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
