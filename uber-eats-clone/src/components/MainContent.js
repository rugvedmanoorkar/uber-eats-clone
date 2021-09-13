import React from 'react'
import MainNav from './MainNav'
import MainBanners from './MainBanners'
const MainContent = () => {
    return (
        <div className='main-content'>
            <div className='main-grid'>
            <MainNav />
            <MainBanners />
            </div>
        </div>
    )
}

export default MainContent
