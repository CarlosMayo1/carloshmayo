import React from 'react';

import './Information.css';

import Card from './Card/Card';

const information = () => {
  return(
    <div className="informationContent">
      <Card cardTitle="Niños"> 
        <li><span>Reforzamiento</span> de vocabulario</li>
        <li><span>Reforzamiento</span> para gramatica</li>
        <li><span>Reforzamiento</span> de reading</li>
        <li><span>Reforzamiento</span> de listening</li>
        <li><span>Preparacion</span> para examenes</li>
      </Card>
      <Card cardTitle="Jóvenes">
        <li><span>Reforzamiento</span> de vocabulario</li>
        <li><span>Clase</span> de gramática</li>
        <li><span>Ejercicios</span> de reading</li>
        <li><span>Ejercicios</span> de listening</li>
        <li><span>Preparacion</span> para examenes</li>
      </Card>
      <Card cardTitle="Adultos">
        <li><span>Reforzamiento</span> de vocabulario</li>
        <li><span>Clase</span> de gramática</li>
        <li><span>Ejercicios</span> de reading</li>
        <li><span>Ejercicios</span> de listening</li>
        <li><span>Preparacion</span> para examenes</li>
      </Card>
    </div>
  );
};

export default information;