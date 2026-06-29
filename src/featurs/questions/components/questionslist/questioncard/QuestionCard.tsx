import { Separator } from '@/components/ui/separator';
import AnswerCount from './AnswerCount';
import Tags from './Tags';
import QuestionInfo from './QuestionInfo';

type QuestionCardProps = {
  id: number;
  question: string;
  author: string;
  tags: string[];
  created_at: string;
};

const QuestionCard = ({ question, author, tags, created_at }: Omit<QuestionCardProps, 'id'>) => {
  return (
    <article className="w-full relative flex lg:flex-row flex-col gap-x-6 min-h-40 shrink-0 rounded-xl bg-secondary border border-foreground/20 p-4 max-lg:pt-10">
      <AnswerCount />
      <Separator className="hidden lg:block" orientation="vertical" />
      <div className="flex flex-col justify-between flex-1 lg:gap-y-0 gap-y-4 min-w-0">
        <span>{question}</span>
        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-center justify-between">
          <Tags tags={tags} />
          <QuestionInfo author={author} created_at={created_at} />
        </div>
      </div>
    </article>
  );
};

export default QuestionCard;
