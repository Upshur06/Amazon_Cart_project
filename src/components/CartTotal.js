import React, { useState } from 'react'
import '../css/CartTotal.css'

export const CartTotal = ({ price }) => {
    
    // const [total, setTotal] = useState(0);

    const getTotalPrice = () => {
        let total = 0;
        price.map((el)=>{
            total+=(el.price*el.quantity)
        })
        return total.toFixed(2)
    }

    return (
        <div className='CartTotal'>
            <h3>
                Subtotal({price.length} items):
                <span className='CarTotal-price'>
                    ${ getTotalPrice() }
                </span>
            </h3>
            <button>
                Proceed To Checkout
            </button>
        </div>
    )
}
