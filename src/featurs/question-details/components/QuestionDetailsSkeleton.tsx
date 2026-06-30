import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const QuestionDetailsSkeleton = () => {
  return (
    <section className="px-6">
      <section className="flex flex-col items-center">
        <article className="w-full flex flex-col gap-x-6 min-h-60 shrink-0 rounded-xl bg-secondary border border-foreground/20 p-4">
          <div className="w-full flex flex-col gap-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          <div className="flex flex-col gap-y-4 mt-auto justify-between">
            <Separator className="mt-2 xl:mt-0" orientation="horizontal" />
            <Skeleton className="h-7 w-20 rounded-full" />
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        </article>
      </section>

      <section>
        <Skeleton className="h-6 w-20 my-10" />
        <Separator />
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-full my-4 min-h-40 p-6 bg-secondary rounded-2xl border border-foreground/20 flex flex-col gap-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </section>
    </section>
  );
};

export default QuestionDetailsSkeleton;
