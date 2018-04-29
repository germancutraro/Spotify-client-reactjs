export default (state = [], action) => {
  switch (action.type) {
    case 'COMPLETE_FETCH': 
      return [...action.payload]
    default:
      return state;
  } 
};