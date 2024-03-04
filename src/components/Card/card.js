import Questions from "../Questions/Questions";
import { useState } from "react";
import "./card.css";

export default function Card({ question, answer }) {
  const [isAnswerHidden, setIsAnswerHidden] = useState(true);
  function HandleAnswerButton() {
    setIsAnswerHidden(!isAnswerHidden);
    console.log(isAnswerHidden);
    return isAnswerHidden;
  }
  return (
    <section className="cards">
      <div className="bookmark">
        <button className="bookmark__button" type="button" />
      </div>
      <Questions question={question} />
      <button className="answer__button" onClick={HandleAnswerButton}>
        Show Answer
      </button>
      <p className="answer__text" hidden={isAnswerHidden}>
        {answer}
      </p>
      <section className="cat_tags">
        <p className="tags">
          <label>#html</label>
        </p>
        <p className="tags">
          <label>#flexbox</label>
        </p>
        <p className="tags">
          <label>#css</label>
        </p>
      </section>
    </section>
  );
}
