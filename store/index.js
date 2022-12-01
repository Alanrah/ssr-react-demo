import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // 支持store中的已补齐你去，而不只是返回简单的json
import reducer from './reducers';

export default function createStoreInstance(preloadedState = {}) {
  return createStore(reducer, preloadedState, applyMiddleware(thunk));
}
