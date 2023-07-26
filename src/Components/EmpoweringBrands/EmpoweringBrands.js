import React from 'react';
import '../assets/css/EmpoweringBrands.css';
import '../assets/css/Home.css';
import ourWorks01 from '../assets/images/our-works-01.JPG';
import arrow_circle from '../assets/images/arrow_circle.png';
import empowering from '../assets/images/empowering.JPG';

const EmpoweringBrands = () => {
  return (
    <section className='sec-empoweringBrands'>
        <div className='container'>
            <div className='bx-empoweringBrands'>

                <div class="SLR-vertical-Small">
                    <div class="pulse"></div>
                </div>


                <div className='img-brands'>
                    <img src={empowering} />
                </div>
                <div className='content-brands'>
                    <h3>Find Your Right Fit</h3>
                    <p>With an extensive roster of influential content creators, we connect brands with the perfect influencers to establish authentic connections with their target audience.</p>                
                    <div className='btnTalkToUs'>
                        <span>ALL CREATORS</span>
                        <span>
                            <img src={arrow_circle} alt='' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EmpoweringBrands;