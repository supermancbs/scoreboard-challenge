import React, { Component } from 'react';
import ScheduledGame from '../presentational/scheduledGame'
import { Media, Row, Grid, Carousel } from 'react-bootstrap'

class ScheduledGames extends Component {

  render() {
    var allScheduledGames = this.props.games.map((game) => {

        return <ScheduledGame homeTeamName={game.competitions[0].competitors[0].team.abbreviation} homeTeamRecord={game.competitions[0].competitors[0].team.record.summary} awayTeamName={game.competitions[0].competitors[1].team.abbreviation} awayTeamRecord={game.competitions[0].competitors[1].team.record.summary} date={game.date.slice(5, 10)}/>
    })

    return (
      <div>
          <Row className="show-grid">
          <Carousel>
            <Carousel.Item>
              <Media.List>
                <Media.ListItem>
                  {allScheduledGames.slice(0, 6)}
                </Media.ListItem>
              </Media.List>
            </Carousel.Item>
            <Carousel.Item>
            <Media.List>
              <Media.ListItem>
                {allScheduledGames.slice(6, -1)}
              </Media.ListItem>
            </Media.List>
          </Carousel.Item>
          </Carousel>
        </Row>
      </div>

    )
  }
}


export default ScheduledGames
