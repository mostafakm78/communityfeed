import { unstable_cache } from 'next/cache';
import { getQuestions } from './getQuestions';

// Server-side cached wrapper around getQuestions; revalidates every 10 minutes
export const getQuestionsCached = unstable_cache(getQuestions, ['questions'], {
  revalidate: 600,
});
