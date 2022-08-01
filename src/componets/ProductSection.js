import React, { useState } from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { GoPlus } from 'react-icons/go'
import { Link } from 'react-router-dom'
import '../componets/Products.css'


function ProductSection({ list, name, link }) {

    const [itemCount, setItemCount] = useState(0);
    const [item, setItem] = useState([])

    return (
        <section className='productsSection'>
            <div className='productsContainer'>
                <div className='products'>
                    <h1 className='headingProducts'>{name}</h1>
                    <Link to={link} className='showAll'>Show All</Link>
                </div>
                <Row>
                    {list.map((v, i) => {
                        return (
                            <Col xl={4} md={4} key={i}>
                                <Card className='productCard'>
                                    <Card.Body>
                                        <div className='title'>
                                            <h2 className='titleCard'>{v.name}</h2>
                                        </div>
                                        <div className='productsImg'>
                                            <Link to='/productview'> <Image src={v.image} className='img-fluid' /></Link>

                                        </div>

                                        <Row>
                                            <Col xl={6} xs={6} className='infoCol'>
                                                <div className='information'>
                                                    <span className='weight'>weight{v.weight} </span>
                                                    <span className='price'>{v.price} </span>
                                                </div>
                                            </Col>
                                            <Col xl={6} xs={6} className='btnCol'>
                                                <div className='addBtn' onClick={() => {
                                                    setItemCount(itemCount + 1);
                                                    setItem(v)
                                                }}>
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