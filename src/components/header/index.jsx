import React from "react";
import './style.scss';
import { Link, NavLink } from "react-router-dom";
import { RouterList } from "../../router";
import Logo from '../../assets/img/Screenshot 2024-03-09 194705.png';

export const Header = () => {

    return <div>
        <header>
            <div className="G-container">
                <div className="header-box G-flex G-align-center G-justify-between">
                    <div className="header-box-left G-flex G-align-center G-justify-between">
                    <div className="logo">
                        <Link to={RouterList.HOME}><img src={Logo} alt="logo" /></Link>
                    </div>
                    <div className="menu">
                        <ul className="G-flex menu-list">
                            <li><NavLink to={RouterList.HOME}>Home</NavLink></li>
                        </ul>
                    </div>
                    </div>
                    <div className="header-shop-cart G-flex">
                        <Link to={RouterList.LOG_IN}>Log in</Link>
                        <Link to={RouterList.REGISTRATION}>Registration</Link>
                        <div>
                            <i className="icon-heart icon-heart-my"></i>
                            <span></span>
                        </div>
                        <div>
                            <i className="icon-shopping-cart icon-shopping-cart-my"></i>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
}