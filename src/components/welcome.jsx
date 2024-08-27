import React from "react";

const WelcomePage = ({setMode}) => (
    
    <div className="main-container">
        <div className="header">
            <h2 className="header-text">Welcome to the quiz</h2>
        </div>
        <div className="content">
            <span>*Rules and other information*</span>
        </div>
        <div className="footer">
            <button onClick={() => setMode("train")}>Train Mode</button>
            <button onClick={() => setMode("test")}>Test Mode</button>
        </div>
    </div>

);

export default WelcomePage;