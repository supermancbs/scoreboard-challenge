import React, { Component } from 'react';
import ScheduledGame from '../presentational/scheduledGame'

class ScheduledGames extends Component {

  render() {
    var allScheduledGames = this.props.games.map((game) => {

        return <ScheduledGame homeTeamName={game.competitions[0].competitors[0].team.name} awayTeamName={game.competitions[0].competitors[1].team.name}/>
    })

    return (
      <div>
        {allScheduledGames}
      </div>
    )
  }
}


export default ScheduledGames
