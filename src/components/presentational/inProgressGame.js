import React from 'react'

let InProgressGame = ({homeScore, awayScore, currentInning}) => {

    return (
      <div>
        home score: {homeScore}
        away score: {awayScore}
        inning : {currentInning}
        <br/><br/>
      </div>
    )
}



export default InProgressGame
