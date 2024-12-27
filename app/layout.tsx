import Navbar from '@/components/Navbar';  // Ensure Navbar is imported correctly
import { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/globals.css';
import AnnouncementBanner from '@/components/AnnouncementBanner';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Rue',
  description: 'AI Driven Compliance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ ['--announcement-height' as string]: '0px' }}
      >
        <AnnouncementBanner />
        <Navbar />  {/* Add Navbar below the AnnouncementBanner */}
        {children}
      </body>
    </html>
  );
}
