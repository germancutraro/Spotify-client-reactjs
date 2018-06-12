export default (state = [], action) => {
  switch (action.type) {
    case 'IS_FETCHING':
      return action;  
    case 'COMPLETE_FETCH': 
      return [...action.payload]
    case 'ERROR_FETCH':
      return []  
    default:
      return state;
  } 
};