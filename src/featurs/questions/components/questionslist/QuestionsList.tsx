import QuestionCard from './questioncard/QuestionCard';
import QuestionsListHeader from './questioncard/QuestionsListHeader';

const QuestionListData = [
  { id: 1, question: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', author: 'مصطفی کمری', tags: ['typescript', 'javascript', 'css'], created_at: '2 روز پیش' },
  { id: 2, question: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', author: 'مصطفی کمری', tags: ['typescript', 'javascript', 'css'], created_at: '2 روز پیش' },
  { id: 3, question: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', author: 'مصطفی کمری', tags: ['typescript', 'javascript', 'css'], created_at: '2 روز پیش' },
  { id: 4, question: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', author: 'مصطفی کمری', tags: ['typescript', 'javascript', 'css'], created_at: '2 روز پیش' },
  { id: 5, question: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', author: 'مصطفی کمری', tags: ['typescript', 'javascript', 'css'], created_at: '2 روز پیش' },
  { id: 6, question: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', author: 'مصطفی کمری', tags: ['typescript', 'javascript', 'css'], created_at: '2 روز پیش' },
  {
    id: 7,
    question: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
    author: 'مصطفی کمری',
    tags: ['typescript', 'javascript', 'css', 'javascript', 'css', 'javascript', 'css'],
    created_at: '2 روز پیش',
  },
  { id: 8, question: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', author: 'مصطفی کمری', tags: ['typescript', 'javascript', 'css'], created_at: '2 روز پیش' },
  { id: 9, question: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', author: 'مصطفی کمری', tags: ['typescript', 'javascript', 'css'], created_at: '2 روز پیش' },
  { id: 10, question: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', author: 'مصطفی کمری', tags: ['typescript', 'javascript', 'css'], created_at: '2 روز پیش' },
];

const QuestionsList = () => {
  return (
    <section className="px-6">
      <QuestionsListHeader />

      <div className="flex flex-col lg:gap-y-3 gap-y-10">
        {QuestionListData.map((item) => (
          <QuestionCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default QuestionsList;
