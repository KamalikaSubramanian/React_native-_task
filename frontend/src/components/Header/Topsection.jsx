import React from 'react'
import leftArrow from "../Header/assets/leftArrow.jpg";
import rightArrow from "../Header/assets/rightArrow.jpg";
import productImg from "../Header/assets/productImg.jpeg";
function Topsection() {
    return (
        <div className="topSection">
            <img src={leftArrow} alt="left" className="nav-arrow left" />

            <img src={productImg} alt="product" className="product-image" />

            <img src={rightArrow} alt="right" className="nav-arrow right" />
            <div className="dots">
                <span className="dot dark"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    )
}

export default Topsection