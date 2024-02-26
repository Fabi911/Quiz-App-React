import Questions from "../Questions/Questions"
import "./card.css"

export default function Card({question,answer}){
    return(
    <section className="cards">
        <div className="bookmark">
            <button className="bookmark__button" type="button"/>
        </div>
        <Questions question={question}/>
        <button className="answer__button" data-js="answerButton">
            Show Answer
        </button>
        <p className="answer__text" hidden="">
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
    )
}