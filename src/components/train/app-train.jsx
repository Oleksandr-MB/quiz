import React, { useState, useEffect } from "react";
import Header from "./header-train.jsx";
import Footer from "./footer-train.jsx";
import SelectTopic from "./topics-train.jsx";
import Question from "./question-train.jsx";
import Results from "./results-train.jsx";
import { quizTopics } from "../../constants.js";

const TrainApp = ({ setCurrentMode }) => {
    const topics = quizTopics.topics;
    const [currentState, setCurrentState] = useState("select-topic");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [userAnswer, setUserAnswer] = useState("");
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch("https://66c64791134eb8f43497440d.mockapi.io/api/quizquestions");
                const data = await response.json();
                setQuestions(data);
            } 
            catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        fetchQuestions();
    }, []);
    
    return (
        <div className="main-container">
            <div className="header">
                <Header
                    currentState={currentState}
                    totalQuestions={questions.length}
                    currentQuestionIndex={currentQuestionIndex}
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

                { currentState === "results" && <Results questions={questions}/> }

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