'use client';

import { usePathname } from 'next/navigation';
import Logo from './Logo';
import NewAsk from './NewAsk';
import SearchInput from './SearchInput';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full h-18 bg-secondary border-b border-foreground/20 ">
      <nav className="w-full h-full flex items-center justify-between px-6 py-3 container mx-auto">
        <Logo />
        <SearchInput />
        <NewAsk disabled={pathname === '/new-answer' ? true : false} />
      </nav>
    </header>
  );
};

export default Navbar;
