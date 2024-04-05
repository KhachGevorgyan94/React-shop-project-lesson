import React from "react";
import './style.scss'
export  const AdminHeader = ({title})=> {
    const logOut = ()=>{
        localStorage.removeItem('token')
        window.location.reload()
    }
    return <div className='page-header G-flex G-justify-between G-align-center'>
        <h3>{title}</h3>
        <button onClick={logOut} className='G-button sign-out-btn'>Sing out</button>
    </div>
}