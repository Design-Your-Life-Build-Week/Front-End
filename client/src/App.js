import React from 'react';
import Registration from './components/Registration'
import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage/>
      {/* <Login/> */}
      {/* <Registration/> */}
    </div>
  );
}

export default App;
