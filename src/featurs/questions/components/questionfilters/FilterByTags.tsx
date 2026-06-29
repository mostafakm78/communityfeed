import Tags from './Tags';

const FilterByTags = () => {
  return (
    <div className="bg-secondary gap-y-4 flex flex-col p-6 rounded-xl w-full">
      <span>دسته‌بندی براساس:</span>
      <div className="flex flex-wrap">
        <Tags />
      </div>
    </div>
  );
};

export default FilterByTags;
