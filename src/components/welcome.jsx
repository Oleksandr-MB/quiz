import React from "react";

const WelcomePage = ({setMode}) => (
    <div className="main-container">
        <div className="header">
            <h1 className="header-text">Welcome to the quiz</h1>
        </div>
        <div className="content">
            <h2>Rules:</h2>
            <ul className="list">
                <li>In <strong>Training Mode</strong>, questions are split into many small subtopics and are not mixed.<br/></li> 
                <li>In <strong>Test Mode</strong>, questions cover whole topics and are shuffled. You will have 20 minutes to solve 15 questions.</li>
                <li>Fully correct answers give you 1 point, partially correct - 0.5 points and wrong answers - 0 points.<br/></li> 
            </ul>
            <h2>Good luck!</h2>
        </div>
        <div className="footer">
            <button className="btn-train" onClick={() => setMode("train")}>Train Mode</button>
            <button className="btn-test" onClick={() => setMode("test")}>Test Mode</button>
        </div>
    </div>
);

export default WelcomePage;
