import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NewAsk = ({ disabled }: { disabled: boolean }) => {

  if (disabled) {
    return (
      <Button disabled className="h-full lg:w-37 w-20 text-xs lg:text-lg">
        + ثبت سوال
      </Button>
    );
  }

  return (
    <Button className="h-full lg:w-37 w-20 text-xs lg:text-lg" asChild>
      <Link href="/new-answer">+ ثبت سوال</Link>
    </Button>
  );
};

export default NewAsk;
