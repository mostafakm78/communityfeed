import FilterByTags from './FilterByTags';
import SortBy from './SortBy';

const QuestionsFilter = () => {
  return (
    <section className="flex md:flex-row xl:flex-col xl:gap-x-0 md:gap-x-5 flex-col w-full px-6 mt-14 gap-y-6">
      <SortBy />
      <FilterByTags />
    </section>
  );
};

export default QuestionsFilter;
