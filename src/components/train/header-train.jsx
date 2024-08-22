import React from "react";

const Header = ({ currentState, totalQuestions, currentQuestionIndex }) => (
    <>
        { currentState === "select-topic" && <h2>Select topics</h2> }
        { currentState === "quiz" && (
            <div className="quiz-progress">
                <span className="current-question-number">{currentQuestionIndex+1}</span><span className="total-question-number">/{totalQuestions}</span>
            </div>
        )}
        { currentState === "results" && (
            <h2>Recap</h2> 
        )}
    </>
)

export default Header;