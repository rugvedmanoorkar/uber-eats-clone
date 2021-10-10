import React from 'react'
import { Link } from "react-router-dom";

const ProfileSidebar = () => {
    return (
        
            <div className="profile-sidebar">
                <div className="profile-sidebar2">
                    <nav className='profile-sidebar-nav'>
                        <ul className='profile-sidebar-nav-list'>
                            <li className='profile-sidebar-nav-item'>
                            <a href="https://m.uber.com" className="profile-sidebar-nav-label">Profile Setting</a>
                            </li>
                            <li className='profile-sidebar-nav-item'>
                            <Link to="/menu"><a href="" className="profile-sidebar-nav-label">Menu</a></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        
    )
}

export default ProfileSidebar
