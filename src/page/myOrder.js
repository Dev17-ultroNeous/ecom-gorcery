import React from 'react'


import NavBarsHome from '../componets/NavBar';
import MyOrderComponet from '../componets/myOrderComponets';

import '../page/myOrder.css'
function MyOrder() {

    return (
        <>
            <NavBarsHome />
            <section className='myOrderSection'>
                <div className='myOrderContainer'>
                    <div className='headingOrder'>
                        <h1 className='order'>My Orders</h1>
                    </div>
                    <MyOrderComponet />

                </div>

            </section>
        </>
    )
}

export default MyOrder;