import React, { Component } from 'react';
import FinishedGames from './finishedGames'
import ScheduledGames from './scheduledGames'
import InProgressGames from './inProgressGames'
import { Tabs, Tab } from 'react-bootstrap'

class ScoreBoard extends Component {

  render() {

    return (
      <div>
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Finished Games">
          <FinishedGames games={this.props.store.finished}/>
        </Tab>
        <Tab eventKey={2} title="Scheduled Games">
          <ScheduledGames games={this.props.store.scheduled}/>
        </Tab>
          <Tab eventKey={3} title="In Progress" >
            <InProgressGames games={this.props.store.inGame}/>
          </Tab>
      </Tabs>



      </div>
    )
  }
}


export default ScoreBoard
