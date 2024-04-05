import {useState} from "react";
import './style.scss'

export const LogIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleClick = () => {
        if (formData.email.trim().length && formData.password.trim().length) {
            let x = formData.email + '_' + formData.password
            localStorage.setItem('token', x)
            window.location.reload()
        }
    }


    return <section className='login-section G-center'>
        <div className='G-container'>
            <div className={'P-login-block G-justify-center'}>
                <div className={'P-login-content G-flex-column'}>
                    <h3>Log in admin account</h3>
                    <div className='G-input'>
                        <label>
                            <p>Email Address</p>
                            <input type="text"
                                   name={'email'}
                                   placeholder={'Email'}
                                   onChange={handleChange}
                                   value={formData.email}/>

                        </label>
                    </div>
                    <div className='G-input'>
                        <label>
                            <p>Password</p>
                            <input type="password"
                                   placeholder={'Password'}
                                   name={'password'}
                                   onChange={handleChange}
                                   value={formData.password}/>
                        </label>
                    </div>
                    <button className={'G-button'} onClick={handleClick}>Log in</button>
                </div>
            </div>
        </div>
    </section>
}