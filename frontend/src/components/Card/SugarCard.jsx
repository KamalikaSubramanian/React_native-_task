import React from 'react'
import sugar from "../Card/assets/sugar.jpeg"
function SugarCard() {
  return (
    <div className="container">   
          <div className="image-container">
            <img src={sugar} alt="sugar - Cold Coffee" />
          </div>
    
          <div className="bottom-card">
            <p className="small-heading">
              UPGRADED TO MATCH YOUR GOALS
            </p>
            <p className="description">
              0g added sugar, under 97 kcal, and absolutely no compromise on flavour or health.
            </p>
          </div>
        </div>
  )
}

export default SugarCard