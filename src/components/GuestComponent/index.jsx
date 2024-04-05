import {Header} from "../header";
import {Navigate, Route, Routes} from "react-router-dom";
import {RouterList} from "../../router";
import {Home} from "../../pages/home";
import {Adminka} from "../../pages/Dashboard";
import {LogIn} from "../../pages/LogIn";
import {Registration} from "../../pages/Registration";

export const GuestComponent = ()=>{


    return <>
        <Header/>
        <Routes>
            <Route path={RouterList.HOME} element={<Home/>}/>
            <Route path={RouterList.LOG_IN} element={<LogIn/>}/>
            <Route path={RouterList.REGISTRATION} element={<Registration/>}/>
            <Route path={'/*'} element={<Navigate to={RouterList.HOME}/>}/>
        </Routes>
    </>
}