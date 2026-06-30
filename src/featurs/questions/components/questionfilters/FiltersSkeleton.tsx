import { Skeleton } from '@/components/ui/skeleton';

const FiltersSkeleton = () => {
  return (
    <div className="flex md:flex-row xl:flex-col xl:gap-x-0 md:gap-x-5 flex-col w-full px-6 mt-14 gap-y-6">
      <div className="bg-secondary flex gap-y-4 flex-col p-6 rounded-xl w-full">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>
      <div className="bg-secondary gap-y-4 flex flex-col p-6 rounded-xl w-full">
        <Skeleton className="h-4 w-32" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-8 w-16 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersSkeleton;
