import React, {useContext} from 'react';
import {Context} from "../../index";
import './NavBar.css'
import LogoSVG from '../../img/logo.svg'
import {useNavigate} from "react-router-dom";
import {MAINPAGE_ROUTE, REPOLIST_ROUTE} from "../../utils/consts";

const NavBar = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <div className="navbar-icon">
                    <a href="/">
                        <img src={LogoSVG} alt=""/>
                    </a>
                </div>
                <div className="navbar-list">
                    <div onClick={() => {
                        navigate(MAINPAGE_ROUTE)
                    }}>Home</div>
                    <div onClick={() => {
                        navigate(REPOLIST_ROUTE)
                    }}>Repositories</div>
                    <a href="https://github.com/acebackwards" target="_blank">GitHub</a>
                </div>
                <div className="navbar-auth">
                    <a href="/login">
                        <button>
                            Log In
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;