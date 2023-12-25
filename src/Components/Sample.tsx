import React from 'react'
import sample1 from '../assets/samp1.png'
import sample2 from '../assets/samp2.png'
import sample3 from '../assets/samp3.png'

function Sample() {
    return (
        <div>
            <section className="sample-wrapper grid grid-cols-3 gap-4 mt-[2rem] ml-[13%] mr-[13%] p-4">
                <div className='flex sample-container p-6' style={{ backgroundColor: 'rgb(223 216 216)', borderRadius: '1rem' }}>
                    <img src={sample1} className='h-fit cursor-pointer' />
                    <section className='ml-4 flex flex-col justify-center'>
                    <h3 style={{fontSize: '25px' , fontWeight: '600'}}>
                            Apple
                        </h3>
                        <p style={{fontSize: 'smaller'}}>
                            Apple is one of the most famous smart watches providing company.
                        </p>
                    </section>
                </div>
                <div className='flex sample-container p-6' style={{ backgroundColor: 'rgb(223 216 216)', borderRadius: '1rem' }}>
                    <img src={sample2} className='h-fit cursor-pointer' />
                    <section className='ml-4 flex flex-col justify-center'>
                        <h3 style={{fontSize: '25px' , fontWeight: '600'}}>
                            Xiaomi
                        </h3>
                        <p style={{fontSize: 'smaller'}}>
                            Xiaomi smart watches are produced by MI company.
                        </p>
                    </section>
                </div>
                <div className='flex sample-container p-6' style={{ backgroundColor: 'rgb(223 216 216)', borderRadius: '1rem' }}>
                    <img src={sample3} className='h-fit cursor-pointer' />
                    <section className='ml-4 flex flex-col justify-center'>
                    <h3 style={{fontSize: '25px' , fontWeight: '600'}}>
                            FitBit
                        </h3>
                        <p style={{fontSize: 'smaller'}}>
                            FitBit smart watches are best for there health and fitness features.
                        </p>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Sample
