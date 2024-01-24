import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import './globals.css';

export const metadata: Metadata = {
  title: '一条放了盐的鱼',
  description: '一条放了盐的鱼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-cn">
      <body>
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
