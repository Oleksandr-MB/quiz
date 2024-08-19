import React, { useState } from "react";

const Question = ({ question, userAnswer, setUserAnswer }) => {
    const [feedback, setFeedback] = useState("");
    const [showPopUp, setPopUp] = useState(false);

    const onAnswer = (answer) => {
        setUserAnswer(answer);
    };
    
    const closePopUp = () => {
        setPopUp(false);
    };

    return (
        <>
            <span className="question-text">{question.text}</span>

            {question.type === "multiple-choice" && (
                <div className="scroll">
                    <ul>
                        { question.choices.map((choice) => (
                            <li
                                key={choice}
                                onClick={() => onAnswer(choice)}
                                className={userAnswer === choice ? "selected-answer" : null}
                            >
                                {choice}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            { question.type === "open" && (
                <div className="answer-input">
                    <label htmlFor="type-answer">Type your answer here: </label>
                    <input
                        id="type-answer"
                        onChange={(e) => onAnswer(e.target.value.trim().toUpperCase())}
                    ></input>
                </div>
            )}

            { showPopUp && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopUp}>×</span>
                        <p>{feedback}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Question;