import React, { Component } from 'react';
import FinishedGame from '../presentational/finishedGame'
import { Row } from 'react-bootstrap'

class FinishedGames extends Component {

  render() {
    var allFinishedGames = this.props.games.map((game) => {
        let teams = game.competitions[0]
        return <FinishedGame homeTeamName={teams.competitors[0].team.abbreviation} awayTeamName={teams.competitors[1].team.abbreviation} homeScore={teams.competitors[0].score} awayScore={teams.competitors[1].score}/>
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
