import React from 'react';
import protein from "../ProductInfo/assets/protein.jpg";
import expresso from "../ProductInfo/assets/expresso.jpg";
import sugar from "../ProductInfo/assets/sugar.jpg";
import cal from "../ProductInfo/assets/cal.jpg";
import question from "../ProductInfo/assets/question.jpg";
import sideArrow from "../ProductInfo/assets/sideArrow.jpg";


function Features() {
  return (
    <div className="features">
      <div className="feature">
        <img src={protein} alt="protein" />
        <p>15-GRAM PROTEIN</p>
      </div>

      <div className="feature">
        <img src={expresso} alt="" />
        <p>2 ESPRESSO SHOTS *</p>
      </div>

      <div className="feature">
        <img src={sugar} alt="" />
        <p>ZERO ADDED SUGAR</p>
      </div>

      <div className="feature">
        <img src={cal} alt="" />
        <p>LESS THAN 100 CAL</p>
      </div>
      <div className="feature">
        <img src={question} alt="" />
        <span >FAQ<img src ={sideArrow} className='sideArrow'/></span>
      </div>
    </div>
  )
}

export default Features