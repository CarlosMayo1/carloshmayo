import React from 'react';

const student = props => {
  return(
    <div className="red">
      <img className="red-image" src={props.img} alt={props.alt}></img>
    </div>
  )
  
}


export default student;