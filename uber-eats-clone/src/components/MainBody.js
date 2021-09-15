import React from 'react'
import PriceRange from './Filters/PriceRange'
import Sort from './Filters/Sort'
const MainBody = () => {
    return (
        <div class='main-body'>
            <div class= 'hs5'></div>
                <div class='side-nav'>
                    <div class='side-nav2'>
                        <div class='side-nav-content'>
                        <div class= 'hs5'></div>
                        <div className='side-nav-heading'>
                          <h1 className='side-nav-heading2'>All stores</h1> 
                            <div>
                                <Sort />
                                <PriceRange />
                              </div> 
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default MainBody
