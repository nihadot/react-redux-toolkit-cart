import React from 'react'
import './CartButtons.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../rdux/cart'

function BeforeCart({product}) {
  const disptch = useDispatch()
  return (
    <div className='before-cart'>
        <button className='add-cart-button' onClick={()=>disptch(addToCart(product))} >Add to Cart</button>
    </div>
  )
}

export default BeforeCart