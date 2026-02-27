import React from 'react'
import flavours from "../Card/assets/flavours.jpeg"
function FlavoursCard() {
  return (
    <div className="container">
      <div className="image-container">
        <img src={flavours} alt="sugar - Cold Coffee" />
      </div>

      <div className="bottom-card">
        <p className="small-heading">
          COMES IN 3 DELICIOUS FLAVOURS!
        </p>
        <p className="description">
          Switch between Classic, Hazelnut, and French Vanilla Protein Cold Coffee and keep your taste buds excited.
        </p>
      </div>
    </div>
  )
}

export default FlavoursCard