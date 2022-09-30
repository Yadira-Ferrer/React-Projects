export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add Item':
      return [...initialState, action.payload];
    case '[TODO] Remove Item':
      return initialState.filter((todo) => todo.id !== action.payload);
    default:
      return initialState;
  }
};
