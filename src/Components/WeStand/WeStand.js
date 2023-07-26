import React from 'react';
import '../assets/css/Home.css';
import '../assets/css/weStand.css';
import weStand01 from '../assets/images/we-stand-1.png';
import weStand02 from '../assets/images/we-stand-2.png';
import weStand03 from '../assets/images/we-stand-3.png';
import weStand04 from '../assets/images/we-stand-4.png';

const WeStand = () => {
  return (
    <section className='sec-weStand'>
        <div className='container'>

            <div className='SLR-vertical-Small'></div>
            <div class="scroll-line-horizontal scroll-line--stand-apart">
                <div class="pulse"></div>
            </div>

            <div className='title-ww-create'>
                HOW WE STAND APART
            </div>
            <div className='bx-weStand'>
                <ul>
                    <li>
                        <div className='item-weStand'>
                            <div className='in-item-westand'>
                                <p>The Trust Factor</p>
                                <div className='img-item-westand'>
                                    <img src={weStand01} alt='' /> 
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='item-weStand'>
                            <div className='in-item-westand'>
                                <p>Tailored Solutions</p>
                                <div className='img-item-westand'>
                                    <img src={weStand02} alt='' /> 
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='item-weStand'>
                            <div className='in-item-westand'>
                                <p>Assured Success</p>
                                <div className='img-item-westand'>
                                    <img src={weStand03} alt='' /> 
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='item-weStand'>
                            <div className='in-item-westand'>
                                <p>Holistic Campaigns</p>
                                <div className='img-item-westand'>
                                    <img src={weStand04} alt='' /> 
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default WeStand