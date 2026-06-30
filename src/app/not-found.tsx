import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    // Full-page 404 state
    <section className="container mx-auto flex flex-col items-center justify-center gap-y-4 px-6 py-20 text-center">
      {/* Not-found heading */}
      <h2 className="text-lg font-medium">صفحه مورد نظر پیدا نشد</h2>
      {/* Explanation message */}
      <p className="text-sm text-muted-foreground">صفحه‌ای که دنبالش بودید وجود ندارد یا حذف شده است.</p>
      {/* Link back to home */}
      <Button asChild>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </Button>
    </section>
  );
};

export default NotFound;
