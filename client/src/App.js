import React from 'react';
import Registration from './components/Registration'
import './App.css';
<<<<<<< HEAD
import Categories from './Categories';
=======
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
>>>>>>> aea544579fe069e6805c10817ababe25d825a406

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Categories /> 
      </header>
=======
      <NavBar/>
      <LandingPage/>
      <Registration />
>>>>>>> aea544579fe069e6805c10817ababe25d825a406
    </div>
  );
}

export default App;
