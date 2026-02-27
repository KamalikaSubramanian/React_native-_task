import React from 'react'
import protein from "../Card/assets/protein.jpeg";
function ProteinCard() {
  return (
    <div className="container">
      <h1 className="title">PROTEIN-POWERED</h1>
      <h2 className="subtitle">COLD COFFEE</h2>

      <div className="image-container">
        <img src={protein} alt="Protein Cold Coffee" />
      </div>

      <div className="bottom-card">
        <p className="small-heading">
          COLD COFFEE, ONLY STRONGER!
        </p>
        <p className="description">
          Your everyday cold coffee, now stronger with 2 espresso
          shots and 15g whey protein!
        </p>
      </div>
    </div>
  )
}

export default ProteinCard