import HeaderTitle from '@/components/shared/HeaderTitle';
import QuestionsRelated from '@/featurs/question-details/components/question-related/QuestionsFilters';
import QuestionDetails from '@/featurs/question-details/components/QuestionDetails';

export default function QuestionSlug() {
  return (
    <div className="container mx-auto">
      <HeaderTitle />
      <div className="flex items-start">
        <div className="w-3/12 sticky top-10">
          <QuestionsRelated />
        </div>
        <div className="w-9/12 pb-10">
          <QuestionDetails />
        </div>
      </div>
    </div>
  );
}
