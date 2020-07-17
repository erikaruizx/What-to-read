
import React from "react";

function Question(props) {
    return <h2 className="questionTitle">{props.quizQuestions[props.currentQuestion].question}</h2>;
}
export default Question;
