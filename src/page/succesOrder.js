import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Right from '../assets/Img/right.png'
import NavBarsHome from '../componets/NavBar';
import '../page/succesOrder.css'
function SuccesOrder() {
    return (
        <section className='successOrderSection'>
            <NavBarsHome />
            <div className='containerBox'>
                <div className='imgRight'>
                    <div className='img'>
                        <Image src={Right} className='img-fluid' />
                    </div>
                    <span className='msgOrder'>Successfully Order</span>
                    <span className='orderId'>Order Id Number : 1234567 </span>
                </div>
                <div className='thankOrder'>
                    <p className='deatilsThankYou'>Thank you for your order.</p>
                    <span className='orderShiipedText'> Your order will prepared and shipped soon.</span>
                </div>
                <div className='btnTraceOrder'>
                    <div className='traceOrder'>
                        <Link to='/trackorder' className='linkTrack'>Track Order</Link>
                    </div>
                </div>
                <div className='continueShop'>
                    <Link to='/' className='linkSuccess'>  Continue Shopping</Link>
                </div>
            </div>
        </section>
    )
}

export default SuccesOrder;