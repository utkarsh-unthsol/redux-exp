import { createAction, createReducer } from "@reduxjs/toolkit";


// Actions Creators
export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");


let lastId = 0;

// Reducer
const reducer = createReducer([], {
  [bugAdded.type]: (bugs, action)=>{
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false
    });
  }, 

  [bugRemoved.type]: (bugs, action)=>{
    const index = [bugs].findIndex(bug=>bug.id === action.payload.id);
    bugs.splice(index, 1);
  },

  [bugResolved.type]: (bugs, action)=>{
    bugs.forEach(bug => {
      if (bug.id === action.payload.id) bug.resolved = true;
    });
  }
});

export default reducer;