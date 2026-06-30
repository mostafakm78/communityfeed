import { Skeleton } from '@/components/ui/skeleton';

const FiltersSkeleton = () => {
  return (
    // Loading skeleton mirroring the QuestionsFilter section layout
    <section className="flex md:flex-row xl:flex-col xl:gap-x-0 md:gap-x-5 flex-col w-full px-6 mt-14 gap-y-6">
      {/* Sort widget skeleton */}
      <div className="bg-secondary flex gap-y-4 flex-col p-6 rounded-xl w-full">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>
      {/* Tag filter widget skeleton */}
      <div className="bg-secondary gap-y-4 flex flex-col p-6 rounded-xl w-full">
        <Skeleton className="h-4 w-32" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-8 w-16 rounded" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FiltersSkeleton;
