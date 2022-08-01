import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { myOrderData } from '../utils/Data'
import '../page/myOrder.css'
import { Link, useNavigate } from 'react-router-dom';
function MyOrder() {
    return (
        <section>
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
                                            <div className='productInfo'>
                                                <p className='nameProdctInfo'>{v.name} </p>
                                                <span className='priceProductInfo'>{v.price}</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} xs={6} className='viewProductCol' >
                                        <div>
                                            <div className='btnView'>  <Link to="/productview" className='viewDetails'>View Details</Link></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                    </div>
                )
            })
            }
        </section>
    )
}

export default MyOrder;