import React from "react";

const Sort = () => {
  return (
    <div>
      <button className="side-nav-sort-sec">
        <div className="side-nav-sort-toggle">
          Sort
          <div className="flex1"></div>
          <div className="side-nav-toggle-svg">
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
                d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z"
                fill="#000000"
              ></path>
            </svg>
          </div>
        </div>
      </button>
      <div className="sort-options">
          <input type='radio' id='opt-radio1' className='opt-radio' value='Picked for you default' checked></input>
          <label  className='opt-label'>
              <div className="hs6"></div>
              <span className='sort-text'> Picked for you (default)</span>
          </label>
          <div className='vh8'></div>

          <input type='radio' id='opt-radio1' className='opt-radio' value='Most popular' ></input>
          <label  className='opt-label'>
              <div className="hs6"></div>
              <span className='sort-text'> Most popular</span>
          </label>
          <div className='vh8'></div>

          <input type='radio' id='opt-radio1' className='opt-radio' value='Rating' ></input>
          <label  className='opt-label'>
              <div className="hs6"></div>
              <span className='sort-text'> Rating</span>
          </label>
          <div className='vh8'></div>

          <input type='radio' id='opt-radio1' className='opt-radio' value='Delivery Time' ></input>
          <label  className='opt-label'>
              <div className="hs6"></div>
              <span className='sort-text'> Delivery Time</span>
          </label>
          <div className='vh8'></div>
          
      </div>
    </div>
  );
};

export default Sort;
