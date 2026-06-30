import api from '@/lib/axios';
import { NewAnswerFormData } from '../types/newanswer';

export const QUESTIONS_ENDPOINT = '/community/questions/';

// Submits a new question with its content and associated book to the API
export async function postQuestion({ content, book }: NewAnswerFormData) {
  const { data } = await api.post(QUESTIONS_ENDPOINT, { content, book });
  return data;
}
