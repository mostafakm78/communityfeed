const AnswerCard = ({ content }: { content: string }) => {
  return (
    <article className="w-full my-4 min-h-40 p-6 bg-secondary rounded-2xl border border-foreground/20">
      <span>{content}</span>
    </article>
  );
};

export default AnswerCard;
