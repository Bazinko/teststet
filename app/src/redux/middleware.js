import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { screenTracking, timeTracking } from '../analytics/Tracker'
import socketMiddleware from './middleware/socketMiddleware'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const NavMiddleware = createReactNavigationReduxMiddleware(
  "root",
  ({NavigatorStateReducer}) => NavigatorStateReducer,
)
// define store middlewares as an array
export default [
  promiseMiddleware,
  thunkMiddleware,
  logger,
  socketMiddleware,
  screenTracking,
  timeTracking,
  NavMiddleware
]
