import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NewAsk = ({ disabled }: { disabled: boolean }) => {
  // Disabled state when already on the new-answer page
  if (disabled) {
    return (
      <Button disabled className="h-full lg:w-37 w-20 text-xs lg:text-lg">
        + ثبت سوال
      </Button>
    );
  }

  // Active state: navigates to the new question form
  return (
    <Button className="h-full lg:w-37 w-20 text-xs lg:text-lg" asChild>
      <Link href="/new-answer">+ ثبت سوال</Link>
    </Button>
  );
};

export default NewAsk;
