import React from 'react'
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import NavBarsHome from '../componets/NavBar'
import '../page/changePassword.css'

function ChangePassword() {
    const nav = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data) {
            console.log(data);
            nav('/login')
        }
    }
    return (
        <>
            <NavBarsHome />
            <section className='changePassword'>
                <div className='changePasswordContainer'>
                    <h1 className='heading'>Change Password</h1>
                    <div className='changePasswordInput'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='inputBoxForget'>
                                <input type='text' placeholder='Old Password' {...register("oldPassword", { required: true })} className='emailInput mb-2' />
                                <input type='text' placeholder='New Password' {...register("newPassword", { required: true })} className='emailInput mb-2' />
                                <input type='text' placeholder='Confirm Password' {...register("confirmPassword", { required: true })} className='emailInput' />
                            </div>
                            <div className='submitBox'>
                                <Button className='submitBtn' type='submit'>Verify</Button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ChangePassword