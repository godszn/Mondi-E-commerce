import React,  { useEffect, useState } from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent';
import Sample from './Sample';
import Products from './Products';
import Rating from './Rating';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Notification from './Notification';

function MainComponent() {
    const [count, setCount] = useState(0)
    const [showNotif, setShowNotif] = useState(false)
  

    const handleCounter = () => {
      setCount(
        count + 1
      ) 
    }
  return (
    <div>
         <div className="blur absolute top-0"></div>
      <section className='Main-wrapper'>
        <Navbar count={count} />
        <MainContent />
      </section>
      <Sample />
      <Products oncardClick={handleCounter} />
      {showNotif && <Notification />}
      <Rating />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default MainComponent
