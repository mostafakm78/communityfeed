const QuestionInfo = ({ author, created_at }: { author: string; created_at: string }) => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="w-8 h-8 text-xs flex items-center justify-center bg-amber-200 rounded-full">{author[0]}</div>
      <span className="text-sm">{author}</span>
      <span className='text-xs opacity-75 relative pr-3.5 after:content-[""] after:absolute after:bg-foreground after:w-1 after:h-1 after:right-0 after:rounded-full after:top-1/2 after:-translate-y-1/2'>{created_at}</span>
    </div>
  );
};

export default QuestionInfo;
