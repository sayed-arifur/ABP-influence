import React from 'react';
import '../assets/css/Home.css';
import '../assets/css/LeadingPartners.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logoPartners01 from '../assets/images/logo-partners-01.png';
import logoPartners02 from '../assets/images/logo-partners-02.png';
import logoPartners03 from '../assets/images/logo-partners-03.png';
import logoPartners04 from '../assets/images/logo-partners-04.png';

const LeadingPartners = () => {

    let LeadingPartnersSlider = { 
        className: 'LeadingPartners-slider',
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        autoplay:true,
    }

  return (
    <section className='sec-leadingPartners'>
        <div className='container'>
            <div className='bx-leadingPartners'>
                <div className='SLR-vertical-Small'>
                    <div class="pulse"></div>
                </div>
                <div className='text-leadingPartners'>
                    <h3>LEADING</h3>
                    <p>PARTNERS</p>
                </div>
                <div className='carousel-partners' style={{marginTop: '36px'}}>
                    <Slider {...LeadingPartnersSlider} >
                        <div><img src={logoPartners01} alt='' /></div>
                        <div><img src={logoPartners02} alt='' /></div>
                        <div><img src={logoPartners03} alt='' /></div>
                        <div><img src={logoPartners04} alt='' /></div>
                        <div><img src={logoPartners01} alt='' /></div>
                        <div><img src={logoPartners02} alt='' /></div>
                        <div><img src={logoPartners03} alt='' /></div>
                        <div><img src={logoPartners04} alt='' /></div>
                    </Slider>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LeadingPartners