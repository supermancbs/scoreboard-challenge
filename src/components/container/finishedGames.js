import React, { Component } from 'react';
import FinishedGame from '../presentational/finishedGame'
import { Row } from 'react-bootstrap'

class FinishedGames extends Component {

  render() {
    var allFinishedGames = this.props.games.map((game) => {
        return <FinishedGame homeTeamName={game.competitions[0].competitors[0].team.abbreviation} awayTeamName={game.competitions[0].competitors[1].team.abbreviation} homeScore={game.competitions[0].competitors[0].score} awayScore={game.competitions[0].competitors[1].score}/>
    })

    return (
      <div>
        <Row className="show-grid">
          {allFinishedGames}
        </Row>
      </div>
    )
  }
}


export default FinishedGames
