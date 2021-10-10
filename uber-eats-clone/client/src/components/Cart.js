import React,{useEffect, useState} from "react";
import { getItems } from "../actions/menuActions";
import { connect } from "react-redux";
import CartItem from "./CartItem";

const Cart = ({getItems, item, close}) => {
  useEffect(() => {
    getItems();
    
  }, [getItems]);
  
  
  const items = item.items
  console.log(items.length, " Item in cart")
  const [total, setTotal] = useState(0)
  
    return (
    
      <div className="cart-main">
        <div className="cart-main2">
          <div></div>
          <div className="cart-header">
            <div className="cart-header2">
              <div className="cart-close-hidden">Your order</div>
            </div>
            <button
              aria-label="Close"
              className="cart-close-btn-sec" onClick={close}
            >
              <div className="cart-close-btn">
                <svg
                  width="24px"
                  height="24px"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z"
                    fill="#000000"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <div className="cart-body">
            <div className="cart-spacer"></div>
            <div className="cart-title"></div>
            <div className="cart-spacer2"></div>
            
            
            <ul className='cart-items'>
            {items.length == 0 
                ? "Add items to cart"
                : items.map((item) => ( 

                      <CartItem key={item.id} item={item} total = {total}/>
                  ))}
            </ul>
            
            <div className="cart-checkout-sec"></div>
            <div className="cart-checkout-sec2">
              <a
                rel="nofollow"
                href="https://www.ubereats.com/login-redirect/?campaign=signin_universal_link&amp;marketing_vistor_id=0ae98610-8d55-47b5-ac1b-20772e11c2c9&amp;redirect=%2Fcheckout"
                className="cart-checkout-btn"
              >
                <div className="cart-checkout-qty">2</div>
                <div className="cart-checkout-desc">Next: Checkout</div>
                <div className="cart-checkout-total-price">$12.58</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    
  );
};
const mapStateToProps = (state) => {
  console.log(state, " State Cart");
  return {
    item: state.item,
  };
};

export default connect(mapStateToProps, { getItems })(Cart);
