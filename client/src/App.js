import React from 'react';
import Registration from './components/Registration'
import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage/>
      <Registration />
    </div>
  );
}

export default App;
