const QuestionInfo = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="w-8 h-8 text-xs flex items-center justify-center bg-amber-200 rounded-full">م‌ک</div>
        <span className="text-sm">مصطفی کمری</span>
      </div>
      <span className='text-xs opacity-75 relative pr-3.5 after:content-[""] after:absolute after:bg-foreground after:w-1 after:h-1 after:right-0 after:rounded-full after:top-1/2 after:-translate-y-1/2'>4 روز پیش</span>
    </div>
  );
};

export default QuestionInfo;
