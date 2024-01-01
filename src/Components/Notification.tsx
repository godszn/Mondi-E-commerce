import React , {useEffect} from 'react'
import cart from '../assets/AddCart.png'
import { Link } from 'react-router-dom';
import Aos from 'aos';

const Notification = () => {
    useEffect(() =>{
        Aos.init();
      })
    return (
        <div data-aos = 'fade-down' data-aos-duration ='700' className='notif-wrapper-gen fixed justify-center w-full flex top-0'>
            <section style={{ backgroundColor: 'black', boxShadow: '1px 2px 10px grey' }} className="flex notif-wrapper m-2 p-[.7rem] items-center m-4 text-white bg-black rounded-lg">
                <div className="notif-container gap-[10px] items-center flex">
                    <p>This items has been aded to your cart</p>
                    <img src={cart} className='w-[10%]' />
                </div>
                <Link to='/cart'>
                    <button className='viewCart'>
                        View Cart
                    </button>
                </Link>
            </section>
        </div>
    )
}

export default Notification
