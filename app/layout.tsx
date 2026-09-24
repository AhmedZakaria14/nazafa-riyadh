import type { Metadata, Viewport } from 'next';
import { Tajawal } from 'next/font/google';
import Script from 'next/script';
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
      <head>
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

  ttq.load('DAQOJDBC77U77GG15500');
  ttq.page();
}(window, document, 'ttq');
            `,
          }}
        />
      </head>
      <body className="font-sans bg-gray-50 text-gray-900 min-h-screen flex flex-col" suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
