import React from "react";
import './style.scss';

export const About = () => {

    return <div className="about-box G-flex">
        <div className="icon-box G-flex G-center">
            <i className="icon-check"></i>
            <span>Quality Product</span>
        </div>
        <div className="icon-box G-flex G-center">
            <i className="icon-shipping"></i>
            <span>Free Shipping</span>
        </div>
        <div className="icon-box G-flex G-center">
            <i className="icon-arrows"></i>
            <span>14-Day Return</span>
        </div>
        <div className="icon-box G-flex G-center">
            <i className="icon-telephon"></i>
            <span>24/7 Support</span>
        </div>
    </div>
}