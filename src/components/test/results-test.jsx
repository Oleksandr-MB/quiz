import React from "react";

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
            <span>{calculateScore()}/{totalQuestions}</span>
        </>
    )
};

export default Results;