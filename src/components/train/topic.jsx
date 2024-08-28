import React, { useState } from "react";
import { topics, subTopics } from "../../constants.js";

const SelectTopic = ({setState, topic, subTopic, setSubTopic, setTopic}) => {
    const [hidden, setHidden] = useState({});

    const toggleHidden = (tpc) => {
        setHidden((prevState) => ({
            ...prevState,
            [tpc]: !prevState[tpc],
        }));
    };

    const onSubTopicClick = (event, subTpc) => {
        event.stopPropagation();
        setSubTopic(subTpc);
    };

    return (
        <div className="main-container">
            <div className="header"><h1 className="header-text">Select the topic</h1></div>
            <div className="content">
                <ul className="list-topics">
                    {topics.map((tpc, index) => (
                        <li 
                            key={index}
                            className={tpc === topic ? "list-topics-selected" : null}
                            onClick={() => {toggleHidden(tpc); setTopic(tpc)}}
                        >
                            <h3>{tpc}</h3>
                            <ul 
                                className="select-topic"
                                hidden={!hidden[tpc]}
                            >
                                {subTopics.map((subTpc, index) => (
                                    <li
                                        key={index}
                                        onClick={(event) => onSubTopicClick(event, subTpc)}
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
                        setState("quiz");
                        const selectedTopic = document.querySelector(".selected");
                        if (selectedTopic) selectedTopic.className = null;
                    }}
                >
                    Begin
                </button>
            </div>
        </div>
    );
};

export default SelectTopic;
