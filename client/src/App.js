import React from 'react';
import Registration from './components/Registration';
import Login from "./components/Login";
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Family from './components/Categories/Family';

import ActivityBuilder from './components/ActivityComponents/ActivityBuilder'
import ActivityList from './components/ActivityList';


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
      <PrivateRoute path="/categories" component={Categories} />
      
      <PrivateRoute path="/family" component={Family} />
      
      <PrivateRoute path="/activityBuilder" component={ActivityBuilder} />

      <PrivateRoute path="/activities" component={ActivityList} />
    </div>
  );
}

export default App;
