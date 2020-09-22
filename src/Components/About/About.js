import React from 'react';

import Teachers from './Teachers/Teachers';
import GridStudents from '../Grid/GridStudents/GridStudents';

const about = () => {
  return(
    <div className="container">
      <Teachers/>
      <section>
        <GridStudents/>
      </section>
    </div>
  )
};

export default about;