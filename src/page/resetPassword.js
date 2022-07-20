
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../page/forgetPassword.css'

function ResetPassword() {
    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data) {
            console.log(data);
            nav('/login')

        }
    }
    return (
        <div className='forgetSection'>
            <div className='forgetContainer'>
                <div className='heading'>
                    <h1 className='headingForget'>Forgot Password</h1>
                    <p className='detailsForget'>Your new password must be different
                        from previously used password.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='inputBoxForget'>
                        <input type='text' placeholder='New Password' {...register("newPassword", { required: true })} className='emailInput mb-2' />
                        <input type='text' placeholder='Confirm Password' {...register("confirmPassword", { required: true })} className='emailInput' />
                    </div>
                    <div className='submitBox'>
                        <Button className='submitBtn' type='submit'>Verify</Button>
                    </div>
                </form>

            </div>
        </div >
    )
}

export default ResetPassword