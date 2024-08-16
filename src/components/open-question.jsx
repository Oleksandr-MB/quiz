import React from 'react';

const OpenQuestion = ({ question, onAnswer, onClickNext, onClickPrev, userAnswers, currentQuestion, totalQuestions }) => (
    <div>
        <h2>{question.text}</h2>
        <label htmlFor="type-answer">Type your answer here: </label>
        <input id="type-answer" onChange={(e) => onAnswer(e.target.value.trim().toUpperCase(), currentQuestion)}></input>
        <div className="footer">
            <button onClick={onClickPrev} disabled={currentQuestion === 0}>Previous</button>
            <button onClick={onClickNext}>{currentQuestion === totalQuestions - 1 ? "Finish" : "Next"}</button>
        </div>
    </div>
);

export default OpenQuestion;