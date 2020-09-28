import React from 'react';

import './GridStudents.css';
import Student from '../Student/Student';
import studentsInfo from '../Student/StudentsInfo';

const gridStudents = () => {
 
  let student = [];
  studentsInfo.forEach(element => {
    student.push(
      <Student
        key={element.id}
        img={element.img}
        alt={element.alt}/>
    )
  });
  
  return(
    <div className="div-wrapper">
      {student}
    </div>
  )
};

export default gridStudents;