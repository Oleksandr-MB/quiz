import React from "react";
import {topics, subTopics} from "../../constants.js";

const SelectTopic = ({setState, subTopic, setSubTopic}) => {
    
    return (
        <div className="main-container">
            <div className="header"><h2 className="header-text">Select the topic</h2></div>
            <div className="content">
                <ul className="list">
                    {topics.map((topic) => (
                        <li key={topic}>
                            {topic}
                            <ul className="select-topic">
                                {subTopics.map((subTpc, index) => (
                                    <li
                                        key={index}
                                        onClick={() => setSubTopic(subTpc)}
                                        className={subTpc === subTopic ? "selected" : null}
                                    >
                                        {subTpc}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer">
                <button 
                    disabled={subTopic === null} 
                    onClick={() => {
                        setState("quiz")
                        const selectedTopic = document.querySelector(".selected");
                        if(selectedTopic) selectedTopic.className = null;
                    }}
                >
                    Begin
                </button>
            </div>
        </div>
    );
};

export default SelectTopic;