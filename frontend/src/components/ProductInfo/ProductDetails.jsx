import React from 'react'
import star from "../ProductInfo/assets/star.jpg";
import starFill from "../ProductInfo/assets/starFill.jpg";

function ProductDetails() {
  return (
    <div className=" info-section">
      <p className="headBar">
        HOME &gt; COLD BREW COFFEE &gt; PROTEIN COFFEE CLASSIC
      </p>

      <p className="category">PROTEIN COFFEE</p>

      <h1 className="title">
        Classic Protein Cold Coffee Powder
      </h1>

      <div className="rating">
        <img src={starFill} alt="star"className='starFill' />
        <img src={starFill} alt="star"className='starFill' />
        <img src={starFill} alt="star"className='starFill' />
        <img src={starFill} alt="star" className='starFill' />
        <img src={star} alt="star" className='star'/>
        <span>(4)</span>
      </div>

      <p className="description">
        Meet the new Protein-Powered Coffee. Each sachet gives you 15g of
        protein, boosted with 2 espresso shots, no added sugar, and under
        97 calories.Add cold water or milk,shake or blend, and you're ready to go.Perfect for when you need that extra strength in your daily routine.Each pack contains 5 sachets.
      </p>
    </div>
  )
}

export default ProductDetails