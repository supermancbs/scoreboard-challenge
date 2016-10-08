import React, { Component } from 'react';
import ScoreBoard from './components/scoreboard'
import './App.css';

import store from './store/store'

class App extends Component {

  render() {
    return (
      <div className="App">

        <p className="App-intro">
          <ScoreBoard store={store}/>
        </p>
      </div>
    );
  }
}

export default App;
