import React, { useState } from "react";
import WelcomePage from "./welcome.jsx";
import TestApp from "./test/test.jsx";
import TrainApp from "./train/train.jsx";

const App = () => {
    const [mode, setMode] = useState("welcome");
    return (
        <>
            {mode === "welcome" && <WelcomePage setMode={setMode} />}
            {mode === "test" && <TestApp setMode={setMode} />}
            {mode === "train" && <TrainApp setMode={setMode} />}
        </>
    );
}

export default App;
