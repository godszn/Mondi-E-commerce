import React from 'react'

const CartComponent: React.FC = () => {
  return (
    <div>
      <div style={{ backgroundColor: 'black', height: '100vh' }} className="Card-wrapper flex">
        <div className=''>
          <h1 className='text-white' style={{fontSize: 'xx-large'}}>
            Your Cart
          </h1>
        </div>
      </div>
    </div>
  )
}

export default CartComponent
