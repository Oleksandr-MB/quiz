import React, { useState } from "react";
import { topicsMap } from "../../constants.js";

const SelectTopic = ({ setMode, setState, topic, subTopic, setSubTopic, setTopic }) => {
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

    const onBegin = () => {
        setState("quiz");
        const selectedTopic = document.querySelector(".selected");
        if (selectedTopic) 
            selectedTopic.className = null;
    };

    const topics = Array.from(topicsMap.keys());

    return (
        <div className="main-container">
            <div className="header"><h1 className="header-text">Select the topic</h1></div>
            <div className="content">
                <ul className="list-topics">
                    { topics.map((tpc, index) => (
                        <li 
                            key={index}
                            className={tpc === topic ? "list-topics-selected" : null}
                            onClick={() => {toggleHidden(tpc); setTopic(tpc)}}
                        >
                            <div className="two-columns"><h3>{tpc}</h3><span className="show-more-sign">{hidden[tpc] ? "\u2227" : "\u2228"}</span></div>
                            <ul 
                                className="select-topic"
                                hidden={!hidden[tpc]}
                            >
                                { topicsMap.get(tpc).map((subTpc, subIndex) => (
                                    <li
                                        key={subIndex}
                                        onClick={(event) => onSubTopicClick(event, subTpc)}
                                        className={subTpc === subTopic ? "selected" : null}
                                        hidden={!subTpc}
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
                <button className="btn-cancel" onClick={() => {setMode("welcome"); setState("topic")}}>Cancel</button>
                <button
                    className="btn-begin"
                    disabled={subTopic === null} 
                    onClick={onBegin}
                >
                    Begin
                </button>
            </div>
        </div>
    );
};

export default SelectTopic;
