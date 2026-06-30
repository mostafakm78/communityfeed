'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Error = ({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    // Full-page error state
    <section className="container mx-auto flex flex-col items-center justify-center gap-y-4 px-6 py-20 text-center">
      {/* Error heading */}
      <h2 className="text-lg font-medium">مشکلی در دریافت سوالات پیش آمد</h2>
      {/* Error description */}
      <p className="text-sm text-muted-foreground">لطفاً دوباره تلاش کنید.</p>
      {/* Retry action */}
      <Button onClick={() => unstable_retry()}>تلاش مجدد</Button>
    </section>
  );
};

export default Error;
