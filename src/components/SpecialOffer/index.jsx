import React, { useState } from "react";
import './style.scss';
import Offer1 from '../../assets/img/offer-1.jpg';
import Offer2 from '../../assets/img/offer-2.jpg';


export const SpecialOffer = () =>{

    const [offer,setOffer] = useState([{
        img:Offer1,
        save:'SAVE 20%',
        offer:'Special Offer',
        shop:'Shop Now'
    },
    {
        img:Offer2,
        save:'SAVE 20%',
        offer:'Special Offer',
        shop:'Shop Now', 
    }])

    return <div className="offer G-flex-column">{offer.map((item,index)=>{

        return <div className="special-offer">
            <div className="offer-box G-center G-flex-column" style={{backgroundImage:`url('${item.img}')`}}>
                <span>{item.save}</span>
                <h2>{item.offer}</h2>
                <button>{item.shop}</button>
            </div>
        </div>
    })}

    </div>
}