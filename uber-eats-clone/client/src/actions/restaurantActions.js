import {GET_RESTAURANTS , ADD_RESTAURANT, DELETE_RESTAURANT, GET_MENU} from './types'
import axios from 'axios'


export const getRestaurants = () => (dispatch) => {
    //dispatch(setItemsLoading());
    axios
      .get('http://localhost:5000/restaurants',{
        params : {
          "city" : "San Jose"
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
        
    })
      .then(res =>
        dispatch({
          type: GET_RESTAURANTS,
          payload: res.data
        },
        console.log(res.data))
      )
      .catch(err =>
        //dispatch(returnErrors(err.response.data, err.response.status))
        console.log("err: ", err)
      );
  };


  export const getRestaurantMenu = (id) => (dispatch) => {
    
    axios
      .get(`http://localhost:5000/restaurants/${id}`,{
        params : {
          "id" : id
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
        
    })
      .then(res =>
        
        dispatch({
          type: GET_MENU,
          payload: res.data
        },
        console.log(res.data), "  Menu res data" )
      )
      .catch(err =>
        //dispatch(returnErrors(err.response.data, err.response.status))
        console.log("err: ", err)
      );
  }

