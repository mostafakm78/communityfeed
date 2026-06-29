import { Separator } from '@/components/ui/separator';
import Tags from './Tags';
import QuestionInfo from './QuestionInfo';

const QuestionCard = () => {
  return (
    <section className="flex flex-col items-center">
      <article className="w-full flex flex-col gap-x-6 min-h-60 shrink-0 rounded-xl bg-secondary border border-foreground/20 p-4">
        <span className="w-full">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</span>

        <div className="flex flex-col gap-y-4 mt-auto justify-between">
          <Separator className="mt-2 xl:mt-0" orientation="horizontal" />
          <Tags />
          <QuestionInfo />
        </div>
      </article>
    </section>
  );
};

export default QuestionCard;
