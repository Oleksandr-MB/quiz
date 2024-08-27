import React from "react";
import Latex from "react-latex";

const Result = ({filteredQuestions, setMode, setState}) => {
    return (
        <div className="main-container">
            <div className="header"><h2 className="header-text">Recap</h2></div>
            <div className="content">
                <ol className="recap">
                    {filteredQuestions.map((question) => ( 
                        <>
                            <li key={question}>
                                <span className="question-recap"><Latex>{question.text}</Latex></span><br/>
                                <span className="answer-recap">Correct answer: </span><Latex>{question.correctAnswer.join(", ")}</Latex><br/>
                            </li>
                            <div className="line"></div>
                        </>
                    ))}
                </ol>
            </div>
            <div className="footer">
                <button onClick={() => {setMode("welcome"); setState("topic")}}>Finish</button>
            </div>
        </div>
    );
};

export default Result;
