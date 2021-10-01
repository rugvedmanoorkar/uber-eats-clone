import React from 'react'
import Dietery from './Filters/Dietery'
import PriceRange from './Filters/PriceRange'
import Sort from './Filters/Sort'
import MainFrameContent from './MainFrameContent'
const MainBody = () => {
    return (
        <div className='main-body'>
            <div className= 'hs5'></div>
                <div className='side-nav'>
                    <div className='side-nav2'>
                        <div className='side-nav-content'>
                        <div className= 'hs5'></div>
                        <div className='side-nav-heading'>
                          <h1 className='side-nav-heading2'>All stores</h1> 
                            <div>
                                <Sort />
                                <PriceRange />

                                <Dietery />
                              </div> 
                        </div>
                        </div>
                    </div>
                </div>
                <div className="main-frame-content">
                <MainFrameContent />
                </div>
        </div>
    )
}

export default MainBody
