import React from 'react'
import Apple1 from '../assets/Apple1.png'

function Newsletter() {
    return (
        <div className='flex justify-center'>
            <div className="Newsletter-wrapper gap-40 flex items-center mt-24 mb-8 pl-16 pr-16 p-4" style={{backgroundColor: 'gainsboro'  , borderRadius: '.5rem'}}>
                <div className="newsletter-txt">
                    <h1 style={{fontWeight: '600' , fontSize: '30px'}}>
                        Subscribe To Newsletter
                    </h1>
                    <p style={{color: 'gray'}}>
                        Get free guide about smart watches daily.
                    </p>
                    <div className="subscribe-input justify-between">
                        <section className='flex'>
                            <input type="text" style={{ outline: 'transparent' }} placeholder='Enter Email Address' />
                        </section>
                        <button className='subscribe-btn'>
                            Subscribe
                        </button>
                    </div>
                </div>
                <img src={Apple1} alt="" />
            </div>
        </div>
    )
}

export default Newsletter
