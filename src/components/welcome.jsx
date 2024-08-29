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
                <li>In <strong>Test Mode</strong>, questions cover whole topics and are shuffled. You will have 20 minutes solve 15 questions.<br/></li>
                <li>If you have found a bug or have an idea on how to improve the app, feel free to contact me at <a href="mailto: oleksandr.marchenko.002@student.uni.lu">oleksandr.marchenko.002@student.uni.lu</a><br/></li>
                <li>Finally, feel free to contribute to the GitHub repository <a href="https://github.com/Oleksandr-MB/quiz">https://github.com/Oleksandr-MB/quiz</a></li>
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
