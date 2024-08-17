import React from "react";

const Results = ({ score, totalQuestions }) => (
    <>
        <span className="header">Your Score: {score}/{totalQuestions}</span>
    </>
);

export default Results;