"use client";
import QuizSkeleton from "@/components/loader/QuizSkeleton";
import AnswerOptionCard from "@/components/quiz/AnswerOptionCard";
import AnswerResultCard from "@/components/quiz/AnswerResultCard";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import questionData from "../../../constans/quiz-question.json";

type Question = {
  id: number;
  question: string;
  option: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  answer: string;
  reason: string;
};

function QuizQuestionList() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const { push } = useRouter();

  useEffect(() => {
    const question = questionData.find(({ id }) => id === Number(q)) || null;
    setCurrentQuestion(question);
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [q]);

  const handleOnSelectAnswer = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleOnSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentQuestion) return;

    setIsCorrect(selectedAnswer === currentQuestion.answer);
  };

  const handleOnClickNext = (e) => {
    e.preventDefault();
    if (!currentQuestion) return;

    const player = JSON.parse(
      localStorage.getItem("histobandung-quiz") || "{}"
    );
    const currentScore = isCorrect ? player.score + 20 : player.score;
    const updatedPlayer = { ...player, score: currentScore };

    localStorage.setItem("histobandung-quiz", JSON.stringify(updatedPlayer));

    if (Number(q) === questionData.length) {
      push("/quiz/finish");
    } else {
      push(`/quiz/question?q=${currentQuestion.id + 1}`);
    }
  };

  if (!currentQuestion) return <QuizSkeleton />;

  return (
    <>
      <form
        onSubmit={handleOnSubmitAnswer}
        className="px-4 mt-5 mx-auto container flex flex-col items-center space-y-5"
      >
        <p className="text-xl md:text-3xl font-bold text-center">
          {currentQuestion.question}
        </p>
        <div className="flex flex-col w-full max-w-sm space-y-4">
          {Object.entries(currentQuestion.option).map(
            ([answerKey, label], idx) => {
              return (
                <AnswerOptionCard
                  key={idx}
                  answerKey={answerKey}
                  label={label}
                  selectedAnswer={selectedAnswer}
                  onChange={handleOnSelectAnswer}
                  disabled={isCorrect != null}
                />
              );
            }
          )}
        </div>
        {isCorrect == null && (
          <div className="w-full border-t-2 border-gray-200 mt-auto min-h-[135px] items-center flex justify-end">
            <Button
              type="submit"
              className="rounded-xl font-bold"
              variant={selectedAnswer ? "default" : "secondary"}
              disabled={!selectedAnswer}
            >
              Cek jawaban
            </Button>
          </div>
        )}
      </form>
      {isCorrect != null && (
        <AnswerResultCard
          isCorrect={isCorrect}
          reason={currentQuestion.reason}
          answerKey={currentQuestion.answer}
          answerLabel={currentQuestion.option[currentQuestion.answer]}
          onClickNext={handleOnClickNext}
        />
      )}
    </>
  );
}

export default function QuizQuestionPage() {
  return (
    <Suspense fallback={<QuizSkeleton />}>
      <QuizQuestionList />
    </Suspense>
  );
}
