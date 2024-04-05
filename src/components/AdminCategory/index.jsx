import React, { useState } from "react";
import './style.scss';

export const AdminCategory = () =>{

    const [category,setCategory]=useState([{
        categoryName:'Category Name',
        edit:'Edit',
        delete:'Delete',
    }])

    return <div className="category">{category.map((item,index)=>{

        return <div className="categorys G-flex G-flex-column">
            <div className="category-box G-flex G-justify-between">
            <div className="category-left G-flex G-align-center">
            <div className="category-img"></div>
            <h2>{item.categoryName}</h2>
            </div>
            <div className="category-right G-flex">
            <button>{item.edit}</button>
            <button>{item.delete}</button>
            </div>
        </div>
        </div>
    })}

    </div>
}