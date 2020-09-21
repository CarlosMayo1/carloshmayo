import React from 'react';

const teacher = (props) => {
  return(
    <div className="row teacher-row-wrapper">
      <div className="col">
        <div className="teacher-image-wrap">
          <img className="teacher-image" src={props.img} alt="image about myself"></img>
        </div>
      </div>
      <div className="col">
        <div className="teacher-info">
          <h3>{props.name}</h3>
          <p>{props.information}</p>
        </div>
      </div>
    </div>
  );
};

export default teacher;