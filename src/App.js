import React, { Component } from 'react';
import Home from './Components/HomeComponent';
import About from './Components/AboutComponent';
import Problems from './Components/ProblemsComponent';
import MainNav from './Components/NavComponent';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />

        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="problems"><Problems /></div>

      </div>
    );
  }
}

export default App;