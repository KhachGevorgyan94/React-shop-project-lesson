import React, { useState } from "react";
import './style.scss';
import Product1 from '../../assets/img/product-1.jpg';
import Product2 from '../../assets/img/product-2.jpg';
import Product3 from '../../assets/img/product-3.jpg';
import Product4 from '../../assets/img/product-4.jpg';
import Product5 from '../../assets/img/product-5.jpg';
import Product6 from '../../assets/img/product-6.jpg';
import Product7 from '../../assets/img/product-7.jpg';
import Product8 from '../../assets/img/product-8.jpg';


export const ProductCard = ({item}) =>{


    return item &&  <div className="product-card-section">
        <div className="product-card G-flex">
            <div className="product-img G-flex">
                <img style={{width:'120px', height:'120px'}} src={item.image} alt="img"/>
            </div>
            <div className="product-description G-center G-flex-column">
                <h3>{item.name}</h3>
                <div className="price-box G-flex G-align-center">
                    <span className="price">{item.price}</span>
                    <span className="newPrice">{item.description}</span>
                </div>
                <div className="review-box G-flex G-align-center">
                    <i className="icon-star star"></i>
                    <i className="icon-star star"></i>
                    <i className="icon-star star"></i>
                    <i className="icon-star star"></i>
                    <i className="icon-star star"></i>
                </div>
            </div>
        </div>
    </div>
}