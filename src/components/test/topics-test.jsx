import React from "react";

const SelectTopics = ({ topics, selectedTopics, setSelectedTopics }) => {
    const onTopicClick = (topic) => {
        setSelectedTopics(prev => {
            if (prev.includes(topic)) {
                return prev.filter(t => t !== topic);
            } 
            else {
                return prev.concat(topic);
            }
        });
    };

    return (
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
}

export default SelectTopics;