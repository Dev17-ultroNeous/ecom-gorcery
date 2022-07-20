import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { categoriesData } from "../utils/Data";
import '../componets/Categories.css'
function Categories() {
    return (
        <section className="categoriesSection">
            <div className="headingCategories">
                <h1 className="heading">Categories</h1>
                <a href="allcategories" >Show All</a>
            </div>
            <div className="boxCategories">
                <Row>
                    {categoriesData.map((v, i) => {
                        return (
                            <Col xl={4} md={4} xxl={4}>
                                <Card className="productCard">
                                    <Card.Body>
                                        <div className="categoriesImg">
                                            <a href="#"> <Image src={v.image} /></a>
                                        </div>

                                    </Card.Body>
                                </Card>
                                <h2 className="nameProduct">{v.name}</h2>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </section>
    );
}

export default Categories;
