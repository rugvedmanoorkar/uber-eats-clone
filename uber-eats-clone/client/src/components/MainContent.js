import React from 'react'
import MainNav from './MainNav'
import MainBanners from './MainBanners'
import MainBody from './MainBody'
const MainContent = () => {
    return (
        <div className='main-content'>
            <div className='main-grid'>
            <MainNav />
            <MainBody />
            </div>
        </div>
    )
}

export default MainContent
