import React from 'react';
import './Section.css';

// Notes:
// 1. I could not add the hover action in the link
// 2. It is no the correct way to add links in React
// I should see the tutorial again in order to remember how to do it
// 

const section = () => {
  return(
    <div className="section">
      <img src="https://dy7oszgl9a56g.cloudfront.net/wp-content/uploads/2020/05/13161553/iStock-1031398222dc.jpg" alt="pic"/>
      <div className="sectionParagraph">
        <p>Aprende Inglés de manera inteligente. ¡Aprende con nosotros!</p>
        {/* <p>A smart way to learn English. Learn with us!</p> */}
        <a href="?" className="btn btnSection">Quiero empezar</a>
      </div>
    </div>
  )
}

export default section;