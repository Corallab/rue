'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import BetaSignupModal from './BetaSignupModal';
import { Playfair_Display } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });
const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Navbar() {
  const [showBetaModal, setShowBetaModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md"
      style={{ zIndex: 100 }} // Ensure this is below the banner (lower z-index than the banner)
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold text-gray-800 ${playfairDisplay.className}`}>
              rue
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="https://4ojamhphpgfyx8hw.vercel.app/"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Demo
              </Link>
              <Link
                href="https://developer.tryrue.com"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Developers
              </Link>
              <Link
                href="/sop"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Generate Free SOP
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

        {/* Mobile menu */}
        <div
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="https://4ojamhphpgfyx8hw.vercel.app/"
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Demo
            </Link>
            <Link
              href="https://developer.tryrue.com"
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Developers
            </Link>
            <Link
              href="/sop"
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Generate Free SOP
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

      <BetaSignupModal open={showBetaModal} onOpenChange={setShowBetaModal} />
    </nav>
  );
}
