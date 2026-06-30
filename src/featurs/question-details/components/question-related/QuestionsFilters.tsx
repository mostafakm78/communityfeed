import Link from 'next/link';
import { getQuestionDetail } from '../../api/getQuestionDetail';
import { getRelatedQuestions } from '../../api/getRelatedQuestions';
import { QuestionApiItem } from '@/featurs/questions/types/questions';

const QuestionsRelated = async ({ id }: { id: string }) => {
  let relatedQuestions: QuestionApiItem[] = [];

  try {
    const question = await getQuestionDetail(id);
    if (question.book) {
      relatedQuestions = await getRelatedQuestions(question.book, question.id);
    }
  } catch {
    relatedQuestions = [];
  }

  return (
    <section className="flex flex-col w-full px-6 gap-y-6">
      <div className="bg-secondary flex gap-y-4 flex-col p-6 rounded-xl w-full">
        <span>سوالات مرتبط :</span>

        {relatedQuestions.length === 0 ? (
          <p className="text-xs text-muted-foreground">سوال مرتبطی یافت نشد</p>
        ) : (
          <div className="flex flex-col gap-y-3">
            {relatedQuestions.map((related) => (
              <Link key={related.id} href={`/${related.id}`} className="truncate text-xs hover:underline">
                {related.content}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default QuestionsRelated;
