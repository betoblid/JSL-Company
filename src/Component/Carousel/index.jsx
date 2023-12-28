import React from "react";
import Slider from "react-slick";
import "./Carousel.css"
const Carousel = ({ children, showSlider, variableWidth, variableHeight, dots }) => {

    const config = {
        dots: dots, //deve ou não aparecer indicadores de indice
        infinite: true, //ele é infinito ou não
        variableWidth: variableWidth, //se width será responsivo
        variableHeight: variableHeight, //se height será responsivo
        autoplaySpeed: 4000, //tempo para auto mudar
        autoplay: true, //deve ou não ser auto play
        speed: 300, //quanto tempo em milisegundos deve demorar a transição de img
        slidesToShow: showSlider, //quantos cards deve mostrar 
        slidesToScroll: 1 //quantos cards deve passar pra frente
    }
    return (
        <Slider {...config}>
            {children}
        </Slider>
    );
}
export default Carousel;
