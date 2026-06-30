'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { toRelativeTime } from '@/lib/utils';
import { questionsInfiniteQueryOptions } from '../../api/questionsQuery';
import { QuestionApiItem, QuestionCardProps } from '../../types/questions';
import { QuestionCardSkeleton } from './QuestionsSkeleton';
import { Spinner } from '@/components/ui/spinner';

const QuestionCard = dynamic(() => import('./questioncard/QuestionCard'), {
  loading: () => <QuestionCardSkeleton />,
});

const QuestionsListClient = ({ now }: { now: number }) => {
  const searchParams = useSearchParams();
  const sortby = searchParams.get('sortby') ?? 'newest';
  const tags = searchParams.getAll('tag');

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery(questionsInfiniteQueryOptions);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  const [showSpinner, setShowSpinner] = useState(false);

  // Delay showing the spinner to avoid a flash for fast page loads
  useEffect(() => {
    const timeout = setTimeout(() => setShowSpinner(isFetchingNextPage), isFetchingNextPage ? 400 : 0);
    return () => clearTimeout(timeout);
  }, [isFetchingNextPage]);

  // Observe the sentinel element and fetch the next page when it enters the viewport
  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // Initial loading state
  if (status === 'pending') {
    return (
      <div className="flex items-center">
        <p className="text-center py-10 text-muted-foreground">در حال بارگذاری...</p>
        <Spinner />
      </div>
    );
  }

  // Error state
  if (status === 'error') {
    return <p className="text-center py-10 text-destructive">خطا در دریافت سوالات</p>;
  }

  let items: QuestionApiItem[] = data.pages.flatMap((page) => page.results);

  // Apply tag filter
  if (tags.length > 0) {
    items = items.filter((item) => item.book && tags.includes(item.book));
  }

  // Apply sort order
  items = [...items].sort((a, b) =>
    sortby === 'most-asnwered'
      ? b.answers.length - a.answers.length
      : new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  const questions: QuestionCardProps[] = items.map((item) => ({
    id: item.id,
    question: item.content,
    author: item.user.full_name,
    answers: item.answers.length,
    created_at: toRelativeTime(item.created_at, now),
    study_field: item.study_field,
    book: item.book,
  }));

  return (
    <>
      {/* Ordered list of question cards */}
      <ul className="flex flex-col lg:gap-y-3 gap-y-10">
        {questions.map((item) => (
          <li key={item.id}>
            <QuestionCard {...item} />
          </li>
        ))}
      </ul>
      {/* Intersection observer sentinel for infinite scroll */}
      <div ref={loadMoreRef} />
      {/* Load-more spinner shown after a brief delay */}
      {showSpinner && (
        <div className="flex items-center justify-center">
          <p className="text-center py-10 text-muted-foreground">در حال بارگذاری...</p>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default QuestionsListClient;
