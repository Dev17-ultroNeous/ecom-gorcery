import React, { useRef } from 'react'
import { Image, } from "react-bootstrap";
import Slider from "react-slick";
import { sliderData } from '../utils/Data'
function Sliders() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
            <Slider {...settings} arrows={false} ref={sliderRef}>
                {
                    sliderData.map((v, i) => {
                        return (
                            <div className='sliderImage' key={i}>
                                <Image src={v.image} className='img-fluid' />
                            </div>
                        )

                    })
                }
            </Slider>

        </section>
    )
}

export default Sliders