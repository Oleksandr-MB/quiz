import React from "react";
import { topicsMap } from "../../constants.js";

const SelectTopic = ({setMode, setState, topic, setTopic}) => {
    const topics = Array.from(topicsMap.keys());
    return (
        <div className="main-container">
            <div className="header"><h1 className="header-text">Select the topic</h1></div>
            <div className="content">
                <ul className="select-topic">
                    { topics.map((tpc) => (
                        <li 
                            key={tpc}
                            onClick={() => setTopic(tpc)}
                            className={tpc === topic ? "selected" : null}
                        >
                            {tpc}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer">
                <button className="btn-cancel" onClick={() => {setMode("welcome"); setState("topic")}}>Cancel</button>
                <button
                    className="btn-begin"
                    disabled={topic === null} 
                    onClick={() => {
                        setState("quiz");
                        const selectedTopic = document.querySelector(".selected");
                        if(selectedTopic) 
                            selectedTopic.className = null;
                    }}
                >
                    Begin
                </button>
            </div>
        </div>
    );
};

export default SelectTopic;