import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <div className="relative md:w-125 w-full h-full">
      <Search className="absolute size-4 md:size-5 right-3 top-1/2 -translate-y-1/2" />
      <Input className="md:pr-10 pr-8 bg-background h-full w-full text-xs" placeholder="سوال رو جستجو کن..." />
    </div>
  );
};

export default SearchInput;
