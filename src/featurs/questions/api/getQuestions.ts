import api from '@/lib/axios';
import { QuestionsApiResponse } from '../types/questions';

// Default endpoint with newest-first ordering
export const QUESTIONS_ENDPOINT = '/community/questions/?ordering=-created_at';

// Fetches a single page of questions from the given URL (supports cursor-based pagination)
export async function getQuestions(pageUrl: string = QUESTIONS_ENDPOINT) {
  const { data } = await api.get<QuestionsApiResponse>(pageUrl);
  return data;
}
