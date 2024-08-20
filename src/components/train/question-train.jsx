import React, { useState } from "react";
import Latex from "react-latex";

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
            <span className="question-text"><Latex>{question.text}</Latex></span>

            { question.type === "multiple-choice" && (
                <div className="scroll">
                    <ul>
                        { question.choices.map((choice, index) => (
                            <li
                                key={index}
                                onClick={() => onAnswer(choice)}
                                className={userAnswer === choice ? "selected-answer" : null}
                            >
                                <Latex>{choice}</Latex>
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
                        <p><Latex>{feedback}</Latex></p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Question;