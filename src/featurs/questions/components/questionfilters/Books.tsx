'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Books = ({ books }: { books: string[] }) => {
  const searchParams = useSearchParams();
  const activeTags = searchParams.getAll('tag');

  const buildToggleHref = (tag: string) => {
    const nextTags = activeTags.includes(tag) ? activeTags.filter((t) => t !== tag) : [...activeTags, tag];

    const params = new URLSearchParams(searchParams.toString());
    params.delete('tag');
    nextTags.forEach((t) => params.append('tag', t));

    return `/?${params.toString()}`;
  };

  return (
    <div className="space-x-2 space-y-2">
      {books.map((book) => {
        const isActive = activeTags.includes(book);
        const href = buildToggleHref(book);

        return (
          <Badge
            key={book}
            className={cn('py-3.5 px-3 bg-blue-800/70 gap-1.5', isActive && 'bg-blue-500')}
          >
            {isActive ? <span>{book}</span> : <Link href={href}>{book}</Link>}
            {isActive && (
              <Link href={href} aria-label="حذف فیلتر" className="hover:opacity-70">
                <X size={12} />
              </Link>
            )}
          </Badge>
        );
      })}
    </div>
  );
};

export default Books;
