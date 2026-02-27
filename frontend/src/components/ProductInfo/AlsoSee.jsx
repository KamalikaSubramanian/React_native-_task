import React from 'react'
import matcha from "../ProductInfo/assets/matcha.jpeg";
function AlsoSee() {
  return (
    <div className="also-see">
      <img src={matcha} alt="matcha" />
      <div className='also-see-content'>
        <p><strong>ALSO SEE: MATCHA LATTE PREMIX</strong><br />Make Matcha Latte in seconds! Just add hot water.</p>
      </div>
    </div>
  )
}

export default AlsoSee