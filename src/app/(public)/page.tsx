import QuestionsFilter from '@/featurs/questions/components/questionfilters/QuestionsFilters';
import QuestionsHeader from '@/featurs/questions/components/QuestionsHeader';
import QuestionsList from '@/featurs/questions/components/questionslist/QuestionsList';

export default function Home() {
  return (
    <div className="container mx-auto">
      <QuestionsHeader />
      <div className="flex items-start">
        <div className="w-3/12 sticky top-10">
          <QuestionsFilter />
        </div>
        <div className="w-9/12 pb-10">
          <QuestionsList />
        </div>
      </div>
    </div>
  );
}
