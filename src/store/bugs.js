import { createSlice } from "@reduxjs/toolkit";
import {createSelector} from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugRemoved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs.splice(index, 1);
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugAssignedToUser: (bugs, action) => {
      const {bugId, userId} = action.payload;

      const index = bugs.findIndex(bug=>bug.id === bugId);
      bugs[index].userId = userId;
    }
  },
});


export const {bugAdded, bugRemoved, bugResolved, bugAssignedToUser} = slice.actions;
export default slice.reducer;


export const getUnrseolvedBugs = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => !bug.resolved)
);