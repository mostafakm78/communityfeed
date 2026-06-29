import AnswerList from './answerlist/AnswerList';
import QuestionCard from './questioncard/QuestionCard';


const QuestionDetails = () => {
  return (
    <section className="px-6">
      <QuestionCard />
      <AnswerList />
    </section>
  );
};

export default QuestionDetails;
