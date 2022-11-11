import React, {useContext} from 'react';
import {Context} from "../../index";
import './NavBar.css'
import LogoSVG from '../../img/logo.svg'

const NavBar = () => {
    const {user} = useContext(Context)

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <div className="navbar-icon">
                    <a href="/">
                        <img src={LogoSVG} alt=""/>
                    </a>
                </div>
                <div className="navbar-list">
                    <a href="/">Home</a>
                    <a href="/repo">Repositories</a>
                    <a href="https://github.com/acebackwards">GitHub</a>
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