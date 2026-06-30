import { unstable_cache } from 'next/cache';
import { getQuestions } from './getQuestions';

export const getQuestionsCached = unstable_cache(getQuestions, ['questions'], {
  revalidate: 600,
});
