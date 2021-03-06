import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";
const initialState = {
  items: [
    
  ]
};

export default function (state = initialState, action) {
  console.log(state, " REDUCER STATE")
  console.log(action, " REDUCER ACTION STATE")
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        
        
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.payload
        ),
      };

    case ADD_ITEM:{
      
       return {
        ...state,
        items: [action.payload, ...state.items],
        
      };
      
    }
    default:
      return {
        ...state
      }
  }
}
