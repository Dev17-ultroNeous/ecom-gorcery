import React from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../page/otp.css'
function Otp() {
    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data) {
            let otp1 = data.n1
            let otp2 = data.n2
            let otp3 = data.n3
            let otp4 = data.n4
            let Otp = otp1 + otp2 + otp3 + otp4
            console.log(Otp);
            nav('/resetpassword')

        }
    }
    return (
        <section className='otpSection'>
            <div className='headingBoxOtp'>
                <h1 className='headingOtp'>Enter code</h1>
                <p className='detailsOtp'>We send it to the Email</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inputBoxOtp'>
                    <input type='text' className='inputFiled1'{...register("n1", { required: true })} maxLength='1' />
                    <input type='text' className='inputFiled2'{...register("n2", { required: true })} maxLength='1' />
                    <input type='text' className='inputFiled3'{...register("n3", { required: true })} maxLength='1' />
                    <input type='text' className='inputFiled4'{...register("n4", { required: true })} maxLength='1' />
                </div>
                <div className='verify'>
                    <Button type='submit' className='btnVerify'>Verify</Button>

                </div>
            </form>
        </section>
    )
}

export default Otp