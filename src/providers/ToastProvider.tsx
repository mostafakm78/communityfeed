'use client';

import { Toaster } from 'sonner';

export default function ToasterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <Toaster />
    </main>
  );
}
