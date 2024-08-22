import React from "react";
import Latex from "react-latex";

const Results = ({questions}) => {
    return (
        <div>
            <ol>
            { questions.map((question, index) => (
                <li
                    key={index}
                >
                    <Latex>{question.text}</Latex><br/>
                    Correct answer: <Latex>{question.correctAnswer}</Latex><br/>
                </li>
            ))}   
            </ol>
    </div>
    )
};

export default Results;