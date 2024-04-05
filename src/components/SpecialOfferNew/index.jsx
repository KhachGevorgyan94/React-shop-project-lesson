import React, {useState} from "react";
import './style.scss';
import Offer1 from '../../assets/img/offer-1.jpg';
import Offer2 from '../../assets/img/offer-2.jpg';

export const SpecialOfferNew = () =>{

    const [newOffer,setNewOffer] = useState([{
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

    return <div className="offer-card G-flex"> {newOffer.map((item,index)=>{

       return <div className="special-offer-new">
            <div className="offer-box G-center G-flex-column" style={{backgroundImage:`url('${item.img}')`}}>
                <span>{item.save}</span>
                <h2>{item.offer}</h2>
                <button>{item.shop}</button>
            </div>
        </div>
    })}

    </div>
}