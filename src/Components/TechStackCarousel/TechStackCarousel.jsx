import React from 'react'
import './TechStackCarousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';

function TechStackCarousel() {
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
  };

  let sliderRef = useRef(null);

  return (
    <div className='logos'>
        <div className='logos-slide'>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default TechStackCarousel