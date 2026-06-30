import { getQuestionsCached } from '../../api/getQuestionsCached';
import { QUESTIONS_ENDPOINT } from '../../api/getQuestions';
import Books from './Books';

const FilterByTags = async () => {
  const { results } = await getQuestionsCached(QUESTIONS_ENDPOINT);
  const books = Array.from(new Set(results.map((question) => question.book).filter((book): book is string => Boolean(book))));

  return (
    <div className="bg-secondary gap-y-4 flex flex-col p-6 rounded-xl w-full">
      <span>دسته‌بندی براساس:</span>
      <div className="flex flex-wrap">
        <Books books={books} />
      </div>
    </div>
  );
};

export default FilterByTags;
