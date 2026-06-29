import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NewAsk = () => {
  return (
    <Button className='h-full w-37 text-lg' asChild>
      <Link href='/'>+ ثبت سوال</Link>
    </Button>
  );
};

export default NewAsk;
