import React from 'react'
import './CartButtons.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from '../../../rdux/cart'

function AfterCart({product}) {
  const {cartList} = useSelector((state)=>state.cart)
  let ProductCount = cartList.find((product_value)=>product_value.id === product.id)?.count
  const dispatch = useDispatch()
  return (
    <div className='after-cart'>
        <button className='cart-counter-button' onClick={()=>dispatch(decreament(product.id))}>-</button>
        <div className="cart-counter">{ProductCount}</div>
        <button className='cart-counter-button' onClick={()=>dispatch(increament(product.id))} >+</button>
    </div>
  )
}

export default AfterCart