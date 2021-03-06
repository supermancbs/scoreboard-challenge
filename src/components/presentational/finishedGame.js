import React from 'react'
import { Col, Media } from 'react-bootstrap'

let FinishedGame = ({homeTeamName, awayTeamName, homeScore, awayScore}) => {

    return (

      <div className="box-game">
        <Col sm={3} md={2} className="add-margins">
        <Media.Heading className="date-game">Final</Media.Heading>
          <Media.Left left>
              <img width={40} height={40} src="https://yt3.ggpht.com/-cXAzzpKrBQk/AAAAAAAAAAI/AAAAAAAAAAA/MaprkNIV-MY/s900-c-k-no-rj-c0xffffff/photo.jpg" alt="Image"/>
          </Media.Left>
          <Media.Body left>
            <div className="team-name">
              <div id="winning-team">{homeTeamName}: {homeScore}</div>
              <div id="loosing-team">{awayTeamName}: {awayScore}</div>
            </div>
          </Media.Body>
        </Col>
      </div>

    )
}



export default FinishedGame
