export type QuestionDetailUser = {
  id: number;
  username: string;
  full_name: string | null;
  headline: string | null;
  avatar: string | null;
};

export type QuestionDetailAnswer = {
  id: number;
  user: QuestionDetailUser;
  content: string;
  created_at: string;
};

export type QuestionDetail = {
  id: number;
  content: string;
  study_field: string | null;
  book?: string;
  user: QuestionDetailUser;
  answers: QuestionDetailAnswer[];
  created_at: string;
};

export type QuestionDetailResponse = {
  success: boolean;
  message: string;
  data: QuestionDetail;
};
