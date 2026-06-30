import { Badge } from '@/components/ui/badge';
import { QuestionCardProps } from '@/featurs/questions/types/questions';
import Link from 'next/link';

const Tags = ({ book }: Pick<QuestionCardProps, 'book'>) => {
  if (!book) return null;

  return (
    <div className="space-x-2 space-y-2">
      <Badge asChild className="py-3.5 px-3 bg-blue-800/70">
        <Link href={`/?tag=${book}`}>{book}</Link>
      </Badge>
    </div>
  );
};

export default Tags;
