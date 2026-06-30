import { QuestionCardProps } from '@/featurs/questions/types/questions';
import { toPersian } from '@/lib/utils';

const AnswerCount = ({ answers }: Pick<QuestionCardProps, 'answers'>) => {
  return (
    <div className="lg:h-20 lg:w-20 w-20 max-lg:absolute max-lg:-top-6 max-lg:shadow h-10 space-x-1 text-center bg-background lg:my-auto rounded-xl border border-foreground/20 lg:p-4 p-2">
      <span className="lg:block">{toPersian(answers)}</span>
      <span>جواب</span>
    </div>
  );
};

export default AnswerCount;
