import React from 'react';

import Teachers from './Teachers/Teachers';
import GridStudents from '../Grid/GridStudents/GridStudents';

// This is another expriment
import NewExperiment from './NewExperiment/NewExperiment';

const about = () => {
  return(
    <div className="container">
      <Teachers/>
      <section>
        <GridStudents/>
        <NewExperiment/>
      </section>
    </div>
  )
};

export default about;