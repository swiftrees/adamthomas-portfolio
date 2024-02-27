import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import Providers from '@/components/common/providers';
import MatrixParticles from '@/components/common/matrix-particles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adam Thomas Portfolio',
  description:
    'Full Stack Web Developer - South Wales, UK - React, Next.js, Typescript, Node.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900`}>
        <Providers>
          <MatrixParticles
            className="touch-none pointer-events-none lg:pointer-events-auto block absolute inset-0 -z-10 opacity-50"
            quantity={200}
          />
          <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-grow mb-28 lg:mb-16">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
