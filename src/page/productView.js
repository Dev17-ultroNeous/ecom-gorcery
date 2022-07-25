import React, { useState } from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi'
import { BiMinus } from 'react-icons/bi'
import NavBarsHome from '../componets/NavBar';
import pineppal from '../assets/Img/pineppal.png'
import '../page/productView.css'
import ProductSlider from '../componets/productSlider';
import { relativefruitData } from '../utils/Data'
function ProductView() {
    const [count, setCount] = useState(0);
    console.log(count);
    return (
        <section className='productViewSection'>
            <NavBarsHome />
            <div className='productViewContainer'>
                <div className='headingOrder'>
                    <h1 className='order'>Product Details</h1>
                </div>

                <Row className='productViewRow'>
                    <Col xl={6} md={6} className='productImgCol'>
                        <Image src={pineppal} className='imgProduct' />
                    </Col>
                    <Col xl={6} md={6}>

                        <div className='detailsProductsBox'>
                            <div className='boxDetails'>
                                <div className='details'>
                                    <div className='productDtailsBox'>
                                        <h1 className='nameProductView'>Pineapple</h1>
                                        <p className='typeProduct'>Fruit</p>
                                    </div>

                                    <div className='countBox'>
                                        <span className='priceProduct'>$15 /kg</span>
                                        <div className='counter'>
                                            <div className='counterBtn' onClick={() => {
                                                setCount(count + 1)
                                            }}><FiPlus /></div><span className='numberText'>{count}</span> <div className='counterBtn' onClick={() => {
                                                setCount(count - 1)
                                            }}> <BiMinus /> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='descripation'>
                                    <h2 className='headingDescripation'>Descripation</h2>
                                    <p className='detailsDescripation'>Pineapples have a tough rind made up of hexagonal units and a fibrous, juicy flesh which may be yellow to white in color. Pineapple fruit is commonly eaten fresh or it may be cooked in a variety of dishes. Pineapple may also be canned or used to produce juice. Buy Pineapple Queen 1 pc (Approx 700 g - 1200 g) online now.</p>

                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
                <div className='relatedProduct'>
                    <div className='title'>
                        <p className='titleProducts'>You can also check this items</p>

                    </div>
                    <ProductSlider />
                </div>
            </div>

        </section>
    )
}

export default ProductView;