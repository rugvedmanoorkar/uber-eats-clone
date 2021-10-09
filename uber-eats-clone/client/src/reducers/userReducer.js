import {GET_USER} from "../actions/types";
const initialState = {
    user: []
};

export default function(state = initialState, action) {
  console.log(action, " GET USER REDUCER")
    switch (action.type) {
      case GET_USER:
        
        return {
          ...state,
          user: action.payload,
        };
        default:
            return state;
    }
}
