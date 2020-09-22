import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import Content from '../../Components/Content/Content';
import Navbar from '../../Components/Navbar/Navbar';
import About from '../../Components/About/About';

class Index extends Component {
  render() {
    return(
     <div>
      <Navbar/>
      <Route path="/carloshmayo/" exact component={Content}/>
      <Route path="/carloshmayo/about" exact component={About}/>
      <Route path="/carloshmayo/contact" render={() => <h1>This is the way you can contact me</h1>}/>
     </div>
   
    );
  }
}

export default Index;