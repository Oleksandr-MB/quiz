import React from "react";

const SelectTopics = ({ topics, selectedTopics, onTopicClick }) => (
    <div className="scroll">
        <ul className="select-topics">
            {topics.map((topic) => (
                <li
                    onClick={() => onTopicClick(topic)}
                    key={topic}
                    className={selectedTopics.includes(topic) ? "selected-topic" : null}
                >
                    {topic}
                </li>
            ))}
        </ul>
    </div>
);

export default SelectTopics;