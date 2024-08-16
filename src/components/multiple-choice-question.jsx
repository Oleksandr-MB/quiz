import React from 'react';

const MultipleChoiceQuestion = ({ question, onAnswer, onClickNext, onClickPrev, userAnswers, currentQuestion, totalQuestions }) => (
    <div>
        <h2>{question.text}</h2>
        <ul>
            { question.choices.map((choice) => (
                <li 
                    key={choice}
                    onClick={() => onAnswer(choice)}
                    className={userAnswers[currentQuestion] === choice ? "selected-answer" : null}
                >
                    {choice}
                </li>
            ))}
        </ul>
        <div className="footer">
            <button onClick={onClickPrev} disabled={currentQuestion === 0}>Previous</button>
            <button onClick={onClickNext}>{currentQuestion === totalQuestions - 1 ? "Finish" : "Next"}</button>
        </div>
    </div>
);

export default MultipleChoiceQuestion;