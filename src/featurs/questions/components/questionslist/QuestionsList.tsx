import { dehydrate, HydrationBoundary, InfiniteData, QueryClient } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { getNow } from '@/lib/utils';
import { getQuestionsCached } from '../../api/getQuestionsCached';
import { QUESTIONS_ENDPOINT } from '../../api/getQuestions';
import { questionsInfiniteQueryOptions } from '../../api/questionsQuery';
import { QuestionsApiResponse } from '../../types/questions';
import QuestionsListHeader from './questioncard/QuestionsListHeader';

const QuestionsListClient = dynamic(() => import('./QuestionsListClient'));

const QuestionsList = async () => {
  const queryClient = new QueryClient();
  const firstPage = await getQuestionsCached(QUESTIONS_ENDPOINT);
  const now = getNow();

  queryClient.setQueryData<InfiniteData<QuestionsApiResponse>>(questionsInfiniteQueryOptions.queryKey, {
    pages: [firstPage],
    pageParams: [QUESTIONS_ENDPOINT],
  });

  return (
    // Questions list section with SSR-hydrated infinite scroll
    <section className="px-6">
      {/* Total questions count header */}
      <QuestionsListHeader questionsLength={firstPage.count} />

      {/* Client-side infinite list with pre-fetched first page */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <QuestionsListClient now={now} />
      </HydrationBoundary>
    </section>
  );
};

export default QuestionsList;
