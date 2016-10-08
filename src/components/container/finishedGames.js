import React, { Component } from 'react';
import FinishedGame from '../presentational/finishedGame'

class FinishedGames extends Component {

  render() {
    var allFinishedGames = this.props.games.map((game) => {
        return <FinishedGame homeScore={game.competitions[0].competitors[0].score} awayScore={game.competitions[0].competitors[1].score}/>
    })

    return (
      <div>
        {allFinishedGames}
      </div>
    )
  }
}


export default FinishedGames
