import React from "react";

const Header = ({ state, currentQuestionIndex, questions }) => (
    <>
        { state === "welcome" && <h2>Welcome to the quiz</h2>}
        { state === "select-topics" && <h2>Select topics</h2> }
        { state === "quiz" && (
            <>
                <div className="progress-bar-bg"><div className="progress-bar"></div></div>
                <div className="quiz-progress">
                    <span className="current-question-number">{currentQuestionIndex+1}</span><span className="total-question-number">/{questions.length}</span>
                </div>
            </>
        )}
        { state === "results" && <h2>Score</h2> }
    </>
)

export default Header;
