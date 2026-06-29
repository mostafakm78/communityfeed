import HeaderTitle from '@/components/shared/HeaderTitle';
import { NewAnswerForm } from '@/featurs/new-answer/NewAnswerForm';

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
