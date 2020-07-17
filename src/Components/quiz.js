import React, { useState } from "react";
import Answers from "./answers";
import Question from "./question";
import Results from "./results";
import "../App.css";


function Quiz(props) {
  // actualiza question index
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // seguimiento de respuestas
  const [answersCount, setAnswersCount] = useState([]);

  // mostrar o no resultados
  const [display, setDisplay] = useState("show"); 
  const [displayResults, setDisplayRestult] = useState("hide");

  // resultados
  const [drama, setDrama] = useState(0);
  const [misterio, setMisterio] = useState(0);
  const [ficcion, setFiccion] = useState(0)

  function selectAnswer(question, type) {
    console.log(currentQuestion, props.quizQuestions.length);
    if (currentQuestion < props.quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      if(type===0){
        setDrama(drama +1)
      }else if(type===1){
        setMisterio(misterio +1)
      }else{
        setFiccion(ficcion+1)
      }
    } else {
      setDisplay("hide")
      setDisplayRestult("show")
    }

    let qst = { question: question, type: type };
    // need to recreate an array in order to push the new datas
    setAnswersCount([...answersCount, qst]);
  }

  function restart(){
    window.location.reload();
  }
      

  return (
    <div className="quiz">
      <div className={display}>
      <Question
        quizQuestions={props.quizQuestions}
        currentQuestion={currentQuestion}
      />
      <Answers
        quizQuestions={props.quizQuestions}
        currentQuestion={currentQuestion}
        selectAnswer={selectAnswer}
      />
      </div>
      <div className={displayResults}>
      <Results
       drama={drama}
       misterio={misterio}
       ficcion={ficcion}
       restart={restart}
      />
      <div>
      </div>
      </div>
    </div>
  );
}

export default Quiz;
