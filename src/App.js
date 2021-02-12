import React, { Component } from 'react';
import Home from './Components/HomeComponent';
import About from './Components/AboutComponent';
import Problems from './Components/ProblemsComponent';
import NavBar from './Components/NavComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container full-site">
          <NavBar />
          <div id="home"><Home /> </div>
          <div id="about"><About /></div>
          <div id="problems"><Problems /></div>
        </div>

      </div>
    );
  }
}

export default App;