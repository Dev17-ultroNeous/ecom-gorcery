import React from 'react'
import NavBarsHome from '../componets/NavBar'
import { allCategoriesData } from '../utils/allData'
import { Card, Col, Image, Row } from 'react-bootstrap'
import '../page/allCategories.css'
function AllCategories() {
    return (
        <section className='allCategoriesSection'>
            <NavBarsHome />
            <div className='categoriesBox'>
                <div className="headingCategoriesAll">
                    <h1 className="heading">Categories</h1>
                </div>
                <div className="boxCategories">
                    <Row>
                        {allCategoriesData.map((v, i) => {
                            return (
                                <Col xl={4} md={4} xxl={4}>
                                    <Card className="productCards">
                                        <Card.Body>
                                            <div className="categoriesImg">
                                                <a href={v.link}> <Image src={v.image} /></a>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <h2 className="nameProduct">{v.name}</h2>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </div>

        </section>
    )
}

export default AllCategories