import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../images/logo.png";

const Header = ({ isLoggedIn, onOpenLogin, onOpenRegister }) => {
  console.log("Header rendered");
  return (
    <header className="header">
      <nav>
        <ul className="header__nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!isLoggedIn && (
            <>
              <li>
                <button
                  className="header__login-btn"
                  onClick={() => {
                    console.log("Login button clicked");
                    onOpenLogin();
                  }}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  className="header__register-btn"
                  onClick={onOpenRegister}
                >
                  Register
                </button>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
        </ul>
      </nav>
      <img src={Logo} alt="Logo" className="header__logo" />
      <h1 className="header__title">
        Made by <span className="header__title-accent">Mothers</span>
      </h1>
    </header>
  );
};

export default Header;
