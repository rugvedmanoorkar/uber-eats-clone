import React from "react";
import {connect , useSelector, useDispatch} from 'react-redux'
import { getRestaurants } from "../actions/restaurantActions";
import MainFrameGridBody from "./MainFrameGridBody";
import { useEffect } from "react";

const MainFrameContent = ({getRestaurants, restaurant}) => {

  useEffect(() => {
    getRestaurants();
    
  }, [getRestaurants]);
  console.log(restaurant)
  const restaurants  = typeof(restaurant.data) == 'undefined' ? [] : restaurant.data ;
  console.log(restaurants , " P" )

  
  return (
    <div>
      <div className="vs24"></div>
      <div className="main-frame-grids">
        {Object.values(restaurants).map(restaurant => (
          <MainFrameGridBody key ={restaurant.id} restaurant={restaurant}/>
        ))}
        {/* <MainFrameGridBody />
        <MainFrameGridBody />
        <MainFrameGridBody />
        <MainFrameGridBody /> */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    
  restaurant: state.restaurant.restaurants,
  //isAuthenticated: state.auth.isAuthenticated
  }
  console.log(state.restaurant.restaurants, " ***")
}




export default connect(mapStateToProps, { getRestaurants })(MainFrameContent);
