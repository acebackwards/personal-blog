import React, { useContext } from "react";
import { Context } from "../../index";
import "./NavBar.css";
import LogoSVG from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  MAINPAGE_ROUTE,
  REPOLIST_ROUTE,
} from "../../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-icon">
          <button onClick={() => navigate(MAINPAGE_ROUTE)}>
            <img src={LogoSVG} alt="" />
          </button>
        </div>
        <div className="navbar-list">
          <div onClick={() => {navigate(MAINPAGE_ROUTE)}}>
            Home
          </div>
          <div onClick={() => {navigate(REPOLIST_ROUTE)}}>
            Repositories
          </div>
          <a href="https://github.com/acebackwards" target="_blank">
            GitHub
          </a>
        </div>
        {user.isAuth ?
            <div className="navbar-auth">
              {user.user.role === "ADMIN" ?
                  <button onClick={() => navigate(ADMIN_ROUTE)}>Admin</button>
                  : null
              }
              <button onClick={() => logOut()}>Log Out</button>
            </div>
            :
            <div className="navbar-auth">
              <button onClick={() => navigate(LOGIN_ROUTE)}>Log In</button>
            </div>
        }
      </div>
    </nav>
  );
});

export default NavBar;
