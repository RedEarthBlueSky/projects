//  this function is an action creator
//  action creators are functions that return actions
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
