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
    <div className="container mx-auto flex flex-col items-center justify-center gap-y-4 px-6 py-20 text-center">
      <h2 className="text-lg font-medium">مشکلی در دریافت سوالات پیش آمد</h2>
      <p className="text-sm text-muted-foreground">لطفاً دوباره تلاش کنید.</p>
      <Button onClick={() => unstable_retry()}>تلاش مجدد</Button>
    </div>
  );
};

export default Error;
