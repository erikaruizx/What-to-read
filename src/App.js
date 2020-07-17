import React, {Component} from "react";
import "./App.css";
import Quiz from "./Components/quiz";
import quizQuestions from "./API/quizQuestions";
import "./index.css";


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentQuestion: 0
    }
    }


  render(){
    return(
      <div className="App">
        <h1 className="h1">¡Encuentra tu próximo libro favorito!</h1>
        <p className="parag">Fomentamos la lectura recomendando libros afines a tus gustos</p>
        <Quiz 
        quizQuestions={quizQuestions}
        currentQuestion={this.state.currentQuestion}
        />
      </div>
    );
  }
}
