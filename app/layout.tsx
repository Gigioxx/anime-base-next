import type { Metadata } from 'next';

import { GeistSans } from 'geist/font/sans';

import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

import './globals.css';

export const metadata: Metadata = {
  title: 'Anime Base',
  description: 'Your favorite anime, all in one place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={GeistSans.className}>
        <main className='mx-auto max-w-7xl bg-[#0F1117]'>
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
