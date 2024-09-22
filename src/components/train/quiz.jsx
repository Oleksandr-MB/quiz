import React, { useState, useEffect } from "react";
import Latex from "react-latex";
import { questions } from "../../constants.js";

const Quiz = ({ setMode, filteredQuestions, setFilteredQuestions, subTopic, setState }) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    const [feedback, setFeedback] = useState("");
    const [showResultPopUp, setResultPopUp] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    useEffect(() => {
        const filtered = questions.filter(question => question.subTopic === subTopic);
        setFilteredQuestions(filtered.length > 12 ? filtered.slice(0, 12) : filtered);
    }, [subTopic, setFilteredQuestions]);

    const onAnswer = (newOption) => {
        setUserAnswer(prev => 
            prev.includes(newOption) ? prev.filter(prevOption => prevOption !== newOption) : [...prev, newOption]
        );
    };

    const onSubmit = () => {
        const userSet = new Set(userAnswer.sort());
        const correctSet = new Set(filteredQuestions[questionIndex].correctAnswer.sort());

        const intersection = new Set([...userSet].filter(x => correctSet.has(x)));
        let status = "";

        if (userSet.size === correctSet.size && intersection.size === userSet.size) 
            status = "Fully correct!";
        else if (intersection.size > 0 && correctSet.size > 1) 
            status = "Partially correct!";
        else 
            status = "Wrong!";

        setFeedback({
            status: status,
            userSelection: [...userSet].join(", "),
            correctAnswers: [...correctSet].join(", "),
            solution: filteredQuestions[questionIndex].solution
        });        
        
        setResultPopUp(true);
    };

    const closeResultPopUp = () => {
        setResultPopUp(false);
        if (questionIndex !== filteredQuestions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setUserAnswer([]);
        } 
        else
            setState("result");
    };

    if (filteredQuestions.length === 0) 
        return <div className="main-container">Loading...</div>;

    return (
        <div className="main-container">
            <div className="header">
                <div className="quiz-progress">
                    <span><span className="current-question-number">{questionIndex + 1}</span><span className="total-question-number">/{filteredQuestions.length}</span></span>
                    <span className="close" onClick={() => {setMode("welcome"); setState("topic")}}>{"\u2716"}</span>
                </div>
                
            </div>
            <div className="content">
                <div className="question-text"><Latex>{String(filteredQuestions[questionIndex].text)}</Latex></div>
                <ul className="select-answer">
                    {filteredQuestions[questionIndex].answerOptions.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => onAnswer(option)}
                            className={userAnswer.includes(option) ? "selected" : null}
                        >
                            <Latex>{String(option)}</Latex>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer">
                <button className="btn-confirm" onClick={onSubmit}>
                    {questionIndex === filteredQuestions.length - 1 ? "Finish" : "Confirm"}
                </button>
            </div>

            { showResultPopUp && (
                <div className="popup">
                    <div className="popup-content">
                        <div className="popup-feedback">
                            <p className="result">
                                <span className="question-recap"><strong>{feedback.status}</strong></span><br/>
                                <span className="answer-recap">You selected: </span><Latex>{String(feedback.userSelection)}</Latex><br/>
                                <span className="answer-recap">Correct answer: </span><Latex>{String(feedback.correctAnswers)}</Latex><br/>
                            </p>
                        </div>

                        <div className="show-solution-btn">
                            <span onClick={() => setShowSolution(!showSolution)}>Show solution {showSolution ? "\u2227" : "\u2228"}</span>
                        </div>
                        
                        <div className="solution" hidden={!showSolution}>
                            <p className="result">
                                <span className="answer-recap">Solution: </span><Latex>{String(feedback.solution)}</Latex><br/>
                            </p>
                        </div>
                        
                        <div className="footer">
                            <button className="btn-next" onClick={() => {setShowSolution(false); closeResultPopUp()}}>Next question</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
