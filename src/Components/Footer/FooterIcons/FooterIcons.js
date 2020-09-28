import React from 'react';

import './FooterIcons.css';

// To have links
import { Link } from 'react-router-dom';
// Icons from fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footerIcons = () => {
  return(
    <div className="footer-content-icons">
      <Link to="facebook" className="media-icon"><FontAwesomeIcon icon={["fab", "facebook"]}/></Link>
      <Link to="instagram" className="media-icon"><FontAwesomeIcon icon={["fab", "instagram"]}/></Link>
      <Link to="twitter" className="media-icon"><FontAwesomeIcon icon={["fab", "twitter"]}/></Link>
      <Link to="youtube" className="media-icon"><FontAwesomeIcon icon={["fab", "youtube"]}/></Link>
    </div>
  );
};

export default footerIcons;