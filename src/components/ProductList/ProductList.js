import { useState } from 'react'
import products from '../../api/products.json'
import AfterCart from './CartButtons/AfterCart'
import BeforeCart from './CartButtons/BeforeCart'
import { useSelector, useDispatch } from 'react-redux'
import './ProductList.css'
import Buttons from './CartButtons/Buttons'

const ProductList = () => {
    const { cartList } = useSelector((state) => state.cart)
    return (
        <>
            <section className='container'>
                {products?.map((product, index) => {
                    return (
                        <div className='product-container' key={product.id}>
                            <img src={product?.image} alt='' width={'300px'} height={'250px'} />
                            <h3>{product?.title}</h3>

                            <Buttons product={product} />
                        </div>
                    )
                })}
            </section>
        </>
    )
}
export default ProductList