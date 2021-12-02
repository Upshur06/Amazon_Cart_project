import React from 'react'
import '../css/CartItem.css'

export const CartItem = () => {
    return (
        <div className='CartItem'>
            <div className='CartItem-image'>
                <img src='https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg' alt='...' />
            </div>
            <div className='CartItem-info'>
                <div className='info-title'>
                    <h2>Mac Book Pro</h2>
                </div>
                <div className='info-stock'>
                    In Stock
                </div>
                <div className='item-actions'>
                    <div className='item-quantity'>
                        <select>
                            <option value="1">Qty:1</option>
                            <option value="2">Qty:2</option>
                            <option value="3">Qty:3</option>
                            <option value="4">Qty:4</option>
                        </select>
                    </div>
                    <div className='div-item-divider'>|</div>
                    <div className='item-delete'>Delete</div>
                </div>
            </div>
            <div className='CartItem-price'>$1,780</div>
        </div>
    )
}
