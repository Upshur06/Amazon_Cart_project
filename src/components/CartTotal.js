import React from 'react'
import '../css/CartTotal.css'

export const CartTotal = () => {
    return (
        <div className='CartTotal'>
            <h3>
                Subtotal(5 items):
                <span className='CarTotal-price'>
                    $2,172.38
                </span>
            </h3>
            <button>
                Proceed To Checkout
            </button>
        </div>
    )
}
