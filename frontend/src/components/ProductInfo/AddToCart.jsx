import React, { useState } from 'react'

function AddToCart() {
  const [added, setAdded] = useState(false);

  return (
    <div className=" cart-section">
      <div className="add-btn">
        <button
          className="button-btn"
          onClick={() => setAdded(!added)}
        >
          {added ? "ADDED ✓" : "ADD TO CART"}
        </button>
        <div>
          <span className="old price">MRP ₹700</span>
          <span className="new ">₹549</span>
        </div>
      </div>
    </div>
  )
}

export default AddToCart