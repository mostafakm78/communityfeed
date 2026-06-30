import { dehydrate, HydrationBoundary, InfiniteData, QueryClient } from '@tanstack/react-query';
import { getNow } from '@/lib/utils';
import { getQuestionsCached } from '../../api/getQuestionsCached';
import { QUESTIONS_ENDPOINT } from '../../api/getQuestions';
import { questionsInfiniteQueryOptions } from '../../api/questionsQuery';
import { QuestionsApiResponse } from '../../types/questions';
import QuestionsListClient from './QuestionsListClient';
import QuestionsListHeader from './questioncard/QuestionsListHeader';

const QuestionsList = async () => {
  const queryClient = new QueryClient();
  const firstPage = await getQuestionsCached(QUESTIONS_ENDPOINT);
  const now = getNow();

  queryClient.setQueryData<InfiniteData<QuestionsApiResponse>>(questionsInfiniteQueryOptions.queryKey, {
    pages: [firstPage],
    pageParams: [QUESTIONS_ENDPOINT],
  });

  return (
    <section className="px-6">
      <QuestionsListHeader questionsLength={firstPage.count} />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <QuestionsListClient now={now} />
      </HydrationBoundary>
    </section>
  );
};

export default QuestionsList;
