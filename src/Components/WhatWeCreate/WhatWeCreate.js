import React from 'react';
import arrow_circle from '../assets/images/arrow_circle.png';
import '../assets/css/wwcreate.css';
import '../assets/css/Home.css';
import bannerWwCreate01 from '../assets/images/banner-ww-create-01.jpg';
import bannerWwCreate02 from '../assets/images/banner-ww-create-02.jpg';
import bannerWwCreate03 from '../assets/images/banner-ww-create-03.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WhatWeCreate = () => {
    let WhatWeCreateSlider = { 
        className: 'whatWeCreate-slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:3500,
        speed: 2000,
    }

  return (
    <section className='sec-whatWeCreate'>
        <div className='scroll-line-horizontal scroll-line-whatweCreate'>
            <div class="pulse"></div>
        </div>
        <div className='container'>
            <div className='title-ww-create'>
                What we create
            </div>
            <div className='banner-whatWeCreate'>
                <Slider {...WhatWeCreateSlider} >
                    <div><img src={bannerWwCreate01} alt='' /></div>
                    <div><img src={bannerWwCreate02} alt='' /></div>
                    <div><img src={bannerWwCreate03} alt='' /></div>
                    <div><img src={bannerWwCreate01} alt='' /></div>
                    <div><img src={bannerWwCreate02} alt='' /></div>
                    <div><img src={bannerWwCreate03} alt='' /></div>
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default WhatWeCreate