import React, { useState } from "react";
import Header from "./header-train.jsx";
import Footer from "./footer-train.jsx";
import SelectTopic from "./topics-train.jsx";
import Question from "./question-train.jsx";
import Results from "./results-train.jsx";
import { quizQuestions, quizTopics } from "../../constants.js";

const TrainApp = ({ setCurrentMode }) => {
    const topics = quizTopics.topics;
    const questions = quizQuestions.questions;

    const [currentState, setCurrentState] = useState("select-topic");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [userAnswer, setUserAnswer] = useState("");

    return (
        <div className="main-container">
            <div className="header">
                <Header
                    questions={questions}
                    currentState={currentState}
                    totalQuestions={questions.length}
                    currentQuestionIndex={currentQuestionIndex}
                    setCurrentState={setCurrentState}
                />
            </div>

            <div className="content">
                { currentState === "select-topic" &&
                    <SelectTopic
                        topics={topics}
                        selectedTopic={selectedTopic}
                        setSelectedTopic={setSelectedTopic}
                    />
                }

                { currentState === "quiz" &&
                    <Question
                        question={questions[currentQuestionIndex]}
                        userAnswer={userAnswer}
                        setUserAnswer={setUserAnswer}
                    />
                }

                { currentState === "results" && <Results /> }

            </div>

            <div className="footer">
                <Footer 
                    state={currentState}
                    question={questions[currentQuestionIndex]}
                    currentQuestionIndex={currentQuestionIndex}
                    totalQuestions={questions.length}
                    selectedTopic={selectedTopic}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    userAnswer={userAnswer}
                    setCurrentState={setCurrentState}
                    setCurrentMode={setCurrentMode}
                />
            </div>
        </div>
    )
}

export default TrainApp;