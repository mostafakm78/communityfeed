'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Tags = ({ tags }: { tags: string[] }) => {
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
      {tags.map((tag) => {
        const isActive = activeTags.includes(tag);
        const href = buildToggleHref(tag);

        return (
          <Badge
            key={tag}
            className={cn('py-3.5 px-3 bg-blue-800/70 gap-1.5', isActive && 'bg-blue-500')}
          >
            {isActive ? <span>{tag}</span> : <Link href={href}>{tag}</Link>}
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

export default Tags;
