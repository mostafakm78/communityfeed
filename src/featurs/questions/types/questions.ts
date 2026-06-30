export type QuestionCardProps = {
  id: number;
  question: string;
  author: string;
  tags?: string[];
  created_at: string;
  answers: number;
};

export type QuestionApiItem = {
  id: number;
  content: string;
  created_at: string;
  answers: string[];
  user: {
    full_name: string;
  };
};

export type QuestionsApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: QuestionApiItem[];
};
