import React from 'react'
import '../css/CartItems.css'
import { CartItem } from './CartItem'

export const CartItems = ({ items }) => {
  console.log('Inside CartItems Component', items)
 
    return (
        <div className='CartItems'>
          <h1>Shopping Cart</h1>
          <hr />
          <div className='CartItems-items'>
            <CartItem />
          </div>
        </div>
    )
}
