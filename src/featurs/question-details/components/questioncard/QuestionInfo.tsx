import { toRelativeTime } from '@/lib/utils';

const QuestionInfo = ({ author, created_at }: { author: string | null; created_at: string }) => {
  const displayName = author ?? 'بدون نام';

  return (
    // Author name and relative post date row
    <div className="flex items-center justify-between">
      {/* Author display name */}
      <div className="flex items-center gap-x-3">
        <span className="text-sm">{displayName}</span>
      </div>
      {/* Relative time since posted */}
      <span className='text-xs opacity-75 relative pr-3.5 after:content-[""] after:absolute after:bg-foreground after:w-1 after:h-1 after:right-0 after:rounded-full after:top-1/2 after:-translate-y-1/2'>{toRelativeTime(created_at)}</span>
    </div>
  );
};

export default QuestionInfo;
