import React from 'react'
import searchbrand from '../assets/searchbrand.png'
import watch from '../assets/watch.svg'

function MainContent() {
    return (
        <div>
            <div className="discover-wrapper flex  justify-evenly mt-[5%]">
                <div className='w-[30%]'>
                    <section className="discover-text">
                        <section className='w-[89%]'>
                            <h1 style={{ color: 'white', fontSize: '50px', fontWeight: '600' }}>
                                Discover Most Suitable Watches
                            </h1>
                        </section>
                        <p style={{ color: '#8B8E99' }}>
                            Find the best, reliable, and cheap smart watches here.
                            We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!
                        </p>
                    </section>
                    <div className="search-input justify-between">
                        <section className='flex'>
                            <img src={searchbrand} className='h-fit mr-2' />
                            <input type="text" style={{ outline: 'transparent' }} placeholder='Find the best brands' />
                        </section>
                        <button className='search-btn'>
                            search
                        </button>
                    </div>
                </div>
                <div className='w-[30%]'>
                    <img src={watch} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainContent

