const AnswerCard = ({ content }: { content: string }) => {
  return (
    // Individual answer card
    <article className="w-full my-4 min-h-40 p-6 bg-secondary rounded-2xl border border-foreground/20">
      {/* Answer body text */}
      <p>{content}</p>
    </article>
  );
};

export default AnswerCard;
