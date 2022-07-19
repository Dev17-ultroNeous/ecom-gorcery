import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { GoPlus } from 'react-icons/go'
import '../componets/Products.css'
function ProductSection({ list, name }) {
    return (
        <section className='productsSection'>
            <div className='productsContainer'>
                <div className='products'>
                    <h1 className='headingProducts'>{name}</h1>
                    <a href="#" >Show All</a>
                </div>

                <Row>
                    {list.map((v, i) => {
                        return (
                            <Col xl={4} md={4}>
                                <Card className='productCard'>
                                    <Card.Body>
                                        <div className='title'>
                                            <h2 className='titleCard'>{v.name}</h2>
                                        </div>
                                        <div className='productsImg'>
                                            <Image src={v.image} className='img-fluid' />
                                        </div>

                                        <Row>
                                            <Col xl={6} className='infoCol'>
                                                <div className='information'>
                                                    <span className='weight'>weight{v.weight} </span>
                                                    <span className='price'>{v.price} </span>
                                                </div>
                                            </Col>
                                            <Col xl={6} className='btnCol'>
                                                <div className='addBtn'>
                                                    <GoPlus />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                        )
                    })
                    }
                </Row>

            </div>
        </section >
    )
}

export default ProductSection