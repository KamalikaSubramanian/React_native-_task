import React from 'react'
import ProductCardImg from "../ProductCards/assets/ProductCardImg.jpeg";
import "../ProductCards/productCards.css"

function ProductCards() {
  return (
    <div className="section">
      <h2 className="section-title">You'll also love these</h2>

      <div className="card">
        <img
          src={ProductCardImg}
          alt="Pitcher"
          className="product-image"
        />

        <div className="card-content">
          <div className="badge">MERCHANDISE</div>

          <div className="title-price">
            <h3>Pitcher</h3>
            <span className="price">₹1,900</span>
          </div>

          <p className="description">
            Make & store your cold brew. Pop in a few packs, add water & store
            it in the fridge for up to a week.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;