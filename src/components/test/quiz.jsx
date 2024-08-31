import React, { useState, useEffect } from "react";
import Latex from "react-latex";
import { questions } from "../../constants.js";

const Quiz = ({ filteredQuestions, setFilteredQuestions, userAnswer, setUserAnswer, topic, state, setState }) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [time, setTime] = useState(0);
    const maxTime = 20*60;

    const progressBar = document.querySelector(".progress-bar");
    if (progressBar) progressBar.style.setProperty("--maxTime", `${maxTime}s`);

    const shuffle = (array) => {
        let currentIndex = array.length;
        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    const onNext = () => {
        if (questionIndex < filteredQuestions.length - 1) setQuestionIndex(prev => prev + 1);
        else setState("result");
    };

    const onPrev = () => {
        if (questionIndex > 0) setQuestionIndex(prev => prev - 1);
    };

    useEffect(() => {
        const filtered = questions.filter(question => question.topic === topic);
        const limited = filtered.length > 15 ? shuffle(filtered).slice(0, 15) : shuffle(filtered);
        setFilteredQuestions(limited);
        setUserAnswer(Array(limited.length).fill([]));
    }, [topic, setFilteredQuestions]);

    useEffect(() => {
        let interval;
        if (state === "quiz") {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime >= maxTime) {
                        clearInterval(interval);
                        setState("result");
                        return prevTime;
                    }
                    return prevTime + 1;
                });
            }, 1000);
        } else {
            setTime(0);
        }
        return () => clearInterval(interval);
    }, [state, setState]);

    const onAnswer = (newOption) => {
        setUserAnswer(prev => {
            const updatedAnswers = [...prev];
            const currentAnswers = updatedAnswers[questionIndex];
            updatedAnswers[questionIndex] = currentAnswers.includes(newOption) ? currentAnswers.filter(option => option !== newOption) : [...currentAnswers, newOption];
            return updatedAnswers;
        });
    };

    if (filteredQuestions.length === 0) return <div className="main-container">Loading...</div>;

    return (
        <div className="main-container">
            <div className="header">
                <div className="progress-bar-bg"><div className="progress-bar"></div></div>
                <div className="quiz-progress">
                    <span className="current-question-number">{questionIndex + 1}</span>
                    <span className="total-question-number">/{filteredQuestions.length}</span>
                </div>
            </div>
            <div className="content">
                <div className="question-text"><Latex>{filteredQuestions[questionIndex].text}</Latex></div>
                <ul className="select-answer">
                    {filteredQuestions[questionIndex].answerOptions.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => onAnswer(option)}
                            className={userAnswer[questionIndex].includes(option) ? "selected" : null}
                        >
                            <Latex>{option}</Latex>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer">
                <>
                    <button className="btn-prev" onClick={onPrev} disabled={questionIndex === 0}>Previous</button>
                    <button className="btn-next" onClick={onNext}>{questionIndex === filteredQuestions.length - 1 ? "Finish" : "Next"}</button>
                </>
            </div>
        </div>
    );
};

export default Quiz;
