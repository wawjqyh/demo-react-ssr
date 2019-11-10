import { createStore, combineReducers } from 'redux';
import user, { userInitialState } from './user';

// 服务端不能直接返回 createStore，这是一个单例
export function getStore() {
  return createStore(combineReducers({ user }, { user: userInitialState }));
}
