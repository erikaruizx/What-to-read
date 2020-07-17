import React from "react";

function Results(props) {

    const Results = () => {
  if (props.drama > props.misterio && props.drama > props.ficcion) {
    return (
      <div>
        <p className='result'>Te recomendamos Novelas</p>
      </div>
    );
  } else if (props.misterio > props.ficcion) {
    return (
      <div>
        <h2 className='result'>Te recomendamos libros de misterio</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className='result'>Te recomendamos leer libros de ficción</h2>
      </div>
    );
  }
}
return(
<React.Fragment>
<Results />
<div className="secondary-container">
<button className="regresar" onClick={props.restart}>reinicia el test</button>
</div>
</React.Fragment>
);


}



export default Results;