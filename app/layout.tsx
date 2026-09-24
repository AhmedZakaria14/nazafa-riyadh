import type { Metadata, Viewport } from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

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
  title: {
    default: 'شركة أجواء للنظافة والتعقيم الشامل بالرياض | اتصل: 0575386029',
    template: '%s | شركة أجواء 0575386029',
  },
  description: 'شركة أجواء للنظافة والتعقيم بالرياض. خدمات تنظيف منازل، فلل، شركات ومكافحة حشرات بأحدث التقنيات وأفضل الأسعار. اتصل الآن: 0575386029',
  keywords: 'شركة تنظيف بالرياض, رقم شركة تنظيف بالرياض 0575386029, أفضل شركة تنظيف بالرياض, شركة نظافة الرياض, تنظيف منازل الرياض, تنظيف فلل الرياض, شركة تنظيف شركات, مكافحة حشرات الرياض, تنظيف مجالس بالرياض, تعقيم منازل, جلي رخام, تنظيف كنب, رش مبيدات بالرياض, أسعار تنظيف المنازل, 0575386029',
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
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'شركة أجواء للنظافة والتعقيم الشامل بالرياض | اتصل: 0575386029',
    description: 'شركة أجواء للنظافة والتعقيم بالرياض. خدمات تنظيف منازل، فلل، شركات ومكافحة حشرات بأحدث التقنيات وأفضل الأسعار. اتصل: 0575386029',
    url: 'https://cleanajwa.com',
    siteName: 'شركة أجواء',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://cleanajwa.com/logo.png',
        width: 512,
        height: 512,
        alt: 'شركة أجواء للتنظيف بالرياض - 0575386029',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة أجواء للنظافة والتعقيم الشامل بالرياض | اتصل: 0575386029',
    description: 'شركة أجواء للنظافة والتعقيم بالرياض. خدمات تنظيف منازل، فلل، شركات ومكافحة حشرات بأحدث التقنيات وأفضل الأسعار. اتصل: 0575386029',
    images: ['https://cleanajwa.com/logo.png'],
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
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
