let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
        },
      ];

    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);

    case "bugResolved":
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );

    default:
      return state;
  }
}
