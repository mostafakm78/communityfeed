import { MessageSquareText } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center h-full gap-x-2">
      <MessageSquareText className="bg-primary fill-background size-10 p-1 rounded-lg" />
      <span className="text-2xl font-bold">جامعه کاربری</span>
    </Link>
  );
};

export default Logo;
