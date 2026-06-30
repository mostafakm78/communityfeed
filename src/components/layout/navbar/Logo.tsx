import { MessageSquareText } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    // Home link wrapping the logo icon and site name
    <Link href="/" className="flex items-center justify-center h-full gap-x-2">
      {/* Logo icon */}
      <MessageSquareText className="bg-primary fill-background size-10 p-1 rounded-lg" />
      {/* Site name, hidden on small screens */}
      <span className="lg:text-2xl text-sm font-bold md:block hidden">جامعه کاربری</span>
    </Link>
  );
};

export default Logo;
