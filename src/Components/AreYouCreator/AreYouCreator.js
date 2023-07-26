import React, {useState} from 'react';
import arrow_circle from '../assets/images/arrow_circle.png';
import '../assets/css/Home.css';
import '../assets/css/AreYouCreator.css';

const AreYouCreator = () => {

    const [name, setName] = useState();
    const [social, setSocial] = useState();

  return (
    <section className='sec-areYouCreator'>
        <div className='container'>
            <div className='title-creator'>
                <h4>ARE YOU A</h4>
                <h3>CREATOR?</h3>
            </div>
            <div className='form-creator'>
                <form>
                    <div className='form-row'>
                        <div className='form-field'>
                            <label>What should we call you?</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            {/* <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} /> */}
                        </div>
                        <div className='form-field'>
                            <label>Your Social handle</label>
                            <input type="text" value={social} onChange={(e) => setSocial(e.target.value)} />
                        </div>
                    </div>
                    <div className='form-row-btn'>
                        <div className='btnTalkToUs'>
                            <span>JOIN US</span>
                            <span>
                                <img src={arrow_circle} alt='' />
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default AreYouCreator