import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'

const FormSignup = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);
    return (
        <div>
                <div className='form-content-right'>
                    <form className='form' onSubmit={handleSubmit}>
                        <h1>Get started with us today! Create yout account by filling out the information below.</h1>
                        <div className='form-inputs'>
                            <label htmlFor='username'  className='form-label'>UserName</label>
                            <input id='username' type='text' className='form-input' name='username' placeholder='Enter your username' value={values.username} onChange={handleChange}/>
                            {errors.username && <p>{errors.username}</p>}
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='email'  className='form-label'>Email</label>
                            <input id='email' type='text' className='form-input' name='email' placeholder='Enter your email' value={values.email} onChange={handleChange}></input>
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='password'  className='form-label'>password</label>
                            <input id='password' type='password' className='form-input' name='password' placeholder='Enter your password' value={values.password} onChange={handleChange}></input>
                            {errors.password && <p>{errors.password}</p>}
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='password2'  className='form-label'>password2</label>
                            <input id='password2' type='password' className='form-input' name='password2' placeholder='Enter your password2' value={values.password2} onChange={handleChange}></input>
                            {errors.password2 && <p>{errors.password2}</p>}
                        </div>
                        <button className='form-input-btn' type='submit'>Sign Up</button>
                        <span className='form-input-login'>Already have an account? Login <a href='#'>Here</a> </span>
                    </form>
                </div>
        </div>
    )
}

export default FormSignup
