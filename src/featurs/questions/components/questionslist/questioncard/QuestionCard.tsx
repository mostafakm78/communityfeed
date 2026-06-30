import { Separator } from '@/components/ui/separator';
import AnswerCount from './AnswerCount';
import QuestionInfo from './QuestionInfo';
import Link from 'next/link';
import { QuestionCardProps } from '@/featurs/questions/types/questions';


const QuestionCard = ({ question, author, created_at, answers, id }: QuestionCardProps) => {
  return (
    <article className="w-full relative flex lg:flex-row flex-col gap-x-6 min-h-50 shrink-0 rounded-xl bg-secondary border border-foreground/20 p-4 max-lg:pt-10">
      <AnswerCount answers={answers} />
      <Separator className="hidden lg:block" orientation="vertical" />
      <div className="flex flex-col justify-between flex-1 lg:gap-y-0 gap-y-4 min-w-0">
        <span>{question}</span>
        <div className="flex items-center justify-between">
          <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-center justify-between">
            <QuestionInfo author={author} created_at={created_at} />
          </div>
          <Link className="bg-blue-500/50 p-2 rounded-lg text-sm hover:bg-blue-500 hover:text-background transition-all duration-300" href={`/${id}`}>
            باز شدن صفحه سوال
          </Link>
        </div>
      </div>
    </article>
  );
};

export default QuestionCard;
