import React, { Component } from 'react';
import FinishedGames from './finishedGames'

class ScoreBoard extends Component {

  render() {

    return (
      <div>
        <FinishedGames games={this.props.store.finished}/>
      </div>
    )
  }
}


export default ScoreBoard
