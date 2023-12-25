import React from 'react'
import logo from '../assets/Logo.png'
import Person from '../assets/Person.svg'
import Search from '../assets/Search.svg'
import Cart from '../assets/Cart.svg'
import 'tailwindcss/tailwind.css';

interface navProp {
    count: number;
}

const Navbar: React.FC<navProp> = ({count}) => {
    return (
        <div>
            <nav>
                <div className="nav-container justify-evenly flex p-5">
                    <section className="navbrand h-fit">
                        <img src={logo} />
                    </section>
                    <section className="nav-menu-container flex">
                        <ul className='nav-menu flex'>
                            <li>
                                Home
                            </li>
                            <li>
                                Brand
                            </li>
                            <li>
                                Recent Products
                            </li>
                            <li>
                                Contact
                            </li>
                            <li>
                                About
                            </li>
                        </ul>
                    </section>
                    <section className="nav-widget relative flex h-fit">
                        <img src={Search} className='mr-2 cursor-pointer' />
                        <img src={Person} className='mr-2 cursor-pointer' />
                        <img src={Cart} className='mr-2 cursor-pointer' />
                        <section className='absolute right-[4px] top-[-3px]' style={{ color: 'white', fontSize: 'x-small', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'blue' }}>
                            <p className='text-center'>{count}</p>
                        </section>
                    </section>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
