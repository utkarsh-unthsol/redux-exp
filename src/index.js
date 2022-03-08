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

import createStore from "./store/configureStore";
import {bugAdded, bugRemoved, bugResolved, getUnrseolvedBugs, bugAssignedToUser} from "./store/bugs";
import {userAdded, userRemoved} from "./store/users";
import { projectAdded } from "./store/projects";


const store = createStore();


store.dispatch(projectAdded({description: "desc 1"}));
store.dispatch(projectAdded({description: "desc 1"}));
store.dispatch(projectAdded({description: "desc 1"}));
store.dispatch(userAdded({name: "user 1"}));
store.dispatch(bugAdded({description: "desc 1"}));
store.dispatch(bugAdded({description: "desc 2"}));
store.dispatch(bugAssignedToUser({userId: 1, bugId: 2}));
store.dispatch(bugResolved({id: 2}));
// store.dispatch(bugRemoved({id: 1}));

console.log(getUnrseolvedBugs(store.getState()));