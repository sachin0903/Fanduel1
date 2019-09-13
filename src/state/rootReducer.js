import game from './game/reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  game
});

export default rootReducer;
