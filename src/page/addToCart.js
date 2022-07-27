import React, { createContext, useContext, useEffect, useState } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { BiMinus } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import NavBarsHome from "../componets/NavBar";
import { cartData } from '../utils/Data'
import '../page/addToCart.css'
import { AiOutlineClose } from 'react-icons/ai'
import { TotalPrice } from "../componets/TotalPrice";
import { Link } from "react-router-dom";

function AddToCart() {

    const [items, setItems] = useState(cartData)

    function Counter(props) {
        const [perProductValue, setPerProductValue] = useState(0)
        const [count, setCount] = useState(1);

        useEffect(() => {
            setPerProductValue(count * props.v)
            console.log(perProductValue);
        }, [count])
        const decrement = () => {
            if (count <= 1) {
                return null
            }
            return setCount(count - 1)
        }


        return (

            <Row>
                <Col xl={6} xs={6} className='countCol'>
                    <div className='counterBox'>
                        <div
                            className="counterBtn"
                            onClick={() => {
                                setCount(count + 1);
                            }}
                        >
                            <FiPlus />
                        </div>
                        <span className="numberText">{count}</span>{" "}
                        <div
                            className="counterBtn"
                            onClick={() => decrement()}
                        >

                            <BiMinus />
                        </div>
                    </div>
                </Col>
                <Col xl={6} xs={6} className='priceCol'>
                    <div>

                        <span className="price">$ {perProductValue}<span className="kg">/kg</span></span>
                    </div>
                </Col>
            </Row>

        )
    }
    return (

        <section className="addToCart">
            <NavBarsHome />

            <div className="cartContainer">
                <div className="headingName">
                    <h1 className="headingCart">My Cart</h1>
                </div>
                {
                    items.map((v, i) => {
                        return (
                            <div className="cartItem" key={i}>
                                <Card className="addTocard">
                                    <Card.Body>
                                        <Row>
                                            <Col xl={2} xs={2}>
                                                <div className="imgCard">
                                                    <Image src={v.image} className='img-fluid' />
                                                </div>
                                            </Col>
                                            <Col xl={8} xs={8}>
                                                <div className="infoProduct">
                                                    <h2 className="titleProduct">{v.name} </h2>
                                                    <p className="detailsProduct">weight {v.weight}</p>
                                                </div>
                                            </Col>
                                            <Col xl={2} xs={2}>
                                                <div className="cross">
                                                    <AiOutlineClose onClick={() => {
                                                        setItems(items.filter((e) => e.id !== v.id))
                                                    }} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="counterCard">
                                            <Counter v={v.price} />

                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
                <TotalPrice
                    totalCost={10}
                    deliveryCharge={1}
                    total={20}
                />
                <div className="continueShop">
                    <Link to="/" className="linkContinueShopCard">Continue Shopping</Link>

                </div>
                <div className="checkOut">
                    <Link to='/checkout'><div className="btnCheckOut">Checkout</div></Link>
                </div>



            </div>
        </section>
    );
}

export default AddToCart;
