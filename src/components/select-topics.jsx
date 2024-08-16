import React from 'react';

const SelectTopics = ({ topics, selectedTopics, onTopicClick, onBegin }) => (
    <div>
        <h2>Select Topics for the Quiz</h2>
        <ul className="select-topic">
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
        <div className="footer">
            <button disabled={selectedTopics.length === 0} className="btn-start" onClick={onBegin}>Begin</button>
        </div>
    </div>
);

export default SelectTopics;