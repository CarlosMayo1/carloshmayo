import React from 'react';

import './Teachers.css';
import Teacher from './Teacher/Teacher';
import teachersInfo from './TeachersInfo';


const teachers = () => {
  let teachers = [];
  teachersInfo.forEach(element => {
    teachers.push(
      <Teacher
        key={element.id} 
        name={element.name}
        img={element.img}
        information={element.information}
        alt={element.alt}/>
    );
  });

  return (
    <div>
      <h2 className="main-title">¿Quiénes somos?</h2>
      {teachers}
    </div>
  )
};

export default teachers;