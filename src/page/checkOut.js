import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import NavBarsHome from '../componets/NavBar'
import '../page/checkOut.css'

function CheckOut() {
    return (
        <section className='checkOutSection'>
            <NavBarsHome />
            <div className='checkOutContainer'>
                <div className='headingCheckOut'>
                    <h1 className='heading'>Checkout</h1>
                </div>
                <div className='deliveryBox'>
                    <Row>
                        <Col xl={6} xs={6}>
                            <span className='delivery'>Delivery</span>
                        </Col>
                        <Col xl={6} xs={6}>
                            <div className='orderChange'>
                                <span className='change'>Change</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='locationInfo'>
                    <GrLocation />
                    <span className='location'>Floor 4, Wakil Tower, Ta 131 Gulshan Badda Link Road</span>
                </div>
                <hr />
                <div className='orderItem'>
                    <span className='titleCheck'>Order Item</span>
                    <span className='priceCheckOut'>3</span>
                </div>
                <hr />
                <div className='orderItem'>
                    <span className='titleCheck'>Sub Total Cost </span>
                    <span className='priceCheckOut'>$31</span>
                </div>
                <hr />
                <div className='orderItem'>
                    <span className='titleCheck'>Delivery Charge </span>
                    <span className='priceCheckOut'>$1</span>
                </div>
                <hr />
                <div className='orderItem'>
                    <span className='titleCheck'>Total</span>
                    <span className='priceCheckOut'>$35</span>
                </div>
                <hr />
                <div className='orderItem'>
                    <span className='titleCheck'>Payment  Method</span>
                    <span className='priceCheckOut'>Cash on Delivery</span>
                </div>

                <div className='termCondition'>
                    <p className='detailsTermCondition'>By placing an order you agree to our
                        <span className='termLink'> Terms & Conditions</span></p>
                </div>
                <div className='placeOrder'>
                    <div className='placeorderBtn'><Link to='/success' className='linkPlaceOrder'>Place Order</Link> </div>
                </div>
            </div>

        </section>
    )
}

export default CheckOut