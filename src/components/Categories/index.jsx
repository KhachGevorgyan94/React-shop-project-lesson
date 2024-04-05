import React, { useState } from "react";
import './style.scss';
import Cat1 from '../../assets/img/cat-1.jpg';
import Cat2 from '../../assets/img/cat-2.jpg';
import Cat3 from '../../assets/img/cat-3.jpg';
import Cat4 from '../../assets/img/cat-4.jpg';

export const Categories = () =>{

    const [cat,setCat] = useState([{
        img:Cat1,
        title:'Category Name',
        descripction:'100Products',
    },
    {
        img:Cat2,
        title:'Category Name',
        descripction:'100Products',
    },
    {
        img:Cat3,
        title:'Category Name',
        descripction:'100Products',
    },
    {
        img:Cat4,
        title:'Category Name',
        descripction:'100Products',
    },
    {
        img:Cat4,
        title:'Category Name',
        descripction:'100Products',
    },
    {
        img:Cat3,
        title:'Category Name',
        descripction:'100Products',
    },
    {
        img:Cat2,
        title:'Category Name',
        descripction:'100Products',
    },
    {
        img:Cat1,
        title:'Category Name',
        descripction:'100Products',
    },
    {
        img:Cat2,
        title:'Category Name',
        descripction:'100Products',
    },
    {
        img:Cat1,
        title:'Category Name',
        descripction:'100Products',
    },
    {
        img:Cat4,
        title:'Category Name',
        descripction:'100Products',
    },
    {
        img:Cat3,
        title:'Category Name',
        descripction:'100Products',
    }])

    return <div className="category G-flex G-flex-wrap">{cat.map((item,index)=>{

        return <div className="category-section">
            <div className="category-box G-flex">
                <div className="img-box G-flex">
                    <img src={item.img} alt="cat" />
                </div>
                <div className="description-box G-center G-flex-column G-align-start">
                    <h3>{item.title}</h3>
                    <span>{item.descripction}</span>
                </div>
            </div>
        </div>
    })}

    </div>
}