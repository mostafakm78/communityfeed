import HeaderTitle from '@/components/shared/HeaderTitle';
import QuestionsRelated from '@/featurs/question-details/components/question-related/QuestionsFilters';
import QuestionDetails from '@/featurs/question-details/components/QuestionDetails';

export default function QuestionSlug() {
  return (
    <div className="container mx-auto">
      <HeaderTitle />
      <div className="flex xl:flex-row flex-col-reverse items-start">
        <div className="xl:w-3/12 w-full xl:sticky xl:top-10 xl:pb-0 pb-10">
          <QuestionsRelated />
        </div>
        <div className="xl:w-9/12 w-full pb-10">
          <QuestionDetails />
        </div>
      </div>
    </div>
  );
}
