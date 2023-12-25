import React from 'react'
import person1 from '../assets/person1.png'
import person2 from '../assets/person2.png'
import star from '../assets/star.png'

function Rating() {
    return (
        <div>
            <section className="Rating-wrapper mt-[4rem]">
                <div className="Rating-txt flex flex-col">
                    <p style={{ color: 'blue' }} className='text-center'>
                        Here are our some of the best clients.
                    </p>
                    <h1 style={{ fontSize: '30px', fontWeight: '600' }} className='text-center' >
                        What People Say About Us
                    </h1>
                </div>
                <div className="card-wrapper grid mt-4 grid-cols-2 gap-8 ml-[13%] mr-[13%] p-4">
                    <section className="card p-4 flex items-center" style={{ backgroundColor: 'gainsboro', borderRadius: '.5rem' }}>
                        <img src={person1} className='h-fit' />
                        <div className="card-txt ml-4">
                            <h1 style={{fontSize: '20px' , fontWeight: '600'}}>
                                Hamza Faizi
                            </h1>
                            <p style={{fontSize: 'smaller' , color: '#686363'}}>
                                Don’t waste time, just order! This is the best website to puschase smart watches.
                            </p>
                            <img src={star} />
                        </div>
                    </section>
                    <section className="card p-4 flex items-center" style={{ backgroundColor: 'gainsboro', borderRadius: '.5rem' }}>
                        <img src={person2} className='h-fit' />
                        <div className="card-txt ml-4">
                            <h1 style={{fontSize: '20px' , fontWeight: '600'}}>
                                Hafiz Huzaifa
                            </h1>
                            <p style={{fontSize: 'smaller' , color: '#686363'}}>
                                I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.
                            </p>
                            <img src={star} />
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Rating
