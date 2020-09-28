import React from 'react';

import './Form.css';

const form = (props) => (
  <form className="form-contact" onSubmit={props.action}>
    <div className="row">
      <div className="col-md-4">
        <input type="text" className="form-control" value={props.value} onChange={props.changeName} placeholder="Nombres" />
      </div>
      <div className="col-md-4">
        <input type="text" className="form-control" value={props.lastnameValue} onChange={props.changeLastname} placeholder="Apellidos" />
      </div>
      <div className="col-md-4">
        <input type="number" className="form-control" value={props.ageValue} onChange={props.changeAge} placeholder="Edad" />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <input type="text" className="form-control" placeholder="Número de Teléfono" />
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="Correo electrónico" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <input type="text" className="form-control" placeholder="Departamento" />
      </div>
      <div className="col-md-4">
        <input type="text" className="form-control" placeholder="Provincia" />
      </div>
      <div className="col-md-4">
        <input type="text" className="form-control" placeholder="Distrito" />
      </div>
    </div>
    <div className="form-group">
      <label>Por favor ingresar el motivo de sus contacto:</label>
      <textarea className="form-control" row="3"/>
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>
);

export default form;