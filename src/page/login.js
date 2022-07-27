import React from 'react'
import '../page/login.css'
import { BsEye } from 'react-icons/bs'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import { GrFacebookOption } from 'react-icons/gr'
import { useForm } from "react-hook-form";

function Login() {
    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        nav("/");
    }
    return (
        <section className='login'>
            <div className='backImg'>
                <div className='head'>
                    <h1 className='headinglogin'>Login</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='input'>

                        <div className='errorBox'>

                            <input type='text' {...register("email", {
                                required: {
                                    value: true,
                                    message: '*Enter e-mail address',
                                }, pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: '*Enter a valid e-mail address',
                                },
                            })} placeholder='Email' className='inputText' />
                            {
                                errors.email && <div className="error">{errors.email.message}</div>
                            }
                        </div>

                        <div className='errorBox'>
                            <input type='password'  {...register("password", {
                                required: {
                                    value: true,
                                    message: '*Enter password address',
                                },
                                minLength: {
                                    value: 8,
                                    message: "*Password must have at least 8 characters"
                                }
                            })} placeholder='Password' className='inputEmail' />
                            {
                                errors.password && <div className="errorMessage">{errors.password.message}</div>
                            }

                        </div>
                        <div className='linkForget'>
                            <Link to='/forgetpassword' className='forgetDetails'>Forgot Password?</Link>
                        </div>
                    </div>

                    <div className='loginBox'>
                        <Button className='loginBtn' type='submit'>Login</Button>
                    </div>
                </form>
                <div className='doNotAccount'>
                    <p className='textAccount'>Don’t have an account?<Link to='/signup' className='signupLink'>Sign Up</Link> </p>
                </div>
                <p className='orText'>Or</p>
                <div className='fbLoginBox'>
                    <div className='fbLogin'>
                        <a href='/fb'><GrFacebookOption className='fbIcon' />  <span className='loginFbIcon'>Login with facebook</span></a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Login