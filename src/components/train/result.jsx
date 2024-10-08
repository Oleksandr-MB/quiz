import React from "react";
import Latex from "react-latex";

const Result = ({filteredQuestions, setMode, setState}) => {
    return (
        <div className="main-container">
            <div className="header"><h1 className="header-text">Recap</h1></div>
            <div className="content">
                <ol className="recap">
                    { filteredQuestions.map((question, index) => ( 
                        <>
                            <li key={index}>
                                <span className="question-recap"><Latex>{String(question.text)}</Latex></span><br/>
                                <span className="answer-recap">Correct answer: </span><Latex>{String(question.correctAnswer.join(", "))}</Latex><br/>
                                <span className="answer-recap" hidden={!question.solution}>Solution: </span><Latex>{String(question.solution)}</Latex><br/>
                            </li>
                            <div className="line"></div>
                        </>
                    ))}
                </ol>
            </div>
            <div className="footer">
                <button className="btn-finish" onClick={() => {setMode("welcome"); setState("topic")}}>Finish</button>
            </div>
        </div>
    );
};

export default Result;
