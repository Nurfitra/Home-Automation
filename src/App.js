import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Menu from './components/Menu';
import Slide from './components/Slide';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Slide />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color="primary">Danger!</Button>
      </div>
    );
  }
}

export default App;
