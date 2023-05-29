import React from "react";
import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";
import { useSelector } from "react-redux";

function Buttons({product}) {
    const {cartList} = useSelector((state)=>state.cart)
    let ExistProduct = cartList.find((product_value)=>product_value.id === product.id)?.count
  return (
    <div>
      { ExistProduct > 0 ?<AfterCart product={product} /> : <BeforeCart product={product} />}
    </div>
  );
}

export default Buttons;
