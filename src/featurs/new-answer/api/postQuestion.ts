import api from '@/lib/axios';
import { NewAnswerFormData } from '../types/newanswer';

export const QUESTIONS_ENDPOINT = '/community/questions/';

export async function postQuestion({ content, book }: NewAnswerFormData) {
  const { data } = await api.post(QUESTIONS_ENDPOINT, { content, book });
  return data;
}
