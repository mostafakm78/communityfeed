'use client';

import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderTitle = () => {
  const pathname = usePathname();

  // Home page: display the section heading
  if (pathname === '/') {
    return <h1 className="text-2xl font-bold mt-10 px-6">بخش پرسش و پاسخ</h1>;
  } else if (pathname === '/new-answer') {
    // New answer page: back navigation to home
    return (
      <Link href="/" className="text-xl opacity-70 my-10 flex items-center gap-x-3 font-normal px-6">
        <MoveRight />
        <span>بازگشت</span>
      </Link>
    );
  } else {
    // Detail pages: back navigation to questions list
    return (
      <Link href="/" className="text-xl opacity-70 my-10 flex items-center gap-x-3 font-normal px-6">
        <MoveRight />
        <span>همه سوالات</span>
      </Link>
    );
  }
};

export default HeaderTitle;
