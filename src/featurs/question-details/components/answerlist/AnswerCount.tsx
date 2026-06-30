import { toPersian } from '@/lib/utils';

const AnswerCount = ({ count }: { count: number }) => {
  // Displays the total number of answers as a label
  return <p className="block text-lg opacity-70 font-bold my-10">{toPersian(count)} جواب</p>;
};

export default AnswerCount;
