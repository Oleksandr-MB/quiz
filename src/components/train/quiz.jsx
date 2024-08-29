import React, { useState, useEffect } from "react";
import Latex from "react-latex";
import { questions } from "../../constants.js";

const Quiz = ({filteredQuestions, setFilteredQuestions, subTopic, setState}) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    const [feedback, setFeedback] = useState("");
    const [showPopUp, setPopUp] = useState(false);

    useEffect(() => {
        setFilteredQuestions(questions.filter(question => question.subTopic === subTopic));
        if (filteredQuestions.length > 12) setFilteredQuestions(filteredQuestions.slice(0, 12));

    }, [subTopic, setFilteredQuestions]);

    const onAnswer = (newOption) => {
        setUserAnswer(prev => {
            return prev.includes(newOption) ? prev.filter(prevOption => prevOption !== newOption) : prev.concat(newOption);
        });
    };

    const onSubmit = () => {
        const userSet = new Set(userAnswer.sort());
        const correctSet = new Set(filteredQuestions[questionIndex].correctAnswer.sort());

        const intersection = new Set([...userSet].filter(x => correctSet.has(x)));
        let status = "";

        if (userSet.size === correctSet.size && intersection.size === userSet.size) status = "Fully correct!";
        else if (intersection.size > 0) status = "Partially correct!";
        else status = "Wrong!";

        setFeedback(`
            ${status}\n
            You selected: ${[...userSet].join(", ")}\n
            Correct answer was: ${[...correctSet].join(", ")}\n
            Solution: ${filteredQuestions[questionIndex].solution}
        `);

        setPopUp(true);
    };

    const closePopUp = () => {
        setPopUp(false);
        if (questionIndex !== filteredQuestions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setUserAnswer([]);
        } 
        else setState("result");
    };

    if (filteredQuestions.length === 0) return <div className="main-container">Loading...</div>;

    return (
        <div className="main-container">
            <div className="header">
                <div className="quiz-progress">
                    <span className="current-question-number">{questionIndex + 1}</span><span className="total-question-number">/{filteredQuestions.length}</span>
                </div>
            </div>
            <div className="content">
                <div className="question-text"><Latex>{filteredQuestions[questionIndex].text}</Latex></div>
                <ul className="select-answer">
                    {filteredQuestions[questionIndex].answerOptions.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => onAnswer(option)}
                            className={userAnswer.includes(option) ? "selected" : null}
                        >
                            <Latex>{option}</Latex>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer">
                <button onClick={onSubmit}>
                    {questionIndex === filteredQuestions.length - 1 ? "Finish" : "Confirm"}
                </button>
            </div>

            {showPopUp && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopUp}>×</span>
                        <p><Latex>{feedback}</Latex></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
