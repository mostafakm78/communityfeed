import { Skeleton } from '@/components/ui/skeleton';

const RelatedQuestionsSkeleton = () => {
  return (
    // Skeleton matching the related questions sidebar layout
    <section className="flex flex-col w-full px-6 gap-y-6">
      <div className="bg-secondary flex gap-y-4 flex-col p-6 rounded-xl w-full">
        {/* Heading skeleton */}
        <Skeleton className="h-4 w-24" />
        {/* Related question link skeletons */}
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
