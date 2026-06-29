import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const TagsData = [
  { id: 1, name: 'react' },
  { id: 2, name: 'typescript' },
  { id: 3, name: 'javascript' },
  { id: 4, name: 'css' },
  { id: 5, name: 'next.js' },
  { id: 6, name: 'tailwind' },
  { id: 7, name: 'html' },
  { id: 8, name: 'vite' },
  { id: 9, name: 'vue' },
  { id: 10, name: 'angular' },
];

const Tags = () => {
  return (
    <div className="space-x-2 space-y-2">
      {TagsData.map((tag) => (
        <Badge key={tag.id} asChild className="py-3.5 px-3 bg-blue-800/70">
          <Link href={`/?tag=${tag}`}>{tag.name}</Link>
        </Badge>
      ))}
    </div>
  );
};

export default Tags;
