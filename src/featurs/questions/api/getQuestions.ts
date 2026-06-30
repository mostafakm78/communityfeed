import api from '@/lib/axios';
import { QuestionsApiResponse } from '../types/questions';

export const QUESTIONS_ENDPOINT = '/community/questions/?ordering=-created_at';

export async function getQuestions(pageUrl: string = QUESTIONS_ENDPOINT) {
  const { data } = await api.get<QuestionsApiResponse>(pageUrl);
  return data;
}
