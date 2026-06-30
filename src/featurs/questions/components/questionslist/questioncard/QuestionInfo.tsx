import { QuestionCardProps } from '@/featurs/questions/types/questions';

const QuestionInfo = ({ author, created_at }: Pick<QuestionCardProps, 'author' | 'created_at'>) => {
  return (
    <div className="flex items-center gap-x-3">
      <span className="text-sm">{author === null ? 'بدون نام' : author}</span>
      <span className='text-xs opacity-75 relative pr-3.5 after:content-[""] after:absolute after:bg-foreground after:w-1 after:h-1 after:right-0 after:rounded-full after:top-1/2 after:-translate-y-1/2'>{created_at}</span>
    </div>
  );
};

export default QuestionInfo;
