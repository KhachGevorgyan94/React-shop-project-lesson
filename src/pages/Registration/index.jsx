import {useState} from "react";
import './style.scss'

export const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleClick = () => {
        if (formData.firstName.trim().length
            && formData.lastName.trim().length
            && formData.email.trim().length
            && formData.password.trim().length
            && formData.confirmPassword.trim().length) {
            console.log(formData)
        }
    }


    return <section className='registration-section G-center'>
        <div className='G-container'>
            <div className={'P-login-block G-justify-center'}>
                <div className={'P-login-content G-flex-column'}>
                    <h3>Log in admin account</h3>
                    <div className='G-flex-wrap registration-form'>
                        <div className='G-input'>
                            <label>
                                <p>First Name</p>
                                <input type="text"
                                       name={'firstName'}
                                       placeholder={'FirstName'}
                                       onChange={handleChange}
                                       value={formData.firstName}/>

                            </label>
                        </div>
                        <div className='G-input'>
                            <label>
                                <p>Last Name</p>
                                <input type="text"
                                       placeholder={'Last Name'}
                                       name={'lastName'}
                                       onChange={handleChange}
                                       value={formData.lastName}/>
                            </label>
                        </div>
                        <div className='G-input'>
                            <label>
                                <p>Email</p>
                                <input type="text"
                                       placeholder={'Email'}
                                       name={'email'}
                                       onChange={handleChange}
                                       value={formData.email}/>
                            </label>
                        </div>
                        <div className=' G-width-50 G-input'>
                            <label>
                                <p>Password</p>
                                <input type="password"
                                       placeholder={'Password'}
                                       name={'password'}
                                       onChange={handleChange}
                                       value={formData.password}/>
                            </label>
                        </div>
                        <div className=' G-width-50 G-input'>
                            <label>
                                <p>Confirm Password</p>
                                <input type="password"
                                       placeholder={'Confirm Password'}
                                       name={'confirmPassword'}
                                       onChange={handleChange}
                                       value={formData.confirmPassword}/>
                            </label>
                        </div>
                    </div>
                    <button className={'G-button'} onClick={handleClick}>Log in</button>
                </div>
            </div>
        </div>
    </section>
}