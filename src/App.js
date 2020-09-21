import React,  {Component} from 'react';

import './App.css';

import {BrowserRouter} from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Index from './Containers/Index/Index';


class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Layout>
          <Index/>
        </Layout>
      </BrowserRouter>
    );
  }
}


export default App;
