import { cache } from 'react';
import api from '@/lib/axios';
import { QuestionDetailResponse } from '../types/questionDetail';


export const getQuestionDetail = cache(async (id: string) => {
  const { data } = await api.get<QuestionDetailResponse>(`/community/questions/${id}/`);
  return data.data;
});
