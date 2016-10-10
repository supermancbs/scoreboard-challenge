import React from 'react'
import { Col, Media } from 'react-bootstrap'

let FinishedGame = ({homeScore, awayScore}) => {

    return (
      <div>
      <Col sm={6} md={3} >
        <Media.Left>
            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
        </Media.Left>
          <Media.Body>
            <Media.Heading>Media heading</Media.Heading>
              home score: {homeScore}
              away score: {awayScore}
          </Media.Body>
          <br/><br/>
        </Col>
      </div>

    )
}



export default FinishedGame
