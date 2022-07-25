import { useRef } from 'react'
import { Card, Col, Image, Row } from "react-bootstrap";
import { GoPlus } from 'react-icons/go';
import Slider from "react-slick";
import { sliderData } from '../utils/Data'
import { productsData, fruitData, spiceData } from "../utils/Data";

function ProductSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "16px",
                },
            },
            {
                breakpoint: 1080,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    centerPadding: "16px",
                },
            },
        ],
    };
    const sliderRef = useRef();
    return (
        <section className='slider'>
            <Row>
                <Slider {...settings} arrows={false} ref={sliderRef}>

                    {fruitData.map((v, i) => {
                        return (
                            <Col xl={4} md={4} key={i}>
                                <Card className='productCardSlider'>
                                    <Card.Body>
                                        <div className='title'>
                                            <h2 className='titleCard'>{v.name}</h2>
                                        </div>
                                        <div className='productsImg'>
                                            <Image src={v.image} className='img-fluid' />
                                        </div>

                                        <Row>
                                            <Col xl={6} xs={6} className='infoCol'>
                                                <div className='information'>
                                                    <span className='weight'>weight{v.weight} </span>
                                                    <span className='price'>{v.price} </span>
                                                </div>
                                            </Col>
                                            <Col xl={6} xs={6} className='btnCol'>
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

                </Slider>
            </Row>
        </section >
    )
}

export default ProductSlider