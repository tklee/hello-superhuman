import {initialState} from './mainPageModels'
import RobotApi from '../../../services/robot.service'

export default function mainPageReducer(state = initialState.mainPage, action) {

  const mainPageInitializePageReducer = (state) => {
    let photos = Object.keys(action).map((key) => {
      if (key == 'type') {
      } else {
        return action[key].urls.raw
      }
    })
    return state.set('loaded', true).set('photos', photos)
  }

  const actions = {
    'GET_MAIN_PAGE_INITIALIZE_PAGE_SUCCESS': () => mainPageInitializePageReducer(state),
    'DEFAULT': () => state
  }

  return ((action && actions[action.type]) ? actions[action.type] : actions['DEFAULT'])()
}
