import React, { useState, useEffect } from 'react';
import Welcome from './welcome.jsx';
import SelectTopics from './select-topics.jsx';
import MultipleChoiceQuestion from './multiple-choice-question.jsx';
import OpenQuestion from './open-question.jsx';
import Results from './results.jsx';

const Quiz = ({ questions, topics }) => {
    const [currentState, setCurrentState] = useState("welcome");
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

    const [time, setTime] = useState(0);
    const maxTime = 30;

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
            setCurrentState("result");
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
        setCurrentState("select-topic");
    };

    const calculateScore = () => {
        return userAnswers.reduce((score, answer, index) => {
            return score + (answer === questions[index].correctAnswer ? 1 : 0);
        }, 0);
    };

    useEffect(() => {
        let interval;
        let element = document.querySelector("#progress-bar");
        if (currentState === "quiz") {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (element) {
                        prevTime > 0.75 * maxTime ? element.className = "hurry-up" : null;
                    }
                    if (prevTime === maxTime - 1) {
                        setCurrentState("result");
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
        <div className="quiz-container">
            { currentState === "welcome" && <Welcome onStart={() => setCurrentState("select-topic")} /> }
    
            { currentState === "select-topic" && (
                <SelectTopics
                    topics={topics}
                    selectedTopics={selectedTopics}
                    onTopicClick={onTopicClick}
                    onBegin={() => setCurrentState("quiz")}
                />
            )}
    
            { currentState === "quiz" && (
                <>
                    <progress id="progress-bar" max={maxTime} value={time}></progress>
                    { questions[currentQuestionIndex].type === "multiple-choice" && 
                        <MultipleChoiceQuestion
                            question={questions[currentQuestionIndex]}
                            onAnswer={onAnswer}
                            onClickNext={onClickNext}
                            onClickPrev={onClickPrev}
                            userAnswers={userAnswers}
                            currentQuestion={currentQuestionIndex}
                            totalQuestions={questions.length} />
                    }
    
                    { questions[currentQuestionIndex].type === "open" && 
                        <OpenQuestion
                            question={questions[currentQuestionIndex]}
                            onAnswer={onAnswer}
                            onClickNext={onClickNext}
                            onClickPrev={onClickPrev}
                            userAnswers={userAnswers}
                            currentQuestion={currentQuestionIndex}
                            totalQuestions={questions.length} />
                    }
                </>
            )}
    
            { currentState === "result" && (
                <Results
                    score={calculateScore()}
                    totalQuestions={questions.length}
                    onTryAgain={onTryAgain}
                />
            )}
        </div>
    );
}

export default Quiz;