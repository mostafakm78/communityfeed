const AnswerCard = ({ answer, key }: { answer: string; key: number }) => {
  return (
    <article key={key} className="w-full my-4 min-h-40 p-6 bg-secondary rounded-2xl border border-foreground/20">
      <span>{answer}</span>
    </article>
  );
};

export default AnswerCard;
