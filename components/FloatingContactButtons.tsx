'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingContactButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show buttons after a small delay for a nice entrance
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const buttons = [
    {
      id: 'whatsapp',
      icon: <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />,
      href: 'https://api.whatsapp.com/send/?phone=966533263551',
      color: 'bg-green-500',
      label: 'واتساب',
      delay: 0.1,
    },
    {
      id: 'phone',
      icon: <Phone className="w-6 h-6 md:w-7 md:h-7" />,
      href: 'tel:0533263551',
      color: 'bg-blue-600',
      label: 'اتصال',
      delay: 0.2,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
      <AnimatePresence>
        {isVisible && (
          <>
            {buttons.map((button) => (
              <motion.a
                key={button.id}
                href={button.href}
                target={button.id === 'whatsapp' ? '_blank' : undefined}
                rel={button.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: button.delay,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full text-white shadow-2xl ${button.color} transition-shadow hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]`}
                aria-label={button.label}
              >
                {/* Tooltip */}
                <span className="absolute right-full mr-4 px-3 py-1 rounded-lg bg-gray-900 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-gray-700">
                  {button.label}
                </span>

                {/* Pulsing effect for WhatsApp */}
                {button.id === 'whatsapp' && (
                  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none"></span>
                )}
                
                {/* Icon */}
                <div className="relative z-10">
                  {button.icon}
                </div>
              </motion.a>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
