import { Suspense } from 'react';
import HeaderTitle from '@/components/shared/HeaderTitle';
import QuestionsFilter from '@/featurs/questions/components/questionfilters/QuestionsFilters';
import FiltersSkeleton from '@/featurs/questions/components/questionfilters/FiltersSkeleton';
import QuestionsList from '@/featurs/questions/components/questionslist/QuestionsList';
import QuestionsSkeleton from '@/featurs/questions/components/questionslist/QuestionsSkeleton';


export default function Home() {
  return (
    // Home page container
    <div className="container mx-auto">
      {/* Page heading */}
      <HeaderTitle />
      {/* Main layout: sidebar filters + questions list */}
      <div className="flex xl:flex-row flex-col items-start">
        {/* Sidebar with filter controls */}
        <aside className="xl:w-3/12 w-full xl:sticky xl:top-10">
          <Suspense fallback={<FiltersSkeleton />}>
            <QuestionsFilter />
          </Suspense>
        </aside>
        {/* Questions list panel */}
        <div className="xl:w-9/12 w-full pb-10">
          <Suspense fallback={<QuestionsSkeleton />}>
            <QuestionsList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
