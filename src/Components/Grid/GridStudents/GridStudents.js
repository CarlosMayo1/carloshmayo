import React from 'react';

import './GridStudents.css';
import Student from '../Student/Student';
import studentsInfo from '../Student/StudentsInfo';

const gridStudents = () => {
 
  let student = [];

  const students = studentsInfo.forEach(el => {
    student.push(
      <Student img={el.img} alt={el.alt}/>
    )
  });
  return(
    <div className="div-wrapper">
      {student}
    </div>
  )
};

export default gridStudents;