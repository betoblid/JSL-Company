import React from "react";
import Slider from "react-slick";

import './Carousel.css'

const Carousel = ({ children }) => {

    const config = {
        dots: true,
        infinite: true,
        //variableWidth: true, //se width sera responsivo
        //variableHeight: true, //se height sera responsivo
        //autoplaySpeed: 4000,
        //autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (

        <Slider {...config}>
            {children}
        </Slider>

    );
}

export default Carousel;