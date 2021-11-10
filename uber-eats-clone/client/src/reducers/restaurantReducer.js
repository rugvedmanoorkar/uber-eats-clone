import {GET_RESTAURANTS , ADD_RESTAURANT, DELETE_RESTAURANT, GET_MENU} from '../actions/types'

const initialState = {
    restaurants: [
        // {
        //     "id": 1,
        //     "name": "Beet",
        //     "address": "750 Alameda",
        //     "city": "San Jose",
        //     "state": "California",
        //     "country": "United States",
        //     "first_name": "John",
        //     "last_name": "Smith",
        //     "rating": "4.5",
        //     "delivery_fee": 5,
        //     "review_count": 100,
        //     "timings": "6 PM",
        //     "tags": "coffee "
        // },
        // {
        //     "id": 2,
        //     "name": "BK",
        //     "address": "101 San Fernando",
        //     "city": "San Jose",
        //     "state": "California",
        //     "country": "United States",
        //     "first_name": "Amanda",
        //     "last_name": "Waller",
        //     "rating": "3.6",
        //     "delivery_fee": 4,
        //     "review_count": 70,
        //     "timings": "9 PM",
        //     "tags": "mexican"
        // }
    ],
    menu: [

    ]
}


export default function(state = initialState, action) {
    switch (action.type) {
      case GET_RESTAURANTS:
        console.log(action.payload)
        return {
          ...state,
          restaurants: action.payload,
          loading: false,
          
        };
    //   case DELETE_ITEM:
    //     return {
    //       ...state,
    //       items: state.items.filter(item => item._id !== action.payload)
    //     };
    //   case ADD_ITEM:
    //     return {
    //       ...state,
    //       items: [action.payload, ...state.items]
    //     };
    //   case ITEMS_LOADING:
    //     return {
    //       ...state,
    //       loading: true
    //     };


    case GET_MENU:
        
        return {
          ...state,
          menu: action.payload,
          loading: false,
          
        };
      default:
        return state;
    }
}