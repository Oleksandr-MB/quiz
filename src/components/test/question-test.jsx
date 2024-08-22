import React from "react";
import Latex from "react-latex";

const Question = ({ question, userAnswers, currentQuestionIndex, setUserAnswers }) => {
    const onAnswer = (answer) => {
        setUserAnswers(prev => {
            const newAnswers = [...prev];
            newAnswers[currentQuestionIndex] = answer;
            return newAnswers;
        });
    };

    return (
        <>
            <span className="question-text"><Latex>{question.text}</Latex></span>

            { question.type === "mc" &&
                <ul className="select-answer">
                    { question.options.map((option, index) => (
                        <li 
                            key={index}
                            onClick={() => onAnswer(option)}
                            className={userAnswers[currentQuestionIndex] === option ? "selected-answer" : null}
                        >
                            <Latex>{option}</Latex>
                        </li>
                    ))}
                </ul>
            }

            { question.type === "open" &&
                <div className="answer-input">
                    <label htmlFor="type-answer">Type your answer here: </label>
                    <input id="type-answer" onChange={(e) => onAnswer(e.target.value.trim().toUpperCase())}></input>
                </div>
            }
        </>
    );
};

export default Question;