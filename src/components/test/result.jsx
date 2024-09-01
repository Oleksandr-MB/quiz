import React from "react";

const Result = ({filteredQuestions, userAnswer, setMode, setState}) => {
    const calculateScore = () => {
        let totalScore = 0;
        let fc = 0;
        let pc = 0;
        let wr = 0;
        userAnswer.forEach((answers, questionIndex) => {
            const userSet = new Set(answers.sort());
            const correctSet = new Set(filteredQuestions[questionIndex].correctAnswer.sort());
            const intersection = new Set([...userSet].filter(x => correctSet.has(x)));
    
            if (userSet.size === correctSet.size && intersection.size === userSet.size) {
                totalScore += 1; 
                fc++;
            } 
            else if (intersection.size > 0) {
                totalScore += 0.5;
                pc++;
            }
            else wr++;
        });
    
        return {totalScore, fc, pc, wr};
    };
    
    const result = calculateScore();

    return (
        <div className="main-container">
            <div className="header"><h1 className="header-text">Score</h1></div>
            <div className="content">
                <p className="result">
                    Your score: {result.totalScore}/{filteredQuestions.length}<br/>
                    Fully correct answers: {result.fc}<br/>
                    Partially correct answers: {result.pc}<br/>
                    Wrong answers: {result.wr}
                </p>
            </div>
            <div className="footer">
                <button className="btn-finish" onClick={() => {setMode("welcome"); setState("topic")}}>Finish</button>
            </div>
        </div>
    );
};

export default Result;
