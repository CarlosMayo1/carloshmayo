import React from 'react';

import Teachers from './Teachers/Teachers';
import GridStudents from '../Grid/GridStudents/GridStudents';

// This file is just an experiment to try github
// I should remember delete it after confirm that I know what I am doing
import Experiment from './Experiment/Experiment';

const about = () => {
  return(
    <div className="container">
      <Teachers/>
      <section>
        <GridStudents/>
        <Experiment/>
      </section>
    </div>
  )
};

export default about;