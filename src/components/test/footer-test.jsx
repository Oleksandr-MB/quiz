import React from "react";

const Footer = ({ state, currentQuestionIndex, totalQuestions, selectedTopics, setCurrentQuestionIndex, setCurrentState, setUserAnswers, setCurrentMode }) => {
    const onClickNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } 
        else {
            setCurrentState("results");
        }
    };

    const onClickPrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const onClickExit = () => {
        setUserAnswers(Array(totalQuestions).fill(null));
        setCurrentQuestionIndex(0);
        setCurrentState("select-topics");
        setCurrentMode(null);
    };

    const onBegin = () => setCurrentState("quiz");

    return (
        <>
            { state === "select-topics" && <button disabled={selectedTopics.length === 0} className="btn-start" onClick={onBegin}>Begin</button> }
            { state === "quiz" && (
                <>
                    <button onClick={onClickPrev} disabled={currentQuestionIndex === 0}>Previous</button>
                    <button onClick={onClickNext}>{currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}</button>
                </>
            )}
            { state === "results" && <button onClick={onClickExit}>Exit</button> }
        </>
    );
};

export default Footer;