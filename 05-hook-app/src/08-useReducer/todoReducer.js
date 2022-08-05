export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Action.type = need to be implemented.');
    default:
      return initialState;
  }
};
