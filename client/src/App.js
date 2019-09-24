import React from 'react';
import Registration from './components/Registration';
import Login from "./components/Login";
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import ActivityBuilder from './components/ActivityComponents/ActivityBuilder'

import {Route} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={LandingPage} /> 
      <Route path="/register" component={Registration} />
      <Route path="/login" component={Login} />   
      <Route path="/categories" component={Categories} />
      <Route path="/activities" component={ActivityBuilder} />

      {/* <PrivateRoute to="/categories" component={Categories} /> */}
    </div>
  );
}

export default App;
