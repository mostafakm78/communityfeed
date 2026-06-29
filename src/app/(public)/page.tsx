import HeaderTitle from '@/components/shared/HeaderTitle';
import QuestionsFilter from '@/featurs/questions/components/questionfilters/QuestionsFilters';
import QuestionsList from '@/featurs/questions/components/questionslist/QuestionsList';

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeaderTitle />
      <div className="flex xl:flex-row flex-col items-start">
        <div className="xl:w-3/12 w-full xl:sticky xl:top-10">
          <QuestionsFilter />
        </div>
        <div className="xl:w-9/12 w-full pb-10">
          <QuestionsList />
        </div>
      </div>
    </div>
  );
}
