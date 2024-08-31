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
                <li>In <strong>Test Mode</strong>, questions cover whole topics and are shuffled. You will have 20 minutes to solve 15 questions.<br/></li> 
                <li>If you encounter a bug or have an idea for improvement, please contact me at <a className="link" href="mailto:oleksandr.marchenko.002@student.uni.lu">oleksandr.marchenko.002@student.uni.lu</a><br/></li> 
                <li>Contributions to the GitHub repository are welcome: <a className="link" href="https://github.com/Oleksandr-MB/quiz">https://github.com/Oleksandr-MB/quiz</a></li>
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
