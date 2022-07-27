import React from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../page/signUp.css'
function SignUp() {
    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data.password === data.confirmPassword) {
            console.log(data);
            nav('/login')
        } else {
            alert("Please enter correct password")
        }

    }
    return (
        <section>
            <div className='signupSection'>
                <div className='boxSignup'>
                    <div className='headOfSingUp'>
                        <h1 className='headingSignUp'>Sign up</h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='inputBox'>
                            <input type='text' className='inputField' {...register("firstName", { required: true })} placeholder='First Name' />
                            <input type='text' className='inputField'  {...register("lastName", { required: true })} placeholder='Last Name' />
                            <div className='errorBoxs'>
                                <input type='text' className='inputField'  {...register("email", {
                                    required: {
                                        value: true,

                                    }, pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: '*Enter a valid e-mail address',
                                    },
                                })} placeholder='Email' />
                                {
                                    errors.email && <div className="errors">{errors.email.message}</div>
                                }
                            </div>

                            <input type='text' className='inputField'  {...register("password", { required: true })} placeholder='Password' />
                            <input type='text' className='inputField'  {...register("confirmPassword", { required: true })} placeholder='Confirm Password' />
                            <input type='text' className='inputField'  {...register("mobileNumber", { required: true, maxLength: 10 })} placeholder='Enter Mobile Number' />
                        </div>
                        <div className='btnSignUpBox'>
                            <Button className='signUp' type='submit'>Sign up</Button>
                        </div>
                    </form>
                    <div className='haveAccount'>
                        <span className='textAccount'>Already have an account?<Link to='/login' className='linkLogin'>Login</Link> </span>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp