import React from 'react'
import '../css/CartItems.css'
import { CartItem } from './CartItem'

export const CartItems = ({ items, setCartItems }) => {

      const changeItemQuanity = (e, index) => {
          console.log(e.target.value)
          console.log('Index is ', index)
          const newItems = [...items]
          newItems[index].quantity = e.target.value;
          setCartItems(newItems);
      }

      const deleteItem = (indexToDelete) => {
          const newItem = items.filter((value, index)=>{
            return index !== indexToDelete
          })
          console.log(newItem)
        setCartItems(newItem)
      }

    return (
        <div className='CartItems'>
          <h1>Shopping Cart</h1>
          <hr />
          {
            items && 
            items.map((item, index) =>
            <div className='CartItems-items'>

              
              <CartItem key={index} item={item} index={index} changeItemQuanity={ changeItemQuanity } deleteItem={deleteItem} />
            </div>
            )
          }
        </div>
    )
}
