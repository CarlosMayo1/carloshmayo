import React from 'react';

const student = props => {
  return(
    <div className="red" key={props.id}>
      <img  className="red-image" src={props.img} alt={props.alt}></img>
    </div>
  )
  
}


export default student;