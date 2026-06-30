import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const Books = ({ book }: { book?: string }) => {
  if (!book) return null;

  return (
    <div className="space-x-2 space-y-2">
      <Badge asChild className="py-3.5 px-3 bg-blue-800/70">
        <Link href={`/?tag=${book}`}>{book}</Link>
      </Badge>
    </div>
  );
};

export default Books;
