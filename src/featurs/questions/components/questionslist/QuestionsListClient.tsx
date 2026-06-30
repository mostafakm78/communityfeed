'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { toRelativeTime } from '@/lib/utils';
import { questionsInfiniteQueryOptions } from '../../api/questionsQuery';
import { QuestionCardProps } from '../../types/questions';
import QuestionCard from './questioncard/QuestionCard';
import { Spinner } from '@/components/ui/spinner';

const QuestionsListClient = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery(questionsInfiniteQueryOptions);

  const loadMoreRef = useRef<HTMLDivElement>(null);

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

  const questions: QuestionCardProps[] = data.pages.flatMap((page) =>
    page.results.map((item) => ({
      id: item.id,
      question: item.content,
      author: item.user.full_name,
      answers: item.answers.length,
      created_at: toRelativeTime(item.created_at),
    }))
  );

  return (
    <div className="flex flex-col lg:gap-y-3 gap-y-10">
      {questions.map((item) => (
        <QuestionCard key={item.id} {...item} />
      ))}
      <div ref={loadMoreRef} />
      {isFetchingNextPage && (
        <div className="flex items-center justify-center">
          <p className="text-center py-10 text-muted-foreground">در حال بارگذاری...</p>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default QuestionsListClient;
