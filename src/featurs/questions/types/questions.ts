export type QuestionCardProps = {
  id: number;
  question: string;
  author: string;
  created_at: string;
  answers: number;
  study_field: string;
  book?: string;
};

export type QuestionApiItem = {
  id: number;
  content: string;
  created_at: string;
  answers: string[];
  user: {
    full_name: string;
  };
  study_field: string;
  book?: string;
};

export type QuestionsApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: QuestionApiItem[];
};
