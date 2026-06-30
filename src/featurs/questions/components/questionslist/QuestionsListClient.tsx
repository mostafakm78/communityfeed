'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { toRelativeTime } from '@/lib/utils';
import { questionsInfiniteQueryOptions } from '../../api/questionsQuery';
import { QuestionApiItem, QuestionCardProps } from '../../types/questions';
import QuestionCard from './questioncard/QuestionCard';
import { Spinner } from '@/components/ui/spinner';

const QuestionsListClient = ({ now }: { now: number }) => {
  const searchParams = useSearchParams();
  const sortby = searchParams.get('sortby') ?? 'newest';
  const tags = searchParams.getAll('tag');

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery(questionsInfiniteQueryOptions);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSpinner(isFetchingNextPage), isFetchingNextPage ? 400 : 0);
    return () => clearTimeout(timeout);
  }, [isFetchingNextPage]);

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

  if (status === 'pending') {
    return (
      <div className="flex items-center">
        <p className="text-center py-10 text-muted-foreground">در حال بارگذاری...</p>
        <Spinner />
      </div>
    );
  }

  if (status === 'error') {
    return <p className="text-center py-10 text-destructive">خطا در دریافت سوالات</p>;
  }

  let items: QuestionApiItem[] = data.pages.flatMap((page) => page.results);

  if (tags.length > 0) {
    items = items.filter((item) => item.book && tags.includes(item.book));
  }

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
    <div className="flex flex-col lg:gap-y-3 gap-y-10">
      {questions.map((item) => (
        <QuestionCard key={item.id} {...item} />
      ))}
      <div ref={loadMoreRef} />
      {showSpinner && (
        <div className="flex items-center justify-center">
          <p className="text-center py-10 text-muted-foreground">در حال بارگذاری...</p>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default QuestionsListClient;
