import './App.css';
import './assets/style/index.scss';
import {useEffect, useState} from "react";
import {AdminComponent} from "./components/AdminComponent";
import {GuestComponent} from "./components/GuestComponent";


function App() {

    let [token, setToken] = useState('')

    useEffect(() => {
        let newToken  = localStorage.getItem('token')
        if(newToken){
            setToken(newToken)
        }
    }, []);

    return token ? <AdminComponent/> : <GuestComponent/>
}

export default App;
