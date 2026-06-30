import { infiniteQueryOptions } from '@tanstack/react-query';
import { getQuestions, QUESTIONS_ENDPOINT } from './getQuestions';

// Infinite query config: uses the API's next URL as the cursor for each subsequent page
export const questionsInfiniteQueryOptions = infiniteQueryOptions({
  queryKey: ['questions'],
  queryFn: ({ pageParam }) => getQuestions(pageParam),
  initialPageParam: QUESTIONS_ENDPOINT,
  getNextPageParam: (lastPage) => lastPage.next,
});
