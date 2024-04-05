import './style.scss'

import {Navigate, NavLink, Route, Router, Routes} from "react-router-dom";
import {RouterList} from "../../router";
import {Dashboard} from "../../pages/Dashboard";
import {Products} from "../../pages/Products";

export const AdminComponent = () => {
    return <div className={'admin-page G-flex'}>
        <div className='admin-sidebar'>
            <ul>
                <li>
                    <NavLink to={RouterList.DASHBOARD}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={RouterList.PRODUCTS}>Products</NavLink>
                </li>
                <li>
                    <NavLink to={RouterList.DASHBOARD}>Settings</NavLink>
                </li>
                <li>
                    <NavLink to={RouterList.DASHBOARD}>Category</NavLink>
                </li>
            </ul>
        </div>
        <div className='page-content'>
            <Routes>
                <Route path={RouterList.DASHBOARD} element={<Dashboard/>}/>
                <Route path={RouterList.PRODUCTS} element={<Products/>}/>
                <Route path={'/*'} element={<Navigate to={RouterList.DASHBOARD}/>}/>
            </Routes>
        </div>
    </div>
}