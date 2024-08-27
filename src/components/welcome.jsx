import React from "react";

const WelcomePage = ({ setMode }) => (
    <div className="main-container">
        <div className="header">
            <h2 className="header-text">Welcome to the quiz</h2>
        </div>
        <div className="content">
            <h3>Rules:</h3>
            <ul className="list">
                <li>In <strong>Training Mode</strong>, questions are split into many small subtopics and are not mixed.<br/></li>
                <li>In <strong>Test Mode</strong>, questions cover whole topics and are mixed. There is a 20-minute time limit to solve 15 questions in Test Mode.</li>
            </ul>
            <h2>Good luck!</h2>
        </div>
        <div className="footer">
            <button onClick={() => setMode("train")}>Train Mode</button>
            <button onClick={() => setMode("test")}>Test Mode</button>
        </div>
    </div>
);

export default WelcomePage;
