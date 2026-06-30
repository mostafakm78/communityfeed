import { Separator } from '@/components/ui/separator';
import { QuestionDetailAnswer } from '../../types/questionDetail';
import AnswerCount from './AnswerCount';
import AnswerCard from './AnswerCard';

const AnswerList = ({ answers }: { answers: QuestionDetailAnswer[] }) => {
  return (
    // Answers section below the question card
    <section>
      {/* Total answer count */}
      <AnswerCount count={answers.length} />
      <Separator />
      {/* List of answer cards */}
      <ul>
        {answers.map((answer) => (
          <li key={answer.id}>
            <AnswerCard content={answer.content} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AnswerList;
