import React, { useState } from "react";
import WelcomePage from "./welcome-page.jsx";
import TestApp from "./test/app-test.jsx";
import TrainApp from "./train/app-train.jsx";

const App = () => {
    const [currentMode, setCurrentMode] = useState(null);
    return (
        <>
            { currentMode === null && <WelcomePage setCurrentMode={setCurrentMode} /> }
            { currentMode === "test" && <TestApp setCurrentMode={setCurrentMode} /> }
            { currentMode === "train" && <TrainApp setCurrentMode={setCurrentMode} /> }
        </>
    );
}

export default App;
