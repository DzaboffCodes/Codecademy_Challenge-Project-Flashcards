import React from "react";
import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { selectQuizzes } from "./quizzesSlice";
import { selectCards } from "../cards/cardsSlice";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";

export default function Quiz() {
  const { quizId } = useParams();
  const quizzes = useSelector(selectQuizzes);
  const cards = useSelector(selectCards);

  const quiz = quizzes[quizId];

  if (!quiz) {
    return <Navigate to={ROUTES.quizzesRoute()} replace />;
  }

  // Get all card objects for this quiz, filter out any missing cards
  const quizCards = quiz.cardIds.map((id) => cards[id]).filter(Boolean);

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quizCards.length === 0 && <li>No cards for this quiz.</li>}
        {quizCards.map((card) => (
          <Card key={card.id} id={card.id} />
        ))}
      </ul>
    </section>
  );
}
