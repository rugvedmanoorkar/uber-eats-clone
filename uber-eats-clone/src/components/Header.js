import React from 'react'


const Header = () => {
    return (
        <header>
        <div className ='container'>
            <div className ='logo'>
            <img alt="Uber Eats Home" role="img" src={'assets/logo.svg'} width="146" height="24"  ></img>
            </div>
            <div className='delivery hm'>
                <div className='deliveryType'>
                    <div className='deliveryOpt hbtn'>Delivery</div>
                    <div className='pickupOpt hbtn'>Pickup</div>
                </div>
            </div>
            <div className='searchLocation hm'>
                <h3>San Jose</h3>
            </div>
            <div className='search hm hbtn'></div>
            <div className='cart'>
                <div className='cartContent'>Cart</div>
            </div>
            <div className='signIn'>
                <div className='signinContent'>Sign in</div>
                
            </div>
        </div>
        </header>
    )
}

export default Header
