import React, { Component } from 'react';
import ScheduledGame from '../presentational/scheduledGame'
import { Media, Row } from 'react-bootstrap'

class ScheduledGames extends Component {

  render() {
    var allScheduledGames = this.props.games.map((game) => {
        return <ScheduledGame homeTeamName={game.competitions[0].competitors[0].team.name} awayTeamName={game.competitions[0].competitors[1].team.name}/>
    })

    return (
      <div>
        <Row className="show-grid">
          <Media.List>
            <Media.ListItem>
              {allScheduledGames}
            </Media.ListItem>
          </Media.List>
        </Row>
      </div>
    )
  }
}


export default ScheduledGames
