import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'
import NavBarsHome from '../componets/NavBar'
import { myOrderData } from '../utils/Data'
function FavoriteProducts() {
    return (
        <section className='sectionFavorites'>
            <NavBarsHome />

            <div className='myOrderContainer'>
                <div className='headingOrder'>
                    <h1 className='order'>Favourite</h1>
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
                                            <div className='heart'>
                                                <FaHeart />
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

    )
}

export default FavoriteProducts