import React from "react";

const Result = ({filteredQuestions, userAnswer, setMode, setState}) => {
    const calculateScore = () => {
        let totalScore = 0, fc = 0, pc = 0, wr = 0;
        
        userAnswer.forEach((answers, questionIndex) => {
            const userSet = new Set(answers.sort());
            const correctSet = new Set(filteredQuestions[questionIndex].correctAnswer.sort());
            const intersection = new Set([...userSet].filter(x => correctSet.has(x)));
    
            if (userSet.size === correctSet.size && intersection.size === userSet.size) {
                totalScore++; 
                fc++;
            } 
            else if (intersection.size > 0 && correctSet.size > 1) {
                totalScore += 0.5;
                pc++;
            }
            else 
                wr++;
        });
    
        return {totalScore, fc, pc, wr};
    };
    
    const result = calculateScore();

    return (
        <div className="main-container">
            <div className="header"><h1 className="header-text">Score</h1></div>
            <div className="content">
                <p className="result">
                    <span className="answer-recap">Your score: {result.totalScore}/{filteredQuestions.length}</span><br/>
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
