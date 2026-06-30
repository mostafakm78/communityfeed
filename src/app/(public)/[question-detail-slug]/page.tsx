import { Suspense } from 'react';
import { isAxiosError } from 'axios';
import { notFound } from 'next/navigation';
import HeaderTitle from '@/components/shared/HeaderTitle';
import { getQuestionDetail } from '@/featurs/question-details/api/getQuestionDetail';
import QuestionsRelated from '@/featurs/question-details/components/question-related/QuestionsFilters';
import RelatedQuestionsSkeleton from '@/featurs/question-details/components/question-related/RelatedQuestionsSkeleton';
import QuestionDetails from '@/featurs/question-details/components/QuestionDetails';
import QuestionDetailsSkeleton from '@/featurs/question-details/components/QuestionDetailsSkeleton';

type QuestionSlugProps = {
  params: Promise<{ 'question-detail-slug': string }>;
};

export default async function QuestionSlug({ params }: QuestionSlugProps) {
  const { 'question-detail-slug': id } = await params;

  try {
    await getQuestionDetail(id);
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      notFound();
    }
    throw error;
  }

  return (
    // Question detail page container
    <div className="container mx-auto">
      {/* Back navigation link */}
      <HeaderTitle />
      {/* Main layout: question details + related questions sidebar */}
      <div className="flex xl:flex-row flex-col-reverse items-start">
        {/* Sidebar with related questions */}
        <aside className="xl:w-3/12 w-full xl:sticky xl:top-10 xl:pb-0 pb-10">
          <Suspense fallback={<RelatedQuestionsSkeleton />}>
            <QuestionsRelated id={id} />
          </Suspense>
        </aside>
        {/* Question detail and answers panel */}
        <div className="xl:w-9/12 w-full pb-10">
          <Suspense fallback={<QuestionDetailsSkeleton />}>
            <QuestionDetails id={id} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
