import React, { useRef } from "react";

type AnswerOptionCardProps = {
  answerKey: string;
  label: string;
  selectedAnswer: string | null;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function AnswerOptionCard({
  answerKey,
  label,
  selectedAnswer,
  ...props
}: AnswerOptionCardProps) {
  const radioRef = useRef<HTMLInputElement>(null);

  const handleOnClickCard = () => {
    if (radioRef.current) {
      radioRef.current.click();
    }
  };

  return (
    <div
      className="flex transition-all group bg-background items-center gap-3 p-3 w-full cursor-pointer rounded-xl border-2 border-border shadow-md shadow-muted/50 
      hover:border-primary hover:shadow-lg 
      [&:has(:checked)]:border-primary [&:has(:checked)]:bg-primary [&:has(:checked)]:text-primary-foreground"
      onClick={handleOnClickCard}
    >
      <p className="group-[&:has(:checked)]:text-primary-foreground font-bold text-lg md:text-2xl">
        {answerKey.toUpperCase()}. {label}
      </p>
      <input
        ref={radioRef}
        type="radio"
        name="option"
        value={answerKey}
        checked={selectedAnswer === answerKey}
        className="hidden before:hidden after:hidden"
        {...props}
      />
    </div>
  );
}
