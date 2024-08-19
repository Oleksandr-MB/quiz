import React, { useEffect } from "react";

const Timer = ({ questions, currentState, setCurrentState, setTime }) => {
    const maxTime = questions.filter((q) => q.type === "multiple-choice").length * 5 + questions.filter((q) => q.type === "open").length * 10;
    const progressBar = document.querySelector(".progress-bar");
    if (progressBar) {
        progressBar.style.setProperty("--maxTime", `${maxTime}s`);
    }

    useEffect(() => {
        let interval;
        if (currentState === "quiz") {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime === maxTime) {
                        setCurrentState("results");
                        clearInterval(interval);
                        return prevTime;
                    }
                    return prevTime+1;
                });
            }, 1000);
        } 
        else {
            setTime(0);
        }
        return () => clearInterval(interval);
    }, [currentState, maxTime, setCurrentState, setTime]);

    return <div className="progress-bar-bg"><div className="progress-bar"></div></div>;
};

export default Timer;