import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';

const f1 = (state = 0, action) => {
  switch(action.type) {
    case 'add':
        return state + action.value;
    case 'sub':
        return state - action.value;
    default:
        return state;
  }
}

const f2 = (state = "", action) => {
  switch(action.type) {
    case 'concat':
        return state + action.character;
    default:
        return state;
  }
}

// const f3 = (state = {}, action) => {
//   return {
//     f1: f1(state.f1, action),  // 会一次传递个每一个reducer最终递归调用整棵树的reducer
//     f2: f2(state.f2, action),  // 因为通过switch-case函数来匹配，所以不同的reducer的case不同就不会错误执行
//   }
// }

const f3 = combineReducers({
  number: f1,
  string: f2,
})

const store = configureStore({
  reducer: f3  // 注册reducer
})

store.subscribe(() => {console.log(store.getState());});  // 没执行一次dispatch就会执行一次这个函数

store.dispatch({type: 'add', value: 1,});  // 会传递给注册的reducer
store.dispatch({type: 'add', value: 2,});
store.dispatch({type: 'add', value: 3,});
store.dispatch({type: 'sub', value: 4,});
store.dispatch({type: 'sub', value: 5,});

store.dispatch({type: 'concat', character: "lyn",});
store.dispatch({type: 'concat', character: "18",});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);