import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="space-x-2">
      {tags.map((tag) => (
        <Badge key={tag} asChild className="py-3.5 px-3 bg-blue-800/70">
          <Link href={`/?tag=${tag}`}>{tag}</Link>
        </Badge>
      ))}
    </div>
  );
};

export default Tags;
