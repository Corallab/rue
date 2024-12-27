'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import BetaSignupModal from './BetaSignupModal';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Navbar() {
  const [showBetaModal, setShowBetaModal] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md"
      style={{ zIndex: 100 }} // Ensure this is below the banner (lower z-index than the banner)
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold text-gray-800 ${inter.className}`}>
              rue
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="https://4ojamhphpgfyx8hw.vercel.app/"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Try Demo
              </Link>
              <Link
                href="https://developer.tryrue.com"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Developers
              </Link>
              <Button
                variant="outline"
                className="text-gray-800 hover:bg-gray-200 transition-all duration-200"
                onClick={() => setShowBetaModal(true)}
              >
                Join the Beta
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BetaSignupModal open={showBetaModal} onOpenChange={setShowBetaModal} />
    </nav>
  );
}
