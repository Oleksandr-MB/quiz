import React, { useState } from "react";
import Header from "./header-test.jsx";
import Footer from "./footer-test.jsx";
import SelectTopics from "./topics-test.jsx";
import Question from "./question-test.jsx";
import Results from "./results-test.jsx";
import { quizQuestions, quizTopics } from "../../constants.js";

const TestApp = ({ setCurrentMode }) => {
    const topics = quizTopics.topics;
    const questions = quizQuestions.questions;
    
    const [currentState, setCurrentState] = useState("select-topics");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [time, setTime] = useState(0);

    return (
        <div className="main-container">
            <div className="header">
                <Header
                    questions={questions}
                    currentState={currentState}
                    totalQuestions={questions.length}
                    currentQuestionIndex={currentQuestionIndex}
                    setCurrentState={setCurrentState}
                    setTime={setTime}
                />
            </div>

            <div className="content">
                { currentState === "select-topics" &&
                    <SelectTopics
                        topics={topics}
                        selectedTopics={selectedTopics}
                        setSelectedTopics={setSelectedTopics}
                    />
                }

                { currentState === "quiz" &&
                    <Question
                        question={questions[currentQuestionIndex]}
                        userAnswers={userAnswers}
                        currentQuestionIndex={currentQuestionIndex}
                        setUserAnswers={setUserAnswers}
                    />
                }

                { currentState === "results" && 
                    <Results 
                        userAnswers={userAnswers}
                        questions={questions}
                        totalQuestions={questions.length}
                    /> 
                }

            </div>

            <div className="footer">
                <Footer 
                    state={currentState}
                    currentQuestionIndex={currentQuestionIndex}
                    totalQuestions={questions.length}
                    selectedTopics={selectedTopics}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    setCurrentState={setCurrentState}
                    setUserAnswers={setUserAnswers}
                    setCurrentMode={setCurrentMode}
                />
            </div>
        </div>
    )
}

export default TestApp;