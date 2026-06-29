'use client';

import { usePathname } from 'next/navigation';
import { useMobile } from '@/hooks/useMobile';
import Logo from './Logo';
import NewAsk from './NewAsk';
import SearchInput from './SearchInput';
import NewAskFlotter from './NewAskFlotter';

const Navbar = () => {
  const pathname = usePathname();
  const isMobile = useMobile();

  return (
    <header className="w-full h-18 bg-secondary border-b border-foreground/20 ">
      <nav className="w-full h-full flex md:gap-x-0 gap-x-4 items-center justify-between md:px-6 px-2 py-3 container mx-auto">
        <Logo />
        <SearchInput />
        {isMobile ? <NewAskFlotter disabled={pathname === '/new-answer' ? true : false} /> : <NewAsk disabled={pathname === '/new-answer' ? true : false} />}
      </nav>
    </header>
  );
};

export default Navbar;
