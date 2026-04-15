import type { Metadata, Viewport } from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  title: 'شركة أجواء للنظافة والتعقيم الشامل | الرياض',
  description: 'شركة أجواء للنظافة والتعقيم الشامل في الرياض - خدمات تنظيف المنازل والفلل والشركات ومكافحة الحشرات باحترافية عالية. اتصل: 0533263551',
  keywords: 'شركة نظافة الرياض، تنظيف منازل الرياض، تنظيف فلل الرياض، شركة تنظيف، مكافحة حشرات الرياض',
  icons: {
    icon: 'https://cleanajwa.com/wp-content/uploads/2026/03/اجواء-68x58.png',
    shortcut: 'https://cleanajwa.com/wp-content/uploads/2026/03/اجواء-68x58.png',
    apple: 'https://cleanajwa.com/wp-content/uploads/2026/03/اجواء-68x58.png',
  },
  openGraph: {
    title: 'شركة أجواء للنظافة والتعقيم الشامل | الرياض',
    description: 'شركة أجواء للنظافة والتعقيم الشامل في الرياض - خدمات تنظيف المنازل والفلل والشركات ومكافحة الحشرات باحترافية عالية.',
    url: 'https://cleanajwa.com',
    siteName: 'شركة أجواء',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة أجواء للنظافة والتعقيم الشامل | الرياض',
    description: 'شركة أجواء للنظافة والتعقيم الشامل في الرياض - خدمات تنظيف المنازل والفلل والشركات ومكافحة الحشرات باحترافية عالية.',
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
      </body>
    </html>
  );
}
