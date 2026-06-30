import { Separator } from '@/components/ui/separator';
import AnswerCount from './AnswerCount';
import QuestionInfo from './QuestionInfo';
import Link from 'next/link';
import { QuestionCardProps } from '@/featurs/questions/types/questions';
import Book from './Book';

const QuestionCard = ({ question, author, created_at, answers, id, book }: QuestionCardProps) => {
  return (
    // Individual question card
    <article className="w-full relative flex lg:flex-row flex-col gap-x-6 min-h-50 shrink-0 rounded-xl bg-secondary border border-foreground/20 p-4 max-lg:pt-10">
      {/* Answer count badge */}
      <AnswerCount answers={answers} />
      <Separator className="hidden lg:block" orientation="vertical" />
      {/* Question body */}
      <div className="flex flex-col justify-between flex-1 lg:gap-y-0 gap-y-4 min-w-0">
        <p>{question}</p>
        {/* Footer: author info, tags, and detail link */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-x-4 lg:flex-row gap-y-4 lg:gap-y-0 items-center justify-between">
            <QuestionInfo author={author} created_at={created_at} />
            <Book book={book} />
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
