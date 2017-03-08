import mainPageSaga from './containers/MainPageTemplate/redux/mainPageSaga'

export const runSagas = (sagaMiddleware) => {
  sagaMiddleware.run(mainPageSaga);
}
