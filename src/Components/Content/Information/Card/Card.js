import React from 'react';

import './Card.css';

const card = (props) => {
  return(
    <div className="informationCard">
      <div className="heading">
        <h2 className="cardTitle">{props.cardTitle}</h2>
      </div>
      <div className="cardContent">
        <ul>
          {props.children}
        </ul>
      </div>
      <div className="cardFooter">
        <button className="btn cardButton">Información</button>
      </div>
    </div>
  );
} 

export default card;