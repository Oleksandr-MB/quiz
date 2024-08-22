import React, { useEffect, useState } from "react";
import Header from "./header-test.jsx";
import Footer from "./footer-test.jsx";
import SelectTopics from "./topics-test.jsx";
import Question from "./question-test.jsx";
import Results from "./results-test.jsx";
import { quizTopics } from "../../constants.js";
 
const TestApp = ({ setCurrentMode }) => {
    const topics = quizTopics.topics;    
    const [currentState, setCurrentState] = useState("select-topic");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [time, setTime] = useState(0);
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
                    questions={questions}
                    currentState={currentState}
                    totalQuestions={questions.length}
                    currentQuestionIndex={currentQuestionIndex}
                    setCurrentState={setCurrentState}
                    setTime={setTime}
                />
            </div>

            <div className="content">
                { currentState === "select-topic" &&
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