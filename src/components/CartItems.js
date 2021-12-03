import React from 'react'
import '../css/CartItems.css'
import { CartItem } from './CartItem'
import uuid from 'uuid-random';

export const CartItems = ({ items }) => {
  // console.log('Inside CartItems Component', items)
  // console.log(uuid();)
 
    return (
        <div className='CartItems'>
          <h1>Shopping Cart</h1>
          <hr />
          {
            items && 
            items.map((item, index) =>
            <div className='CartItems-items'>
              <CartItem key={index} item={item} />
            </div>
            )
          }
        </div>
    )
}
