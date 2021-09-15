import React from 'react'

const PriceRange = () => {
    return (
        <div>
            <button className="side-nav-sort-sec">
        <div className="side-nav-sort-toggle">
          Price Range
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
      <div className="price-range-opt-sec">
          <div className="price-range-opt-sec2">
              <button className='dollar-range'>
                  <div className="dollar-content">$</div>
              </button>
          

          
              <button className='dollar-range'>
                  <div className="dollar-content">$</div>
              </button>
          

          
              <button className='dollar-range'>
                  <div className="dollar-content">$</div>
              </button>
          

          
              <button className='dollar-range'>
                  <div className="dollar-content">$</div>
              </button>
          
          </div>
      </div>
        </div>
    )
}

export default PriceRange
