import React from "react";

const WelcomePage = ({ setCurrentMode }) => (
    <div className="main-container">
        <div className="header">
            <h2>Welcome to the quiz</h2>
        </div>
        <div className="content">
            <span>*Rules and other information*</span>
        </div>
        <div className="footer">
            <button className="btn-train" onClick={() => setCurrentMode("train")}>Train Mode</button>
            <button className="btn-test" onClick={() => setCurrentMode("test")}>Test Mode</button>
        </div>
    </div>
);

export default WelcomePage;