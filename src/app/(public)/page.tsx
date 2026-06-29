import HeaderTitle from '@/components/shared/HeaderTitle';
import QuestionsFilter from '@/featurs/questions/components/questionfilters/QuestionsFilters';
import QuestionsList from '@/featurs/questions/components/questionslist/QuestionsList';

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeaderTitle />
      {/* <div className="flex items-start">
        <div className="w-3/12 sticky top-10">
          <QuestionsFilter />
        </div>
        <div className="w-9/12 pb-10">
          <QuestionsList />
        </div>
      </div> */}
    </div>
  );
}
