import React from "react";

const SelectTopics = ({ topics, selectedTopics, onTopicClick }) => (
    <>
        <span className="header">Select Topics for the Quiz</span>
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
    </>
);

export default SelectTopics;