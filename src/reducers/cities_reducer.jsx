export default function(state, action) {
  if(state === undefined) {
    return [];
  }

  // Case statement instead of if else
  switch(action.type) {
    case 'SET_CITIES':
      return action.payload;
    default:
      return state;
  }
}
