import React, { Component } from 'react';
import FinishedGames from './finishedGames'
import ScheduledGames from './scheduledGames'
import InProgressGames from './inProgressGames'

class ScoreBoard extends Component {
debugger
  render() {

    return (
      <div>
        <FinishedGames games={this.props.store.finished}/>
        <ScheduledGames games={this.props.store.scheduled}/>
        <InProgressGames games={this.props.store.inGame}/>
      </div>
    )
  }
}


export default ScoreBoard
