import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../middleware/enhancer';

const rootReducer = combineReducers({
  router: connectRouter(history),
});

export default rootReducer;
