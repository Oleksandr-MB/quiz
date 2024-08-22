import React, { useState } from "react";

const Footer = ({ state, question, currentQuestionIndex, totalQuestions, selectedTopic, setCurrentQuestionIndex, userAnswer, setCurrentState, setCurrentMode }) => {
    const [feedback, setFeedback] = useState("");
    const [showPopUp, setPopUp] = useState(false);

    const checkAnswer = () => {
        const isCorrect = userAnswer === question.correctAnswer;
        setFeedback(isCorrect ? "Correct!" : `Incorrect! Correct answer was: ${question.correctAnswer}`);
        setPopUp(true);
    };

    const closePopUp = () => {
        setPopUp(false);
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            let selectedAnswer = document.querySelector(".selected-answer");
            if (selectedAnswer) {
                selectedAnswer.className = null;
            }
        } 
        else {
            setCurrentState("results");
        }
    };

    const onClickNext = () => {
        checkAnswer();
    };

    const onClickExit = () => {
        setCurrentQuestionIndex(0);
        setCurrentState("select-topic");
        setCurrentMode(null);
    };

    const onBegin = () => setCurrentState("quiz");

    return (
        <>
            { state === "select-topic" && <button disabled={selectedTopic === null} className="btn-start" onClick={onBegin}>Begin</button> }
            { state === "quiz" && <button onClick={onClickNext}>{currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Confirm"}</button> }
            { state === "results" && <button onClick={onClickExit}>Exit</button> }

            { showPopUp && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopUp}>×</span>
                        <p>{feedback}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;