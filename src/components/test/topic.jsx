import React from "react";
import {topics} from "../../constants.js";

const SelectTopic = ({setState, topic, setTopic}) => {
    
    return (
        <div className="main-container">
            <div className="header"><h2 className="header-text">Select the topic</h2></div>
            <div className="content">
                <ul className="select-topic">
                    {topics.map((tpc) => (
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
                <button 
                    disabled={topic === null} 
                    onClick={() => {
                        setState("quiz")
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