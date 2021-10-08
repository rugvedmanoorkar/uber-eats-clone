import React ,{useEffect}from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";
import { addItem, getItems } from "../actions/menuActions";
import { connect } from "react-redux";

const RestaurantMenu = ({ menus, addItem, item ,getItems }) => {
  console.log(menus, " menus CHECKKKKKKK");

 
  const addToCart = (menu) => {
    console.log("ITEM TO ADD:", menu);
    const newItem = menu;
    const getAddedItems = getItems()
    console.log(getAddedItems)
    addItem(newItem);
    console.log("ITEM ADDED", menu);
    
  };
  
  console.log(item);
  return (
    <div className="menu-container">
      <div className="menu-main-sec">
        <div>
          <div>
            <div className="menu-headers-sec">
              <div className="menu-headers-sec2">
                <nav role="navigation" className="menu-header-nav">
                  <div className="menu-nav-head">
                    <button className="menu-nav-content">
                      <div className="">Buy 1, Get 1 Free</div>
                    </button>
                    <div className="rest-banner-spacer-40"></div>
                  </div>
                  <div className="menu-nav-head">
                    <button className="menu-nav-content">
                      <div className="">Picked for you</div>
                    </button>
                    <div className="rest-banner-spacer-40"></div>
                  </div>
                  <div className="menu-nav-head">
                    <button className="menu-nav-content">
                      <div className="">Chicken</div>
                    </button>
                    <div className="rest-banner-spacer-40"></div>
                  </div>
                  <div className="menu-nav-head">
                    <button className="menu-nav-content">
                      <div className="">Burgers</div>
                    </button>
                    <div className="rest-banner-spacer-40"></div>
                  </div>
                  <div className="menu-nav-head">
                    <button className="menu-nav-content">
                      <div className="">Shakes &amp; Frozen Custard</div>
                    </button>
                    <div className="rest-banner-spacer-40"></div>
                  </div>
                  <div className="menu-nav-head">
                    <button className="menu-nav-content">
                      <div className="">Crinkle Cut Fries</div>
                    </button>
                    <div className="rest-banner-spacer-40"></div>
                  </div>
                  <div className="menu-nav-head">
                    <button className="menu-nav-content">
                      <div className="">Flat-Top Hot Dogs</div>
                    </button>
                    <div className="rest-banner-spacer-40"></div>
                  </div>
                  <div className="menu-nav-head">
                    <button className="menu-nav-content">
                      <div className="">Drinks</div>
                    </button>
                    <div className="rest-banner-spacer-40"></div>
                  </div>
                  <div className="menu-nav-head">
                    <button className="menu-nav-content">
                      <div className="">Retail</div>
                    </button>
                    <div className="rest-banner-spacer-40"></div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <hr className="menu-hr-line"></hr>
        <ul className="menu-list">
          <li className="menu-item">
            <h2 className="menu-item-header">
              <span className="menu-item-title-sec">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  className="menu-item-ticket2"
                >
                  <path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z"></path>
                </svg>
                <div className="menu-item-spacer-16"></div>Buy 1, Get 1 Free
              </span>
            </h2>
            <ul className="menu-item-grid">
              {typeof menus == "undefined"
                ? []
                : Object.values(menus).map((menu) => (
                    <l1 onClick={() => addToCart(menu)}>
                      <RestaurantMenuItem key={menu.id} menu={menu} />
                    </l1>
                  ))}

              {/* <RestaurantMenuItem /> */}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.item, " ITEM STATE READ");
  return {
    item: state.item,
  };

};

export default connect(mapStateToProps, { addItem, getItems })(RestaurantMenu);
