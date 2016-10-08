import jsonMlb from '../jsonAdapter/jsonAdapter'
const state = jsonMlb

const Store = {
  finished: state.finished,
  scheduled: state.scheduled,
  inGame: state.inGame
}

export default Store
