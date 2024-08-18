import React from "react";

const Buttons = ({ state, currentQuestionIndex, totalQuestions, onStart, onClickNext, onClickPrev, onTryAgain, onBegin, selectedTopics }) => (
    <>
        { state === "welcome" && <button className="btn-start" onClick={onStart}>Start Quiz</button> }
        { state === "select-topics" && <button disabled={selectedTopics.length === 0} className="btn-start" onClick={onBegin}>Begin</button> }
        { state === "quiz" && (
            <>
                <button onClick={onClickPrev} disabled={currentQuestionIndex === 0}>Previous</button>
                <button onClick={onClickNext}>{currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}</button>
            </>
        )}
        { state === "results" && <button onClick={onTryAgain}>Try Again</button> }
    </>
)

export default Buttons;
