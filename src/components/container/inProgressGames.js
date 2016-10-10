import React, { Component } from 'react';
import InProgressGame from '../presentational/inProgressGame'
import { Row, Media, Grid } from 'react-bootstrap'


class InProgressGames extends Component {

  render() {
    var allInProgressGames = this.props.games.map((game) => {
      let teams = game.competitions[0]
        return <InProgressGame homeTeamName={teams.competitors[0].team.abbreviation} homeScore={teams.competitors[0].score} awayTeamName={teams.competitors[1].team.abbreviation} awayScore={teams.competitors[1].score} inning={game.competitions[0].status.detail}/>
    })

    return (
      <div>
        <Row className="show-grid">
          {allInProgressGames}
        </Row>
      </div>
    )
  }
}


export default InProgressGames
