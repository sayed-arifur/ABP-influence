import React from 'react';
import '../assets/css/BestOurWorks.css';
import '../assets/css/Home.css';
import ourWorks01 from '../assets/images/our-works-01.JPG';
import ourWorks02 from '../assets/images/our-works-02.JPG';
import ourWorks03 from '../assets/images/our-works-03.JPG';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BestOurWorks = () => {

    let BestOurWorksSlider = { 
        className: 'BestOurWorks-slider',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        autoplay:true,
    }

  return (
    <section className='sec-ourWorks'>

        <div class="scroll-line-horizontal scroll-line--stand-apart">
            <div class="pulse"></div> 
        </div>

        <div className='container'>
            <div className='title-ww-create'>
                BEST OF OUR WORKS
            </div>
            <div className='bx-our-Works'>
                <Slider {...BestOurWorksSlider} >
                    <div><img src={ourWorks01} alt='' /></div>
                    <div><img src={ourWorks02} alt='' /></div>
                    <div><img src={ourWorks03} alt='' /></div>
                    <div><img src={ourWorks01} alt='' /></div>
                    <div><img src={ourWorks02} alt='' /></div>
                    <div><img src={ourWorks03} alt='' /></div>
                    <div><img src={ourWorks01} alt='' /></div>
                    <div><img src={ourWorks02} alt='' /></div>
                    <div><img src={ourWorks03} alt='' /></div>
                </Slider>
            </div>

            <div className='lineBar-ourWorks'></div>
        </div>
    </section>
  )
}

export default BestOurWorks