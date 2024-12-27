'use client';

import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isVisible) {
      const height =
        document.querySelector('[data-announcement]')?.getBoundingClientRect()
          .height || 0;
      root.style.setProperty('--announcement-height', `${height}px`);
    } else {
      root.style.setProperty('--announcement-height', '0px');
    }
  }, [isVisible]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#try-api');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 py-3 text-center relative"
      data-announcement
      style={{ zIndex: 9999 }} // Ensure this is above the navbar
    >
      <p className="text-sm font-medium">
        🎉 Exciting news! Our enriched web presence API is now available.{' '}
        <Link href="#try-api" className="underline font-semibold" onClick={handleClick}>
          Try it now
        </Link>
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white"
        aria-label="Close announcement"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
