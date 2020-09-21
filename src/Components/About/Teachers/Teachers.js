import React from 'react';

import './Teachers.css';
import Teacher from './Teacher/Teacher';
import teachersInfo from './TeachersInfo';


const teachers = () => {
  return (
    <div>
      <h2 className="main-title">¿Quiénes somos?</h2>
      <Teacher 
        name={teachersInfo[0].name}
        img={teachersInfo[0].img}
        information={teachersInfo[0].information}/>
      <hr></hr>
      <Teacher 
        name={teachersInfo[1].name}
        img={teachersInfo[1].img}
        information={teachersInfo[1].information}/>
    </div>
  )
};

export default teachers;