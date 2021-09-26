import React from 'react'
import MainNav from './MainNav'
import MainBanners from './MainBanners'
import MainBody from './MainBody'
import MainFrameContent from './MainFrameContent'
const MainContent = () => {
    return (
        <div className='main-content'>
            <div className='main-grid'>
            <MainNav />
            
            
            </div>
            
            <MainBody />
            
               
        </div>
    )
}

export default MainContent
