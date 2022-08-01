import React from "react";
import NavBarsHome from "../componets/NavBar";
import right2 from "../assets/Img/right3.png";
import { Card, Col, Image, Row } from "react-bootstrap";
import "../page/orderSummary.css";
import { Steps } from "antd";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import MyOrderComponet from '../componets/myOrderComponets';

const { Step } = Steps;

function OrderSummary() {
    return (
        <section>
            <NavBarsHome />
            <div className="orderSummaryContainer">
                <div className="detailsOrder">
                    <div className="headingOrderSummary">
                        <h1 className="heading">Order Summary</h1>
                    </div>
                    <Row className="boxSummary">
                        <Col xl={4} className='detailsSummary'>
                            <div className="stepOrder">
                                <Steps direction="vertical" current={1}>
                                    <Step
                                        title="Order Received 
"
                                        description="(Tue, 28 Dec 2021) ."
                                        className="receivedOrder"
                                        icon={<BsFillCheckCircleFill />}
                                    />
                                    <Step title="Order Shipped" className="pendingOrder" icon={<BsFillCheckCircleFill />} />
                                    <Step title="Out For Delivery " className="pendingOrder" icon={<BsFillCheckCircleFill />} />
                                    <Step title="Order Delivered " className="pendingOrder" icon={<BsFillCheckCircleFill />} />
                                </Steps>
                            </div>
                        </Col>
                        <Col xl={8}>
                            <MyOrderComponet />
                        </Col>
                    </Row>
                    <div className="orderDetails">
                        <Card className="detailsCard">
                            <div className="detailUser">
                                <p className="titleDetails">Name</p>
                                <h2 className="nameUser">Martin Taylor</h2>
                            </div>
                            <div className="detailUser">
                                <p className="titleDetails">Order Id</p>
                                <h2 className="nameUser"> 1234567 </h2>
                            </div>

                            <div className="detailUser">
                                <p className="titleDetails">Order Date</p>
                                <h2 className="nameUser">Dec 28, 2021</h2>
                            </div>
                            <div className="detailUser">
                                <p className="titleDetails">Product Total</p>
                                <h2 className="nameUser">$35.00</h2>
                            </div>
                            <div className="detailUser">
                                <p className="">Payment Mode</p>
                                <h2 className="nameUser">COD</h2>
                            </div>
                        </Card>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default OrderSummary;
