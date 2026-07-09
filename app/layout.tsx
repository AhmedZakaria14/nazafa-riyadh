import type { Metadata, Viewport } from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
});

export const viewport: Viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'شركة أجواء | أفضل شركة تنظيف منازل وشركات بالرياض',
  description: 'شركة أجواء للنظافة والتعقيم بالرياض. خدمات تنظيف منازل، فلل، شركات ومكافحة حشرات بأحدث التقنيات وأفضل الأسعار. اتصل: 0533263551',
  keywords: 'شركة تنظيف بالرياض, أفضل شركة تنظيف بالرياض, شركة نظافة الرياض, تنظيف منازل الرياض, تنظيف فلل الرياض, شركة تنظيف شركات, مكافحة حشرات الرياض, تنظيف مجالس بالرياض, تعقيم منازل, جلي رخام, تنظيف كنب, رش مبيدات بالرياض, أسعار تنظيف المنازل',
  authors: [{ name: 'شركة أجواء' }],
  creator: 'شركة أجواء',
  publisher: 'شركة أجواء',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783579020/%D8%B4%D8%B1%D9%83%D8%A9_%D8%A3%D8%AC%D9%88%D8%A7%D8%A1_vot9oq.png',
    shortcut: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783579020/%D8%B4%D8%B1%D9%83%D8%A9_%D8%A3%D8%AC%D9%88%D8%A7%D8%A1_vot9oq.png',
    apple: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783579020/%D8%B4%D8%B1%D9%83%D8%A9_%D8%A3%D8%AC%D9%88%D8%A7%D8%A1_vot9oq.png',
  },
  openGraph: {
    title: 'شركة أجواء | أفضل شركة تنظيف منازل وشركات بالرياض',
    description: 'شركة أجواء للنظافة والتعقيم بالرياض. خدمات تنظيف منازل، فلل، شركات ومكافحة حشرات بأحدث التقنيات وأفضل الأسعار. اتصل: 0533263551',
    url: 'https://cleanajwa.com',
    siteName: 'شركة أجواء',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783579020/%D8%B4%D8%B1%D9%83%D8%A9_%D8%A3%D8%AC%D9%88%D8%A7%D8%A1_vot9oq.png',
        width: 800,
        height: 600,
        alt: 'شركة أجواء للتنظيف بالرياض',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة أجواء | أفضل شركة تنظيف منازل وشركات بالرياض',
    description: 'شركة أجواء للنظافة والتعقيم بالرياض. خدمات تنظيف منازل، فلل، شركات ومكافحة حشرات بأحدث التقنيات وأفضل الأسعار. اتصل: 0533263551',
    images: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783579020/%D8%B4%D8%B1%D9%83%D8%A9_%D8%A3%D8%AC%D9%88%D8%A7%D8%A1_vot9oq.png'],
  },
  alternates: {
    canonical: 'https://cleanajwa.com',
    languages: {
      'ar': 'https://cleanajwa.com',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="font-sans bg-gray-50 text-gray-900 min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
