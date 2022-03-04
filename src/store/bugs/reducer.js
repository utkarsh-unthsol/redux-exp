
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

let lastId = 0;

const reducer = createReducer([], {
  [actions.bugAdded.type]: (bugs, action)=>{
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false
    });
  }, 

  [actions.bugRemoved.type]: (bugs, action)=>{
    const index = [bugs].findIndex(bug=>bug.id === action.payload.id);
    bugs.splice(index, 1);
  },

  [actions.bugResolved.type]: (bugs, action)=>{
    bugs.forEach(bug => {
      if (bug.id === action.payload.id) bug.resolved = true;
    });
  }
});

export default reducer;