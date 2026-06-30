import { isAxiosError } from 'axios';
import { notFound } from 'next/navigation';
import { getQuestionDetail } from '../api/getQuestionDetail';
import AnswerList from './answerlist/AnswerList';
import QuestionCard from './questioncard/QuestionCard';

const QuestionDetails = async ({ id }: { id: string }) => {
  let question;

  try {
    question = await getQuestionDetail(id);
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      notFound();
    }
    throw error;
  }

  return (
    <section className="px-6">
      <QuestionCard content={question.content} book={question.book} author={question.user.full_name} created_at={question.created_at} />
      <AnswerList answers={question.answers} />
    </section>
  );
};

export default QuestionDetails;
