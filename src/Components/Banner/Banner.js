import React from 'react';
import '../assets/css/Banner.css';
import follower from '../assets/images/follower.png';
import like from '../assets/images/like.png';
import view from '../assets/images/view.png';
import arrow_circle from '../assets/images/arrow_circle.png';
import bannerWwCreate01 from '../assets/images/banner-ww-create-01.jpg';

const Banner = () => {
    return (
        <>
        <section className='sec-banner'>
            <div className='video-banner'>
                <video className='myVideo' src="https://www.spikestream.co/static/media/Intro.119a43e6572bfceec998.mp4" autoPlay
                    playsinline
                    muted
                    loop
                    autoplay="true"
                >
                </video>
            </div>
            <div className='overlay-banner'></div>
            <div className='content-banner'>
                <div className='container'>
                    <div className='bx-banner-content'>
                        <div className='scroll-line scroll-line-banner'>
                            <div class="pulse"></div>
                        </div>
                        <div className='bx-view-like-following'>
                            <div className='view-like-following'>
                                <div className='follower-growth'>
                                    <div class="bounce2">
                                        <img src={follower} alt='' />
                                    </div>
                                </div>
                                <div className='view-growth'>
                                    <div class="bounce-view">
                                        <img src={view} alt='' />
                                    </div>
                                </div>
                                <div className='like-growth'>
                                    <div class="bounce-like">
                                        <img src={like} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lower-content'>
                            <h3>IDENTIFY. ALIGN. BENEFIT</h3>
                            <p>Connecting brands, <br />connecting creators</p>
                        </div>

                        <div className='TxtwhatWeCreate'>
                                <div className='talkToUs'>
                                    <div className='contentTalkToUs'>
                                        <p>We facilitate valuable partnerships with our portfolio of diverse social content creators to grow your business.</p>
                                    </div>
                                    <div className='btnTalkToUs'>
                                        <span>TALK TO US</span>
                                        <span>
                                            <img src={arrow_circle} alt='' />
                                        </span>
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Banner;