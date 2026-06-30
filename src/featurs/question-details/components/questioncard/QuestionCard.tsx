import { Separator } from '@/components/ui/separator';
import Books from './Books';
import QuestionInfo from './QuestionInfo';

type QuestionCardProps = {
  content: string;
  book?: string;
  author: string | null;
  created_at: string;
};

const QuestionCard = ({ content, book, author, created_at }: QuestionCardProps) => {
  return (
    // Layout wrapper for centering the question article
    <div className="flex flex-col items-center">
      {/* Question content card */}
      <article className="w-full flex flex-col gap-x-6 min-h-60 shrink-0 rounded-xl bg-secondary border border-foreground/20 p-4">
        {/* Full question text */}
        <p className="w-full">{content}</p>
        {/* Footer: divider, book tag, and author info */}
        <div className="flex flex-col gap-y-4 mt-auto justify-between">
          <Separator className="mt-2 xl:mt-0" orientation="horizontal" />
          <Books book={book} />
          <QuestionInfo author={author} created_at={created_at} />
        </div>
      </article>
    </div>
  );
};

export default QuestionCard;
