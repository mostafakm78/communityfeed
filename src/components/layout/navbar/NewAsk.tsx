import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NewAsk = ({ disabled }: { disabled: boolean }) => {
  if (disabled) {
    return (
      <Button disabled className="h-full w-37 text-lg">
        + ثبت سوال
      </Button>
    );
  }

  return (
    <Button className="h-full w-37 text-lg" asChild>
      <Link href="/new-answer">+ ثبت سوال</Link>
    </Button>
  );
};

export default NewAsk;
