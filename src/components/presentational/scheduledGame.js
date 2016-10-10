import React from 'react'
import { Media, Col } from 'react-bootstrap'

let FinishedGame = ({homeTeamName, homeTeamRecord, awayTeamName, awayTeamRecord, date}) => {

    return (
      <div className="box-game">
      <Col sm={3} md={2} >
      <Media.Heading className="date-game">{date}</Media.Heading>
        <Media.Left>
            <img width={40} height={40} src="https://yt3.ggpht.com/-cXAzzpKrBQk/AAAAAAAAAAI/AAAAAAAAAAA/MaprkNIV-MY/s900-c-k-no-rj-c0xffffff/photo.jpg" alt="Image"/>
        </Media.Left>

        <Media.Body>
          <div className="team-name" left>
            {homeTeamName}:   {homeTeamRecord}
            <br/>
            {awayTeamName}:   {awayTeamRecord}
          </div>
        </Media.Body>
    </Col>

    </div>
    )
}



export default FinishedGame
