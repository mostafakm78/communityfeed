import { getQuestions, QUESTIONS_ENDPOINT } from '@/featurs/questions/api/getQuestions';

export async function getBooks(): Promise<string[]> {
  const { results } = await getQuestions(QUESTIONS_ENDPOINT);
  return Array.from(new Set(results.map((question) => question.book).filter((book): book is string => Boolean(book))));
}
