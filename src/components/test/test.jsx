import React, { useState } from "react";
import Topic from "./topic.jsx";
import Quiz from "./quiz.jsx";
import Result from "./result.jsx";

const TestApp = ({setMode}) => {
    const [filteredQuestions, setFilteredQuestions] = useState([]);    
    const [state, setState] = useState("topic");
    const [topic, setTopic] = useState(null);
    const [userAnswer, setUserAnswer] = useState([]);

    return (
        <>
            {state === "topic" && 
                <Topic
                    setState={setState}
                    topic={topic}
                    setTopic={setTopic}
                />
            }
            
            {state === "quiz" && 
                <Quiz
                    state={state}
                    filteredQuestions={filteredQuestions}
                    setFilteredQuestions={setFilteredQuestions}
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswer}
                    setState={setState}
                    topic={topic}
                /> 
            }

            {state === "result" && 
                <Result
                    filteredQuestions={filteredQuestions}
                    userAnswer={userAnswer}
                    setMode={setMode}
                    setState={setState}
                /> 
            }
        </>
    )
}

export default TestApp;
