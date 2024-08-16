import React from 'react';

const Welcome = ({ onStart }) => (
    <div>
        <h2>Welcome to the Quiz!</h2>
        <span>*Rules and other information*</span>
        <div className="footer">
            <button className="btn-start" onClick={onStart}>Start Quiz</button>
        </div>
    </div>
);

export default Welcome;