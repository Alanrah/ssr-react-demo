import { combineReducers } from 'redux';
import homeReducer from './home';
import personalReducer from './personal';
// reducer 更新状态
export default combineReducers({
  home: homeReducer,
  personal: personalReducer,
});
