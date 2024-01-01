import React, { useEffect } from 'react'
import Apple1 from '../assets/Apple1.png'
import Apple2 from '../assets/Apple2.png'
import Apple3 from '../assets/Apple3.png'
import Apple4 from '../assets/Apple4.png'
import samsung from '../assets/Samsung.png'
import fitpro from '../assets/Fitpro.png'
import star from '../assets/star.png'
// @ts-ignore
import Aos from 'aos'
import 'aos/dist/aos.css'

interface productProp {
    oncardClick: () => void;
}

const Products: React.FC<productProp> = ({oncardClick}) => {
    useEffect(() =>{
      Aos.init();
    })
    return (
        <div>
            <section data-aos = 'fade-up' data-aos-duration = '1500' className='Product-wrapper mt-[4rem]'>
                <div className="product-txt flex flex-col">
                    <p style={{ color: 'blue' }} className='text-center'>
                        Find your favourite smart watch.
                    </p>
                    <h1 style={{ fontSize: '30px', fontWeight: '600' }} className='text-center'>
                        Our Latest Products
                    </h1>
                </div>
                <div className="Product-widgets grid grid-cols-3 gap-4  mt-[2rem] ml-[13%] mr-[13%]">
                    <div className='flex flex-col items-center' data-aos = 'fade-up' data-aos-duration = '2000'>
                        <img className='p-4 w-[60%] cursor-pointer' style={{ backgroundColor: 'rgb(223 216 216)', borderRadius: '.5rem' }} src={Apple1} />
                        <p>Apple Smart I</p>
                        <img src={star} />
                        <p>
                            $255.00
                        </p>
                        <button className = 'cart-btn' onClick={oncardClick}>
                            Add to cart
                        </button>
                    </div>
                    <div className='flex flex-col items-center' data-aos = 'fade-up' data-aos-duration = '2000'>
                        <img className='p-4 w-[60%] cursor-pointer' style={{ backgroundColor: 'rgb(223 216 216)', borderRadius: '.5rem' }} src={Apple2} />
                        <p>Apple Smart II</p>
                        <img src={star} />
                        <p>
                            $255.00
                        </p>
                        <button className = 'cart-btn' onClick={oncardClick}>
                            Add to cart
                        </button>
                    </div>
                    <div className='flex flex-col items-center' data-aos = 'fade-up' data-aos-duration = '2000' >
                        <img className='p-4 w-[60%] cursor-pointer ' style={{ backgroundColor: 'rgb(223 216 216)', borderRadius: '.5rem' }} src={Apple3} />
                        <p>Apple Smart III</p>
                        <img src={star} />
                        <p>
                            $255.00
                        </p>
                        <button className = 'cart-btn' onClick={oncardClick}>
                            Add to cart
                        </button>
                    </div>
                    <div className='flex flex-col items-center'  data-aos = 'fade-up' data-aos-duration = '2500'>
                        <img className='p-4 w-[60%] cursor-pointer ' style={{ backgroundColor: 'rgb(223 216 216)', borderRadius: '.5rem' }} src={Apple4} />
                        <p>Apple Smart IV</p>
                        <img src={star} />
                        <p>
                            $255.00
                        </p>
                        <button className = 'cart-btn' onClick={oncardClick}>
                            Add to cart
                        </button>
                    </div>
                    <div className='flex flex-col items-center'  data-aos = 'fade-up' data-aos-duration = '2500'>
                        <img className='p-4 w-[60%] cursor-pointer' style={{ backgroundColor: 'rgb(223 216 216)', borderRadius: '.5rem' }} src={samsung} />
                        <p>Samsung Watch Pro </p>
                        <img src={star} />
                        <p>
                            $255.00
                        </p>
                        <button className = 'cart-btn' onClick={oncardClick}>
                            Add to cart
                        </button>
                    </div>
                    <div className='flex flex-col items-center'  data-aos = 'fade-up' data-aos-duration = '2500'>
                        <img className='p-4 w-[60%] cursor-pointer' style={{ backgroundColor: 'rgb(223 216 216)', borderRadius: '.5rem' }} src={fitpro} />
                        <p>FitBit Mac I</p>
                        <img src={star} />
                        <p>
                            $255.00
                        </p>
                        <button className = 'cart-btn' onClick={oncardClick}>
                            Add to cart
                        </button>
                    </div>
                </div>
                <section className='items-center flex justify-center mt-[4rem]'>
                    <button className='p-2 mb-4' style={{backgroundColor: 'black' , color: 'white' , width: '135px' , borderRadius: '.5rem'}}>
                        View More
                    </button>
                </section>
            </section>
        </div>
    )
}

export default Products
