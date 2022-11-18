import React, {useState} from 'react';
import '../components/Auth/Auth.css'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    // let currentUrl = window.location.href

    return (
        <div className='auth-container'>
            <div className='auth-method'>
                    <>
                        <div className="choose-method">
                            {isLogin ?
                                <>
                                    <h3>No account yet?</h3>
                                    <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
                                </> :
                                <>
                                    <h3>Already have account?</h3>
                                    <NavLink to={LOGIN_ROUTE}>Log In</NavLink>
                                </>
                            }
                        </div>
                        <div className="auth-input-container">
                            <form>
                                <h2>{isLogin ? 'Login' : 'Registration'}</h2>
                                <div className='user-box'>
                                    <input type="text" className="auth-input"
                                           value={email}
                                           onChange={e => setEmail(e.target.value)}/>
                                    <label>Login</label>
                                </div>
                                <div className='user-box'>
                                    <input type="password" className="auth-input"
                                           value={password}
                                           onChange={e => setPassword(e.target.value)}/>
                                    <label>Password</label>
                                </div>
                                <button>
                                    Confirm
                                </button>
                            </form>
                        </div>
                    </>

            </div>
        </div>
    );
};

export default Auth;