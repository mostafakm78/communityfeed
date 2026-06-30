'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const SortBy = () => {
  const searchParams = useSearchParams();
  const sortby = searchParams.get('sortby') ?? 'newest';

  const buildSortHref = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sortby', value);
    return `/?${params.toString()}`;
  };

  return (
    <div className="bg-secondary flex gap-y-4 flex-col p-6 rounded-xl w-full">
      <span>مرتب‌سازی براساس:</span>
      <Link
        href={buildSortHref('newest')}
        className={cn(sortby === 'newest' && 'bg-blue-300 rounded py-1 px-2')}
      >
        جدیدترین
      </Link>
      <Link
        href={buildSortHref('most-asnwered')}
        className={cn(sortby === 'most-asnwered' && 'bg-blue-300 rounded py-1 px-2')}
      >
        پرپاسخ ترین‌ها
      </Link>
    </div>
  );
};

export default SortBy;
