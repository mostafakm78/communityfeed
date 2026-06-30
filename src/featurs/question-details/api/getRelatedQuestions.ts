import { getQuestions, QUESTIONS_ENDPOINT } from '@/featurs/questions/api/getQuestions';

// Maximum number of related questions to show in the sidebar
const RELATED_QUESTIONS_LIMIT = 5;

// Fetches questions from the same book, excluding the current question
export async function getRelatedQuestions(book: string, excludeId: number) {
  const { results } = await getQuestions(`${QUESTIONS_ENDPOINT}&book=${encodeURIComponent(book)}`);
  return results.filter((question) => question.id !== excludeId).slice(0, RELATED_QUESTIONS_LIMIT);
}
