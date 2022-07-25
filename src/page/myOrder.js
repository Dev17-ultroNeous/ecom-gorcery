import React from 'react'
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBarsHome from '../componets/NavBar';
import '../page/myOrder.css'
import { myOrderData } from '../utils/Data'
function MyOrder() {
    const nav = useNavigate();
    return (
        <>
            <NavBarsHome />
            <section className='myOrderSection'>
                <div className='myOrderContainer'>
                    <div className='headingOrder'>
                        <h1 className='order'>My Orders</h1>
                    </div>
                    {myOrderData.map((v, i) => {
                        return (
                            <div className='myOrder' key={i}>
                                <Card className='cardOrder'>
                                    <Card.Body>

                                        <Row>
                                            <Col xl={6} xs={6}>
                                                <div className='containe'>
                                                    <div className='imageOrder'>
                                                        <Image src={v.image} className='img-fluid' ></Image>
                                                    </div>
                                                    <div className='prodctInfo'>
                                                        <p className='nameProdct'>{v.name} </p>
                                                        <span className='priceProduct'>{v.price}</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={6} xs={6} className='viewProductCol' >
                                                <div>
                                                    <Button className='btnView' onClick={() => {
                                                        nav('/productview')
                                                    }}>View Details</Button>
                                                </div>
                                            </Col>
                                        </Row>


                                    </Card.Body>
                                </Card>

                            </div>
                        )
                    })
                    }
                </div>
            </section>
        </>
    )
}

export default MyOrder;