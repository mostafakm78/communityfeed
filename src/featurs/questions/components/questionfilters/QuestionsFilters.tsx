import FilterByTags from './FilterByTags';
import SortBy from './SortBy';

const QuestionsFilter = () => {
  return (
    // Filter sidebar containing sort and tag filter widgets
    <section className="flex md:flex-row xl:flex-col xl:gap-x-0 md:gap-x-5 flex-col w-full px-6 mt-14 gap-y-6">
      {/* Sort order selector */}
      <SortBy />
      {/* Tag filter by book */}
      <FilterByTags />
    </section>
  );
};

export default QuestionsFilter;
