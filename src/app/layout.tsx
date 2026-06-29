import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar/Navbar';

const vazirmatn = Vazirmatn({
  variable: '--font-vazir',
  subsets: ['latin', 'arabic'],
});

export const metadata: Metadata = {
  title: 'پرسش و پاسخ',
  description: 'بخش پرس و پاسخ تیم محصول داناجو',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} h-full antialiased`}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
