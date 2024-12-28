'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-white text-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Best-in-class compliance platform for your business
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-600">
            Reduce onboarding time, increase operational efficiency and unlock growth without compromising on risk
          </p>
          <Link href="https://calendly.com/dpicciolini/rue-1">
            <Button size="lg" className="text-lg px-8 group">
              Schedule a demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <Image
            src="/image-8.jpeg"
            alt="Rue Platform Interface"
            width={1200}
            height={675}
            className="rounded-lg shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
