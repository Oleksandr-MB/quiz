import React, { useState } from "react";
import Topic from "./topic.jsx";
import Quiz from "./quiz.jsx";
import Result from "./result.jsx";

const TrainApp = ({ setMode }) => {
    const [filteredQuestions, setFilteredQuestions] = useState([]);    
    const [state, setState] = useState("topic");
    const [subTopic, setSubTopic] = useState(null);
    const [topic, setTopic] = useState(null);

    return (
        <>
            {state === "topic" && 
                <Topic
                    setMode={setMode}
                    setState={setState}
                    topic={topic}
                    subTopic={subTopic}
                    setSubTopic={setSubTopic}
                    setTopic={setTopic}
                />
            }
            
            {state === "quiz" && 
                <Quiz
                    setMode={setMode}
                    filteredQuestions={filteredQuestions}
                    setFilteredQuestions={setFilteredQuestions}
                    setState={setState}
                    subTopic={subTopic}
                /> 
            }

            {state === "result" && 
                <Result
                    filteredQuestions={filteredQuestions}
                    setMode={setMode}
                    setState={setState}
                /> 
            }
        </>
    );
}

export default TrainApp;
