import { takeEvery, takeLatest } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'
import RobotApi from '../../../services/robot.service'
import * as actions from './mainPageActions'

function* fetchMainPageInitializePageData(data) {
  yield put(actions.getMainPageInitializePage.request())
  try {
    const response = yield call(RobotApi.getMainPageData)
    if (response.status === 200) {
      yield put(actions.getMainPageInitializePage.success(response.data))
    }
  } catch (error) {
    yield put(actions.getMainPageInitializePage.failure(error))
  }
}

//WATCHERS
function* watchMainPageInitializePage() {
  yield takeEvery('MAIN_PAGE_INITIALIZE_PAGE', fetchMainPageInitializePageData)
}

export default function* mainPageSaga() {
  yield [
    watchMainPageInitializePage()
  ]
}
