'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';

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
