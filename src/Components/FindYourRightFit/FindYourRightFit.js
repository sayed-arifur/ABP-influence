import React from 'react';
import '../assets/css/Home.css';
import '../assets/css/FindYourRightFit.css';
import arrow_circle from '../assets/images/arrow_circle.png';
import findimg01 from '../assets/images/find-img-01.jpg';
import findimg02 from '../assets/images/find-img-02.jpg';
import findimg03 from '../assets/images/find-img-03.jpg';
import findimg04 from '../assets/images/find-img-04.jpg';

const FindYourRightFit = () => {
  return (
    <section className='sec-findRightFit'>

        <div class="scroll-line-horizontal scroll-line-whatweCreate">
            <div class="pulse"></div>
        </div>

        <div className='container'>
            <div className='bx-findRightFit'>
                <div className='find-right-fit'>
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
            <div className='carousel-findRightFit'>
                <ul>
                    <li>
                        <div className='img-findRightFit'>
                            <img src={findimg01} alt='' />
                        </div>
                    </li>
                    <li className='active'>
                        <div className='img-findRightFit' >
                            <img src={findimg02} alt='' />
                        </div>
                        <div className='big-img-findRightFit'>
                            <div className='bx-followers'>
                                <h3>168.7 k</h3>
                                <p>Followers</p>
                            </div>
                            <div className='mainImg-findRightFit' >
                                <img src={findimg02} alt='' />
                            </div>
                            <div className='text-mainImg'>
                                Ranveer Allahbadia
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='img-findRightFit'>
                            <img src={findimg03} alt='' />
                        </div>
                    </li>
                    <li>
                        <div className='img-findRightFit'>
                            <img src={findimg04} alt='' />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default FindYourRightFit