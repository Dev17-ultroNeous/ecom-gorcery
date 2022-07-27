import React from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../page/forgetPassword.css'
function ForgetPassword() {
    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data) {
            console.log(data);
            nav('/otp')

        }
    }
    return (
        <div className='forgetSection'>
            <div className='forgetContainer'>
                <div className='heading'>
                    <h1 className='headingForget'>Forgot Password</h1>
                    <p className='detailsForget'>Enter your registered email below to
                        receive password reset instructions</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='inputBoxForget'>
                        <div className='errorBox'>
                            <input type='text' placeholder='Email' {...register("email", {
                                required: {
                                    value: true,
                                    message: '*Enter e-mail address',
                                }, pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: '*Enter a valid e-mail address',
                                },
                            })} className='emailInput' />
                            {
                                errors.email && <div className="error">{errors.email.message}</div>
                            }
                        </div>

                    </div>
                    <div className='submitBox'>
                        <Button className='submitBtn' type='submit'>Submit</Button>
                    </div>
                </form>
                <div className='backToLogin'>
                    <Link to='/login' className='linkBackToLogin'>Back to Login</Link>
                </div>
            </div>
        </div >
    )
}

export default ForgetPassword