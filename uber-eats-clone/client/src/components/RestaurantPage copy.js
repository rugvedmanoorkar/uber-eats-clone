import React from "react";
import RestaurantMenu from "./RestaurantMenu";
import { getRestaurantMenu } from "../actions/restaurantActions";
import { useLocation } from "react-router";
import {connect } from 'react-redux'
import { useEffect } from "react";


const RestaurantPage = ({getRestaurantMenu, menu}) => {
   const location = useLocation();
   
   const restaurant = location["state"]["restaurant"]
   console.log(restaurant.id , " IDD")

   useEffect(() => {
    getRestaurantMenu(restaurant.id);
    
  }, [getRestaurantMenu]);
  

  const menus  = typeof(menu) == 'undefined' ? [] : menu ;
  console.log(menu)

  return (
    <div className="rest-main-content">
      <div className="restaurant-banner">
        <div className="restaurant-banner2">
          <figure className="rest-banner-figure">
            <picture>
              <source
                type="image/webp"
                srcset="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yNmVmMjUxNC1iZWZjLTRjMjktYTc5MS04NTNmZDdmNGY4NTQuanBlZw=="
              />
              <img
                alt=""
                role="presentation"
                src="https://d1ralsognjng37.cloudfront.net/26ef2514-befc-4c29-a791-853fd7f4f854.jpeg"
                className="rest-banner-pic"
              ></img>
            </picture>
          </figure>
          <div className="rest-banner-flex">
            <div className="rest-banner-flex-up"></div>
            <div className="rest-banner-flex-mid"></div>
            <div className="rest-banner-flex-down">
              <div className="rest-banner-title-area">
                <div className="rest-banner-title-area2">
                  <div className="rest-banner-title-area2_5"></div>
                  <div className="rest-banner-spacer"></div>
                  <div className="rest-banner-title-area3">
                    <div className="rest-banner-spacer-40"></div>
                    <div>
                      <h1 className="rest-banner-title-content">
                        {restaurant.name} ({restaurant.address})
                      </h1>
                      <div className="rest-banner-details">
                        <div className="rest-banner-ticket">
                          <span className="ticket">
                            {" "}
                            <span className="kn cp">
                              <img
                                alt=""
                                role="presentation"
                                src="https://dkl8of78aprwd.cloudfront.net/ticket@3x.png"
                                width="14"
                                height="14"
                              />
                            </span>
                          </span>
                        </div>
                        <div>&nbsp;&nbsp;•&nbsp;&nbsp;</div>
                        <span className="rest-banner-del-fee">
                          Delivery Fee is ${restaurant.delivery_fee}
                        </span>
                        <div
                          aria-hidden="true"
                          className="rest-banner-del-fee2"
                        >
                          ${restaurant.delivery_fee} Delivery Fee
                        </div>
                        <div>&nbsp;&nbsp;•&nbsp;&nbsp;</div>
                        <span className="rest-banner-del-time">
                          Delivered in 35 to 45 min
                        </span>
                        <div
                          aria-hidden="true"
                          className="rest-banner-del-time2"
                        >
                          35–45 Min
                        </div>
                        <div>&nbsp;&nbsp;•&nbsp;&nbsp;</div>
                        <div>{restaurant.rating}</div>
                        <div className="rest-banner-spacer-2"></div>
                        <div>({restaurant.review_count}+)</div>
                      </div>
                      <div className="rest-banner-hidden"></div>
                    </div>
                    <div className="rest-banner-spacer-40"></div>
                  </div>
                </div>
                <div className="rest-banner-add-fav">
                  <div className="rest-banner-add-fav-up"></div>
                  <div className="rest-banner-add-fav-down">
                    <div className="group-order-button"></div>
                    <div className="rest-banner-fav-btn"></div>
                    <div className="rest-banner-spacer-40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <RestaurantMenu menus= {menus}/>
    </div>
  );
};

const mapStateToProps = (state) => {
    console.log(state.restaurant.menu.data, " ***")
    return {

    menu: state.restaurant.menu.data,
   
    }
   
  }
  
  
  
  
  export default connect(mapStateToProps, { getRestaurantMenu })(RestaurantPage);
