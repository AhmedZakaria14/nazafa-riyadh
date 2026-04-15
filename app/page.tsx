import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTAButtons from '@/components/CTAButtons';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'شركة أجواء للنظافة والتعقيم الشامل بالرياض | أفضل خدمات تنظيف المنازل والشركات',
  description: 'شركة أجواء أفضل شركة نظافة وتعقيم شامل بالرياض. نقدم خدمات تنظيف المنازل، الفلل، الشركات، ومكافحة الحشرات والقوارض بأحدث التقنيات وأفضل الأسعار. اتصل الآن 0533263551.',
  keywords: 'شركة نظافة الرياض، تنظيف منازل الرياض، تنظيف فلل الرياض، شركة تنظيف، مكافحة حشرات الرياض، تعقيم شركات، جلي رخام',
  alternates: {
    canonical: 'https://cleanajwa.com',
  },
  openGraph: {
    title: 'شركة أجواء للنظافة والتعقيم الشامل بالرياض',
    description: 'أفضل خدمات تنظيف المنازل والفلل والشركات ومكافحة الحشرات في الرياض.',
    url: 'https://cleanajwa.com',
    siteName: 'شركة أجواء',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة أجواء للنظافة والتعقيم الشامل بالرياض',
    description: 'أفضل خدمات تنظيف المنازل والفلل والشركات ومكافحة الحشرات في الرياض.',
  }
};

export default function HomePage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://cleanajwa.com/#organization',
      name: 'شركة أجواء للنظافة والتعقيم الشامل',
      image: 'https://cleanajwa.com/wp-content/uploads/2026/03/اجواء-68x58.png',
      logo: 'https://cleanajwa.com/wp-content/uploads/2026/03/اجواء-68x58.png',
      url: 'https://cleanajwa.com',
      telephone: '0533263551',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'الرياض',
        addressLocality: 'الرياض',
        addressRegion: 'الرياض',
        postalCode: '11564',
        addressCountry: 'SA'
      },
      areaServed: {
        '@type': 'City',
        name: 'الرياض'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'تنظيف المنازل والفلل',
      description: 'خدمة تنظيف المنازل والفلل الشاملة في الرياض من شركة أجواء. تنظيف عميق، تعقيم، جلي رخام بأحدث المعدات.',
      url: 'https://cleanajwa.com/tanzif-manazil',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://cleanajwa.com/#organization',
        name: 'شركة أجواء للنظافة والتعقيم الشامل'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'تنظيف الشركات والمكاتب',
      description: 'خدمة تنظيف الشركات والمكاتب الاحترافية بالرياض من شركة أجواء. تعقيم وتنظيف يومي وأسبوعي.',
      url: 'https://cleanajwa.com/tanzif-sharikaat',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://cleanajwa.com/#organization',
        name: 'شركة أجواء للنظافة والتعقيم الشامل'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'مكافحة الحشرات والقوارض',
      description: 'مكافحة حشرات احترافية بالرياض من شركة أجواء. إبادة نهائية للحشرات الزاحفة والطائرة والقوارض بمبيدات آمنة.',
      url: 'https://cleanajwa.com/mokafahat-hasharaat',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://cleanajwa.com/#organization',
        name: 'شركة أجواء للنظافة والتعقيم الشامل'
      }
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
        {/* Glassmorphism & Decorative Background */}
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay backdrop-blur-3xl"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>

        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right space-y-8">
              <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-sm md:text-base font-semibold tracking-wide shadow-lg">
                ✨ الخيار الأول للنظافة في الرياض
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
                شركة أجواء للنظافة <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200">والتعقيم الشامل</span>
              </h1>
              <p className="text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                نقدم حلولاً متكاملة لنظافة المنازل، الفلل، والشركات بمعايير عالمية واحترافية لا تضاهى لضمان بيئة صحية وآمنة.
              </p>
              <div className="flex justify-center lg:justify-start pt-4">
                <CTAButtons />
              </div>
            </div>
            
            {/* Hero Image (LCP Optimized) */}
            <div className="hidden lg:block relative h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 border-4 border-white/10">
              <Image
                src="https://cleanajwa.com/wp-content/uploads/2026/03/1-13.jpg"
                alt="فريق شركة أجواء يقدم خدمات النظافة والتعقيم الشامل للمنازل والشركات بالرياض"
                fill
                priority
                sizes="50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">خدماتنا المتميزة</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              نلبي كافة احتياجاتكم من خلال باقة متكاملة من خدمات النظافة والتعقيم المصممة خصيصاً لراحتكم.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col border border-gray-100 transform hover:-translate-y-2">
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <Image
                  src="https://cleanajwa.com/wp-content/uploads/2026/03/1.png"
                  alt="خدمة تنظيف المنازل والفلل من شركة أجواء بالرياض"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  quality={90}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">تنظيف المنازل والفلل</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-lg">
                  ندرك أن نظافة منزلك أو فيلتك ليست مجرد مظهر جمالي، بل هي ركيزة أساسية لراحة عائلتك وصحتهم.
                </p>
                <Link 
                  href="/tanzif-manazil"
                  className="group/btn inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 w-full shadow-sm hover:shadow-md"
                >
                  <span>عرض التفاصيل</span>
                  <ArrowLeft className="w-5 h-5 transform group-hover/btn:-translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col border border-gray-100 transform hover:-translate-y-2">
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <Image
                  src="https://cleanajwa.com/wp-content/uploads/2026/03/4.png"
                  alt="خدمة تنظيف الشركات والمكاتب من شركة أجواء بالرياض"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  quality={90}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">تنظيف الشركات</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-lg">
                  ندرك أن نظافة مقر شركتكم ليست مجرد واجهة تعكس احترافيتكم أمام عملائكم، بل بيئة عمل محفزة.
                </p>
                <Link 
                  href="/tanzif-sharikaat"
                  className="group/btn inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 w-full shadow-sm hover:shadow-md"
                >
                  <span>عرض التفاصيل</span>
                  <ArrowLeft className="w-5 h-5 transform group-hover/btn:-translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col border border-gray-100 transform hover:-translate-y-2">
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <Image
                  src="https://cleanajwa.com/wp-content/uploads/2026/03/3.png"
                  alt="خدمة مكافحة الحشرات والقوارض من شركة أجواء بالرياض"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  quality={90}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">مكافحة الحشرات</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-lg">
                  لا نكتفي بتقديم خدمة إبادة مؤقتة بل نصمم استراتيجية حماية متكاملة تضمن التخلص النهائي من الآفات.
                </p>
                <Link 
                  href="/mokafahat-hasharaat"
                  className="group/btn inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 w-full shadow-sm hover:shadow-md"
                >
                  <span>عرض التفاصيل</span>
                  <ArrowLeft className="w-5 h-5 transform group-hover/btn:-translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">نحن هنا لخدمتكم على مدار الساعة</h2>
          <div className="flex justify-center items-center">
            {/* Fixed size container for the icon to prevent stretching */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 drop-shadow-2xl cursor-pointer">
              <Image
                src="https://cleanajwa.com/wp-content/uploads/2026/03/2.png"
                alt="أيقونة التواصل مع خدمة عملاء شركة أجواء للنظافة بالرياض"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-contain"
                quality={100}
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-8 text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
            فريق خدمة عملاء شركة أجواء متاح على مدار الساعة للرد على استفساراتكم وتلبية طلبات النظافة والتعقيم الفورية في جميع أنحاء الرياض، لضمان بيئة صحية ونظيفة لكم ولعائلتكم.
          </p>
        </div>
      </section>
    </main>
  );
}
