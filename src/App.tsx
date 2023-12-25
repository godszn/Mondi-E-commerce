import React, {useState} from 'react';
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent';
import Sample from './Components/Sample';
import Products from './Components/Products';
import Rating from './Components/Rating';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import './App.css'

const App: React.FC = () => {
 
  const [count , setCount] =useState(0);

  const handleCounter = () => {
    setCount(
      count + 1
    )
  }

  console.log('you have added' , count, 'to the your cart');
  

  return (
    <div className="App">
      <div className="blur absolute top-0"></div>
      <section className='Main-wrapper'>
        <Navbar count = {count} />
        <MainContent />
      </section>
      <Sample />
      <Products oncardClick = {handleCounter}/>
      <Rating/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
