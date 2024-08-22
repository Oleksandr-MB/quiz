import React from "react";
import Latex from "react-latex";

const Results = ({ userAnswers, questions, totalQuestions }) => {
    const calculateScore = () => {
        let score = 0;
        for(let i = 0; i < totalQuestions; i++) {
            score += (userAnswers[i] === questions[i].correctAnswer ? 1 : 0)
        }
        return score;
    };
    
    return (
        <>
            <div><span className="current-question-number">{calculateScore()}/{totalQuestions}</span></div>
            <ol>
                { questions.map((question, index) => (
                    <li
                        key={index}
                    >
                        <Latex>{question.text}</Latex><br/>
                        Your answer: <Latex>{userAnswers[index]}</Latex><br/>
                        Correct answer: <Latex>{question.correctAnswer}</Latex><br/>
                    </li>
                ))}   
            </ol>
\        </>
    )
};

export default Results;