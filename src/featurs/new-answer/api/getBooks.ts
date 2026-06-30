import { getQuestions, QUESTIONS_ENDPOINT } from '@/featurs/questions/api/getQuestions';

// Derives the unique, non-null book list from the questions API response
export async function getBooks(): Promise<string[]> {
  const { results } = await getQuestions(QUESTIONS_ENDPOINT);
  return Array.from(new Set(results.map((question) => question.book).filter((book): book is string => Boolean(book))));
}
