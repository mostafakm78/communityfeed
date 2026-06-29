import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <div className="relative w-125 h-full">
      <Search className="absolute right-3 top-1/2 -translate-y-1/2" />
      <Input className="pr-10 bg-background hidden lg:block  h-full w-full" placeholder="سوال رو جستجو کن..." />
    </div>
  );
};

export default SearchInput;
