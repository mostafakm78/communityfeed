import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NewAskFlotter = ({ disabled }: { disabled: boolean }) => {
  if (disabled) {
    return null;
  }

  return (
    <Button className="fixed h-12 z-100 w-18 rounded-lg shadow left-6 bottom-6 text-xs" asChild>
      <Link href="/new-answer">+ ثبت سوال</Link>
    </Button>
  );
};

export default NewAskFlotter;
