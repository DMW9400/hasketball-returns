import React, { Component } from 'react';
import logo from './logo.svg';
import PaintingsContainer from './PaintingsContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Gallery</h1>
        <PaintingsContainer />
      </div>
    );
  }
}

export default App;
