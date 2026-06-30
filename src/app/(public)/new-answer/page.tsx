import dynamic from 'next/dynamic';
import HeaderTitle from '@/components/shared/HeaderTitle';

const NewAnswerForm = dynamic(() => import('@/featurs/new-answer/components/NewAnswerForm').then((mod) => mod.NewAnswerForm));

export default function NewAnswer() {
  return (
    <div className="container mx-auto">
      <HeaderTitle />
      <div className="flex items-start">
        <NewAnswerForm />
      </div>
    </div>
  );
}
