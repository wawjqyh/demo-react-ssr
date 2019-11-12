import { createStore, combineReducers } from 'redux';
import user, { userInitialState } from './user';

// 服务端不能直接返回 createStore，这是一个单例
export function getStore() {
  return createStore(combineReducers({ user }), { user: userInitialState });
}

// 这个是脱水的操作，将服务端的 state 作为 initialState 初始化 store
export function getClientStore() {
  const defaultState = window.context ? window.context : {};
  return createStore(combineReducers({ user }), defaultState);
}
