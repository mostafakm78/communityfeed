import { Separator } from '@/components/ui/separator';
import { QuestionDetailAnswer } from '../../types/questionDetail';
import AnswerCount from './AnswerCount';
import AnswerCard from './AnswerCard';

const AnswerList = ({ answers }: { answers: QuestionDetailAnswer[] }) => {
  return (
    <section>
      <AnswerCount count={answers.length} />
      <Separator />
      {answers.map((answer) => (
        <AnswerCard key={answer.id} content={answer.content} />
      ))}
    </section>
  );
};

export default AnswerList;
