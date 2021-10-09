import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer'
import itemReducer from './itemReducer'
import userReducer from './userReducer'

export default combineReducers({
    restaurant: restaurantReducer,
    item: itemReducer,
    user: userReducer
  });