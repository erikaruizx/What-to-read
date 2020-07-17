// CREATE crear POST
// READ leer GET
// UPDATE actualizar PATCH
// SUBSTITUTE substituir PUT
// DELETE borrar
import React from 'react';
import axios from 'axios';

export default class Crud extends React.Component {
    state = {
        selectAnswer: '',
    }
    handleChange = event => {
        this.setState({ selectAnswer: event.target.value });
      }

      handleSChange = event => {
        event.preventDefault();
    
        const Crud = {
          answers: this.state.selectAnswer
        };
    
        axios.post(`https://prueba-roja-eruizx.firebaseio.com/`, { Crud })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Respuesta del usuario:
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <button type="submit">Add</button>
            </form>
          </div>
        )
      }
    }
