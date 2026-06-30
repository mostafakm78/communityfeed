import { toPersian } from '@/lib/utils';

const QuestionsListHeader = ({ questionsLength }: { questionsLength: number }) => {
  return <span className="relative block mt-4 mb-10 lg:mb-4 pr-3.5 after:content-[''] after:absolute after:bg-foreground after:w-2 after:h-2 after:right-0 after:rounded-full after:top-1/2 after:-translate-y-1/2">مجموع سوالات : {toPersian(questionsLength)}</span>;
};

export default QuestionsListHeader;
