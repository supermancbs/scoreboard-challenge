import jsonMlb from '../jsonMlb'

var parsedJson = {finished: [], scheduled: [], inGame: []}

function parseMlbJson(json){
  json.forEach((game) => {
    let status = game.competitions[0].status.description
    if (status==="FINAL"){
      parsedJson.finished.push(game)
    }
    else if (status==="SCHEDULED") {
      parsedJson.scheduled.push(game)
    }
    else if (status==="IN PROGRESS") {
      parsedJson.inGame.push(game)
    }
  })
}

var events = jsonMlb.sports[0].leagues[0].events

parseMlbJson(events)

export default parsedJson
