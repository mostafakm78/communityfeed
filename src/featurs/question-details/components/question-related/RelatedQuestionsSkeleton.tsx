import { Skeleton } from '@/components/ui/skeleton';

const RelatedQuestionsSkeleton = () => {
  return (
    <section className="flex flex-col w-full px-6 gap-y-6">
      <div className="bg-secondary flex gap-y-4 flex-col p-6 rounded-xl w-full">
        <Skeleton className="h-4 w-24" />
        <div className="flex flex-col gap-y-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-3 w-full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedQuestionsSkeleton;
