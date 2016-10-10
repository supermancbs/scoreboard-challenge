import React, { Component } from 'react';
import InProgressGame from '../presentational/inProgressGame'
import { Row, Media, Grid } from 'react-bootstrap'


class InProgressGames extends Component {

  render() {
    var allInProgressGames = this.props.games.map((game) => {
        return <InProgressGame homeTeamName={game.competitions[0].competitors[0].team.abbreviation} homeScore={game.competitions[0].competitors[0].score} awayTeamName={game.competitions[0].competitors[1].team.abbreviation} awayScore={game.competitions[0].competitors[1].score} inning={game.competitions[0].status.detail}/>
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
