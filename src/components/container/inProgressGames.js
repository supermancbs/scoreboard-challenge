import React, { Component } from 'react';
import InProgressGame from '../presentational/inProgressGame'

class InProgressGames extends Component {

  render() {
    var allInProgressGames = this.props.games.map((game) => {

      debugger
        return <InProgressGame homeTeamName={game.competitions[0].competitors[0].team.name} homeScore={game.competitions[0].competitors[0].score} awayTeamName={game.competitions[0].competitors[1].team.name} awayScore={game.competitions[0].competitors[1].score} inning={game.competitions[0].status.detail}/>
    })

    return (
      <div>
        {allInProgressGames}
      </div>
    )
  }
}


export default InProgressGames
