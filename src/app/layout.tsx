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
      <body className={inter.className}>
        <Providers>
          <MatrixParticles
            className="hidden lg:block absolute inset-0 -z-10 opacity-30"
            quantity={200}
          />
          <div className="max-h-screen">
            <Nav />
            <main
              className="customMain overflow-y-scroll"
            >
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
