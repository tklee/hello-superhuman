import {action, createRequestTypes} from '../../../utils/actionUtils'
//Note: not using actionBuilder
//const actionBuilder = (type, payload={}) => action(`${ROOT_NAME}_${type}`, payload)

const MAIN_PAGE_INITIALIZE_PAGE = 'MAIN_PAGE_INITIALIZE_PAGE'
export const mainPageInitializePage = () => action(MAIN_PAGE_INITIALIZE_PAGE)

const GET_MAIN_PAGE_INITIALIZE_PAGE = createRequestTypes('GET_MAIN_PAGE_INITIALIZE_PAGE')
export const getMainPageInitializePage = {
  request: () => action(GET_MAIN_PAGE_INITIALIZE_PAGE.REQUEST),
  success: (data) => action(GET_MAIN_PAGE_INITIALIZE_PAGE.SUCCESS, data),
  failure: (error) => action(GET_MAIN_PAGE_INITIALIZE_PAGE.FAILURE, error)
}
