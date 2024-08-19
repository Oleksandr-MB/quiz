import React from "react";

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
            <span className="question-text">{question.text}</span>

            { question.type === "multiple-choice" &&
                <div className="scroll">
                    <ul>
                        { question.choices.map((choice) => (
                            <li 
                                key={choice}
                                onClick={() => onAnswer(choice)}
                                className={userAnswers[currentQuestionIndex] === choice ? "selected-answer" : null}
                            >
                                {choice}
                            </li>
                        ))}
                    </ul>
                </div>
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