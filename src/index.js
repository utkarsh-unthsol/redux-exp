// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { store } from './app/store';
// import { Provider } from 'react-redux';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import store from "./store/store";
import * as actions from "./store/actions";

store.dispatch(actions.bugAdded("desc 1"));
store.dispatch(actions.bugAdded("desc 2"));
store.dispatch(actions.bugResolved(2));
store.dispatch(actions.bugRemoved(1))