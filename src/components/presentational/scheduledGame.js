import React from 'react'
import { Media, Col } from 'react-bootstrap'

let FinishedGame = ({homeTeamName, awayTeamName}) => {

    return (
      <div className="box-game">
      <Col sm={3} md={1} >
        <Media.Left>
            <img width={40} height={40} src="https://yt3.ggpht.com/-cXAzzpKrBQk/AAAAAAAAAAI/AAAAAAAAAAA/MaprkNIV-MY/s900-c-k-no-rj-c0xffffff/photo.jpg" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <div className="team-name">
            {homeTeamName}
            <br/>
            {awayTeamName}
          </div>
        </Media.Body>
    </Col>

    </div>
    )
}



export default FinishedGame
