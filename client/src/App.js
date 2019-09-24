import React from 'react';
import Registration from './components/Registration'
import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';

import {Route} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Categories from './components/Categories';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={LandingPage} /> 
      <Route path="/register" component={Registration} />   
      <Route path="/categories" component={Categories} />

      {/* <PrivateRoute to="/categories" component={Categories} /> */}
    </div>
  );
}

export default App;
