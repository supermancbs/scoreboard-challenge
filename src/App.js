import React, { Component } from 'react';
import ScoreBoard from './components/container/scoreboard'
import './App.css';

import store from './store/store'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <ScoreBoard store={store}/>
        </div>
      </div>
    );
  }
}

export default App;
