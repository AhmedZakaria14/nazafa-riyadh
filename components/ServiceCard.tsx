import Link from 'next/link';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="p-6 flex-grow flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-blue-50 text-blue-800 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link 
          href={href}
          className="inline-block bg-blue-50 text-blue-800 hover:bg-blue-800 hover:text-white font-semibold px-6 py-2 rounded-lg transition-colors w-full"
        >
          اعرف أكثر
        </Link>
      </div>
    </div>
  );
}
