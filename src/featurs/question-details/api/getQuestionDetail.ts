import { cache } from 'react';
import api from '@/lib/axios';
import { QuestionDetailResponse } from '../types/questionDetail';

// Fetches a single question by ID; React cache deduplicates calls within the same render
export const getQuestionDetail = cache(async (id: string) => {
  const { data } = await api.get<QuestionDetailResponse>(`/community/questions/${id}/`);
  return data.data;
});
