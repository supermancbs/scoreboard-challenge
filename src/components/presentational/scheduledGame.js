import React from 'react'
import { Media, Col } from 'react-bootstrap'

let FinishedGame = ({homeTeamName, awayTeamName}) => {

    return (
      <div>
      <Col sm={3} md={1} >

        <Media.Left>
            <img width={30} height={30} src="/assets/thumbnail.png" alt="Image"/>
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
