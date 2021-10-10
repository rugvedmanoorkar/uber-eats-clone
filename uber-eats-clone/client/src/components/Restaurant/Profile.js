import React from 'react'

import ProfileSidebar from './ProfileSidebar'
import RestaurantProfile from './RestaurantProfile'

const Profile = () => {
    return (
        <div>
            <div className="cust-profile-main">
            <div className="cust-profile-main2">
                <div className="cust-profile-flex">
                    <ProfileSidebar />
                    <RestaurantProfile />
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Profile
