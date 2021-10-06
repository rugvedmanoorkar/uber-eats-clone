import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer'
import itemReducer from './itemReducer'

export default combineReducers({
    restaurant: restaurantReducer,
    item: itemReducer
  });