import React, { useState } from "react";
import './style.scss';
import Vendor1 from '../../assets/img/vendor-1.jpg';
import Vendor2 from '../../assets/img/vendor-2.jpg';
import Vendor3 from '../../assets/img/vendor-3.jpg';
import Vendor4 from '../../assets/img/vendor-4.jpg';
import Vendor5 from '../../assets/img/vendor-5.jpg';
import Vendor6 from '../../assets/img/vendor-6.jpg';


export const Sponsor = () =>{

    const [sponsor,setSponsor] = useState([
        {
            img:Vendor1
        },
        {
            img:Vendor2
        },
        {
            img:Vendor3
        },
        {
            img:Vendor4
        },
        {
            img:Vendor5
        },
        {
            img:Vendor6
        },
    ])

    return <div className="sponsor G-flex"> {sponsor.map((item,index)=>{

        return <div className="sponsor-box G-flex">
            <div className="G-flex">
                <img src={item.img} alt="img" />
            </div>
        </div>
    })}

    </div>
}