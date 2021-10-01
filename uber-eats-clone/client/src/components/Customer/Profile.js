import React from 'react'
import ProfileMain from './ProfileMain'
import ProfileSidebar from './ProfileSidebar'

const Profile = () => {
    return (
        <div>
            <div className="cust-profile-main">
            <div className="cust-profile-main2">
                <div className="cust-profile-flex">
                    <ProfileSidebar />
                    <ProfileMain />
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Profile
