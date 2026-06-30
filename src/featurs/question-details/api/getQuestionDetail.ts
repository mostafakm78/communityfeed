import { cache } from 'react';
import api from '@/lib/axios';
import { QuestionDetailResponse } from '../types/questionDetail';

// Cached per-request so QuestionDetails and QuestionsRelated (both fetching the
// same id) only hit the network once.
export const getQuestionDetail = cache(async (id: string) => {
  const { data } = await api.get<QuestionDetailResponse>(`/community/questions/${id}/`);
  return data.data;
});
