import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export const QuestionCardSkeleton = () => {
  return (
    <div className="w-full relative flex lg:flex-row flex-col gap-x-6 min-h-50 shrink-0 rounded-xl bg-secondary border border-foreground/20 p-4 max-lg:pt-10">
      <Skeleton className="lg:h-20 lg:w-20 w-20 max-lg:absolute max-lg:-top-6 h-10 lg:my-auto rounded-xl" />
      <Separator className="hidden lg:block" orientation="vertical" />
      <div className="flex flex-col justify-between flex-1 lg:gap-y-0 gap-y-4 min-w-0">
        <div className="flex flex-col gap-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-3 items-center">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-3 w-16" />
          </div>
          <Skeleton className="h-8 w-28 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

const QuestionsSkeleton = () => {
  return (
    <section className="px-6">
      <Skeleton className="h-4 w-32 mt-4 mb-10 lg:mb-4" />
      <div className="flex flex-col lg:gap-y-3 gap-y-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <QuestionCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

export default QuestionsSkeleton;
