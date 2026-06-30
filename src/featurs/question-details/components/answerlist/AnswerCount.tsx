import { toPersian } from '@/lib/utils';

const AnswerCount = ({ count }: { count: number }) => {
  return <span className="block text-lg opacity-70 font-bold my-10">{toPersian(count)} جواب</span>;
};

export default AnswerCount;
