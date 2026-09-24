'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import { trackTikTokPage } from '@/lib/tiktok';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = 
    pathname === '/landingpage' || 
    pathname === '/landing-page' || 
    pathname?.startsWith('/landingpage') || 
    pathname?.startsWith('/landing-page');

  useEffect(() => {
    trackTikTokPage();
  }, [pathname]);

  return (
    <>
      {!isLandingPage && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isLandingPage && <Footer />}
      {!isLandingPage && <FloatingContactButtons />}
    </>
  );
}
