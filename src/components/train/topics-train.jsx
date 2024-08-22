import React from "react";

const SelectTopic = ({ topics, selectedTopic, setSelectedTopic }) => {
    const onTopicClick = (topic) => setSelectedTopic(topic);

    return (
        <ul className="select-topics">
            { topics.map((topic) => (
                <li
                    onClick={() => onTopicClick(topic)}
                    key={topic}
                    className={selectedTopic === topic ? "selected-topic" : null}
                >
                    {topic}
                </li>
            ))}
        </ul>
    );
}

export default SelectTopic;