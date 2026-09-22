import type { Metadata } from 'next';
import LandingPageContent from '@/components/LandingPageContent';

export const metadata: Metadata = {
  title: 'عروض وباقات تنظيف المنازل والفلل بالرياض | تبدأ من 299 ريال | شركة أجواء',
  description: 'احصل على أقوى عروض تنظيف الشقق والفلل بالرياض تبدأ من 299 ريال من شركة أجواء. نظافة فندقية متكاملة بأحدث المعدات الألمانية وضمان 100%. احجز الآن عبر 0533263551.',
  keywords: [
    'تنظيف شقق 299 ريال',
    'تنظيف فلل 750 ريال',
    'تنظيف دور 350 ريال',
    'عروض تنظيف منازل بالرياض',
    'اسعار شركات تنظيف بالرياض',
    'شركة تنظيف بالرياض',
    'شركة أجواء للتنظيف',
    '0533263551',
    'غسيل كنب بالبخار 199 ريال',
    'تنظيف مكيفات 79 ريال'
  ],
  alternates: {
    canonical: 'https://cleanajwa.com/landingpage',
    languages: {
      ar: 'https://cleanajwa.com/landingpage',
    },
  },
  openGraph: {
    title: 'عروض تنظيف شقق وفلل بالرياض تبدأ من 299 ريال | شركة أجواء',
    description: 'تنظيف شقق بـ 299 ر.س، دور بـ 350 ر.س، وفلل بـ 750 ر.س مع ضمان الجودة الفندقية والمعاينة قبل الدفع. للحجز المباشر: 0533263551',
    url: 'https://cleanajwa.com/landingpage',
    siteName: 'شركة أجواء للنظافة والتعقيم',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://cleanajwa.com/logo.png',
        width: 512,
        height: 512,
        alt: 'عروض تنظيف المنازل بالرياض - شركة أجواء',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عروض وباقات تنظيف الشقق والفلل بالرياض تبدأ من 299 ريال | شركة أجواء',
    description: 'خدمة احترافية بأحدث المعدات الألمانية وضمان فندقي 100%. للحجز والاستفسار المباشر: 0533263551.',
    images: ['https://cleanajwa.com/logo.png'],
  },
};

export default function LandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://cleanajwa.com/#organization',
        name: 'شركة أجواء للنظافة والتعقيم الشامل',
        url: 'https://cleanajwa.com',
        logo: 'https://cleanajwa.com/logo.png',
        image: 'https://cleanajwa.com/logo.png',
        telephone: '0533263551',
        priceRange: '299 - 750 SAR',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'الرياض',
          addressLocality: 'الرياض',
          addressRegion: 'منطقة الرياض',
          addressCountry: 'SA',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '24.7136',
          longitude: '46.6753',
        },
        areaServed: {
          '@type': 'City',
          name: 'الرياض',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1850',
          bestRating: '5',
          worstRating: '1',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'عروض وباقات تنظيف المنازل الفندقية بالرياض',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'باقة تنظيف الشقق بالرياض',
                description: 'تنظيف وتطهير فندقي كامل لجميع غرف ومرافق الشقة بأحدث ماكينات البخار مع التلميع والتعطير.',
              },
              price: '299',
              priceCurrency: 'SAR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'باقة تنظيف الأدوار والدوبلكس بالرياض',
                description: 'عناية متكاملة بالمساحات الكبيرة والمجالس المفتوحة والممرات الواسعة والمطابخ الكبيرة.',
              },
              price: '350',
              priceCurrency: 'SAR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'باقة تنظيف الفلل بالرياض',
                description: 'برنامج نظافة شامل للفيلا بالكامل داخلياً وخارجياً مع الحوش والواجهات.',
              },
              price: '750',
              priceCurrency: 'SAR',
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'ماذا تشمل باقة تنظيف الشقة بسعر 299 ريال؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'تشمل الباقة غسيل وتلميع كافة الأرضيات، تنظيف وتعقيم المطبخ بالكامل وإزالة بقع الزيوت، تطهير جميع دورات المياه والمغاسل، مسح النوافذ ومجاري الألمنيوم، تنظيف الأبواب ومفاتيح الكهرباء، والتعطير النهائي للشقة.',
            },
          },
          {
            '@type': 'Question',
            name: 'هل هناك أي تكاليف إضافية لنقل العمالة والمعدات داخل الرياض؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'لا توجد أي رسوم إضافية على الإطلاق. السعر المعلن نهائي وشامل أجور العمالة، مواد التنظيف، الأجهزة الكهربائية، ورسوم الانتقال لجميع أحياء ومناطق الرياض.',
            },
          },
          {
            '@type': 'Question',
            name: 'كيف يمكنني تأكيد الموعد؟ وهل يلزم دفع عربون مسبق؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'لا نطلب أي دفع مسبق! يمكنك الحجز فوراً عبر الضغط على زر الواتساب أو الاتصال على 0533263551، وتأكيد الموعد المناسب لك، والدفع يكون بعد إتمام العمل ومعاينتك الميدانية.',
            },
          },
          {
            '@type': 'Question',
            name: 'ما هو الضمان الذهبي الذي تقدمونه؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'نلتزم بسياسة الرضا التام 100%: تتم مراجعة كامل تفاصيل العمل برفقتك قبل مغادرة الفريق، وفي حال وجود أي ملاحظة تتم معالجتها فوراً أو إعادة تنظيف المكان مجاناً.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPageContent />
    </>
  );
}
