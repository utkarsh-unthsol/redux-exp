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

import store from "./store/bugs/store";
import * as actions from "./store/bugs/actions";

store.dispatch(actions.bugAdded({description: "desc 1"}));
store.dispatch(actions.bugAdded({description: "desc 2"}));
store.dispatch(actions.bugResolved({id: 2}));
store.dispatch(actions.bugRemoved({id: 1}));