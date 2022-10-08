export const noteReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'Note-Add':
      return [...initialState, action.payload];
    case 'Note-Delete':
      return initialState.filter((todo) => todo.id !== action.payload);
    default:
      initialState;
  }
};
