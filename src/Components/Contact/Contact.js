import React from 'react';

import './Contact.css';

import Form from './Form/Form';

const contact = (props) => {
  return(
    <div className="container">
      <h2 className="contact-header">Para contactarnos:</h2>
      <Form 
        action={props.action} 
        value={props.value} 
        changeName={props.changeName}
        lastnameValue={props.lastnameValue}
        changeLastname={props.changeLastname}
        ageValue={props.ageValue}
        changeAge={props.changeAge}/>
    </div>
  )
};

export default contact;