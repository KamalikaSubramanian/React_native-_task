import React from 'react'
import ProductDetails from "./ProductDetails.jsx";
import Features from './Features.jsx';
import Flavours from './Flavours.jsx';
import AddToCart from './AddToCart.jsx';
import AlsoSee from './AlsoSee.jsx';
import AsSeenOn from './AsSeenOn.jsx';
import "./productInfo.css"
function ProductInfo() {
  return (
    <div>
      <ProductDetails />
      <Features />
      <Flavours />
      <AddToCart />
      <AlsoSee/>
      <AsSeenOn/> 
    </div>
  )
}

export default ProductInfo