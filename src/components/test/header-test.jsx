import React from "react";
import Timer from "./timer.jsx";
const Header = ({ questions, currentState, totalQuestions, currentQuestionIndex, setCurrentState, setTime }) => (
    <>
        { currentState === "select-topic" && <h2>Select topics</h2> }
        { currentState === "quiz" && (
            <>
                <Timer 
                    questions={questions}
                    currentState={currentState} 
                    setCurrentState={setCurrentState} 
                    setTime={setTime}
                />
                <div className="quiz-progress">
                    <span className="current-question-number">{currentQuestionIndex+1}</span><span className="total-question-number">/{totalQuestions}</span>
                </div>
            </>
        )}
        { currentState === "results" && <h2>Score</h2> }
    </>
)

export default Header;