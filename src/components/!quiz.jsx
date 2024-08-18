import React, { useState, useEffect } from "react";
import Welcome from "./welcome.jsx";
import SelectTopics from "./select-topics.jsx";
import Question from "./question.jsx";
import Results from "./results.jsx";
import Buttons from "./buttons.jsx";
import Header from "./header.jsx";

const Quiz = ({ questions, topics }) => {
    const [currentState, setCurrentState] = useState("welcome");
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [time, setTime] = useState(0);

    const maxTime = questions.filter((q) => q.type === "multiple-choice").length*5 + questions.filter((q) => q.type === "open").length*10;
    const progressBar = document.querySelector(".progress-bar");
    if (progressBar) {
        progressBar.style.setProperty("--maxTime", `${maxTime}s`);
    }

    const onStart = () => setCurrentState("select-topics");

    const onBegin = () => setCurrentState("quiz");

    const onTopicClick = (topic) => {
        setSelectedTopics(prev => {
            if (prev.includes(topic)) {
                return prev.filter(t => t !== topic);
            } 
            else {
                return prev.concat(topic);
            }
        });
    };

    const onAnswer = (answer) => {
        setUserAnswers(prev => {
            const newAnswers = [...prev];
            newAnswers[currentQuestionIndex] = answer;
            return newAnswers;
        });
    };
    
    const onClickNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
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

    const onTryAgain = () => {
        setUserAnswers(Array(questions.length).fill(null));
        setCurrentQuestionIndex(0);
        setCurrentState("select-topics");
    };

    const calculateScore = () => {
        return userAnswers.reduce((score, answer, index) => {
            return score + (answer === questions[index].correctAnswer ? 1 : 0);
        }, 0);
    };

    useEffect(() => {
        let interval;
        if (currentState === "quiz") {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime === maxTime) {
                        setCurrentState("results");
                        clearInterval(interval);
                        return prevTime;
                    }
                    return prevTime + 1;
                });
            }, 1000);
        } 
        else {
            setTime(0);
        }
        return () => clearInterval(interval);
    }, [currentState, maxTime]);

    return (
        <div className="main-container">
            <div className="header">
                <Header 
                    currentQuestionIndex={currentQuestionIndex}
                    questions={questions}
                    state={currentState}
                />
            </div>

            <div className="content-container">
                { currentState === "welcome" && <Welcome onStart={() => setCurrentState("select-topics")} />}
        
                { currentState === "select-topics" && (
                    <SelectTopics
                        topics={topics}
                        selectedTopics={selectedTopics}
                        onTopicClick={onTopicClick}
                    />
                )}
        
                { currentState === "quiz" && (
                    <Question
                        question={questions[currentQuestionIndex]}
                        onAnswer={onAnswer}
                        userAnswers={userAnswers}
                        currentQuestionIndex={currentQuestionIndex}
                        totalQuestions={questions.length} 
                    />
                )}
        
                { currentState === "results" && (
                    <Results
                        score={calculateScore()}
                        totalQuestions={questions.length}
                    />
                )}
            </div>

            <div className="footer">
                <Buttons 
                    state={currentState}
                    selectedTopics={selectedTopics}
                    onStart={onStart}
                    onClickNext={onClickNext}
                    onClickPrev={onClickPrev}
                    onTryAgain={onTryAgain}
                    currentQuestionIndex={currentQuestionIndex}
                    totalQuestions={questions.length}
                    onBegin={onBegin}
                />
            </div>
        </div>
    );
}

export default Quiz;