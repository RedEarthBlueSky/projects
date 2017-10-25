export default (state = null, action) => {
  //  reducer boilerplate
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
     return state;
  }
};
