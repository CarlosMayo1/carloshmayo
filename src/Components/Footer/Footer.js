import React from 'react';

import './Footer.css';
import FooterIcons from './FooterIcons/FooterIcons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footer = () => {
  return(
    <div className="footer-wrapper">
      <div className="footer-inner">
        <div className="footer-content-information">
          <span>Diseñedo y desarrollado con <FontAwesomeIcon icon={["fas", "heart"]}/> &  <FontAwesomeIcon icon={["fas", "coffee"]}/> por Carlos Mayo </span>
        </div>
        <div className="footer-content-icons">
         <FooterIcons/>
        </div>
      </div>
    </div>
  )
};

export default footer;