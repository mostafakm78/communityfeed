'use client';

import { Toaster } from 'sonner';

export default function ToasterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Main content landmark wrapping all page content
    <main>
      {/* Page content rendered by the router */}
      {children}
      {/* Global toast notification container */}
      <Toaster/>
    </main>
  );
}
