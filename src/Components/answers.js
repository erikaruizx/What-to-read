
import React from "react";

function Answers(props){
  
    let i = 0;
      const answers =  props.quizQuestions[props.currentQuestion].answers;
      const AnswersList = answers.map((answer) => 
        <li key={i++}  onClick={() => {props.selectAnswer(props.currentQuestion, answers.indexOf(answer))}} className="answer">{answer.content}</li> )

      return(
        <div>
          <ul className="answersList">{AnswersList}</ul>
        </div>
      )



}

export default Answers;