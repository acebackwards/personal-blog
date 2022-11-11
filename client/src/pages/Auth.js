import React from 'react';
import LogIn from "../components/Auth/LogIn";
import Registration from "../components/Auth/Registration";
import '../components/Auth/Auth.css'

const Auth = () => {

    let currentUrl = window.location.href

    return (
        <div className='auth-container'>
            <div className='auth-method'>
                {currentUrl.endsWith('login') ?
                    <div className="login-method">
                        <div className="choose-method">
                            <h3>No account yet?</h3>
                            <a href="/registration">Sign Up</a>
                        </div>
                        <div className="auth-input-container">
                            <LogIn />
                        </div>
                    </div>
                     :
                currentUrl.endsWith('registration') ?
                    <div className="registration-method">
                        <div className="choose-method">
                            <h3>Already have account?</h3>
                            <a href="/login">Log In</a>
                        </div>
                        <div className="auth-input-container">
                            <Registration />
                        </div>
                    </div>  : console.error('error')
                }

            </div>

        </div>
    );
};

export default Auth;