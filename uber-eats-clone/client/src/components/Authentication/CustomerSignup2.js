import React from 'react'

const CustomerSignup2 = () => {
    return (
        <div>
            <header class='login-header'></header>
            <div className="login-logo">
                <div className="login-logo-content">
                <img alt="Uber Eats Login" role="img" src={'assets/logo.svg'} width="146" height="24"  ></img>
                </div>
            </div>
            <div className="login-main">
                <div className="login-main2">
                <div className="login-main3">
                    <form className='form-emailID' method='POST'>
                    <h4 id= 'input-title'>Welcome Back</h4>
                    <label class="label" id="input-label" for="useridInput">Sign in with your email address or mobile number.</label>
                    <div className='email-text-box'>
                        <div className="email-text-box2">
                        <input id="useridInput" autocorrect="off" autocapitalize="off" name="textInputValue" value="rugved.manoorkar@gmail.com" class="text-input" placeholder="Email or mobile number" aria-required="true" aria-invalid="true" aria-describedby="error-caption input-title" />
                        </div>
                    </div>
                    <div id="error-caption" style="font-weight: 500; font-size: 12px; line-height: 24px; color: rgb(203, 56, 11); box-sizing: border-box;"><div></div></div>
                    <div class="next-button-wrapper"><button class="login-next-btn"><span class="push-small--right">Next</span><i class="icon icon_right-arrow-thin"></i></button></div>
                    </form>
                </div>
                <div class="push-small--top"><div id="login-recaptcha"></div></div>
                </div>
            </div>
        </div>
    )
}

export default CustomerSignup2
