import { infiniteQueryOptions } from '@tanstack/react-query';
import { getQuestions, QUESTIONS_ENDPOINT } from './getQuestions';

export const questionsInfiniteQueryOptions = infiniteQueryOptions({
  queryKey: ['questions'],
  queryFn: ({ pageParam }) => getQuestions(pageParam),
  initialPageParam: QUESTIONS_ENDPOINT,
  getNextPageParam: (lastPage) => lastPage.next,
});
