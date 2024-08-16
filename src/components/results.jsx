import React from 'react';

const Results = ({ score, totalQuestions, onTryAgain }) => (
    <div>
        <h2>Your Score: {score} / {totalQuestions}</h2>
        <div className="footer">
            <button onClick={onTryAgain}>Try Again</button>
        </div>
    </div>
);

export default Results;