import api from '@/lib/axios';
import { SearchQuestionsResponse } from '../types/questions';

export const SEARCH_QUESTIONS_ENDPOINT = '/community/questions/search/';

// Searches questions by query string; supports request cancellation via AbortSignal
export async function searchQuestions(query: string, signal?: AbortSignal) {
  const { data } = await api.get<SearchQuestionsResponse>(SEARCH_QUESTIONS_ENDPOINT, {
    params: { q: query },
    signal,
  });
  return data;
}
