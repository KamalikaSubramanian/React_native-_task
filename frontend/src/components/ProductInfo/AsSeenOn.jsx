import React from 'react'
import forbes from "../ProductInfo/assets/forbes.jpg";
import toi from "../ProductInfo/assets/toi.jpg";
function AsSeenOn() {
    return (
        <div className="as-seen-section">
            <div className="as-seen-container">
                <p className="as-seen-title">AS SEEN ON</p>

                <div className="logos">
                    <img src={forbes} alt="Forbes" />
                    <img src={toi} alt="The Times of India" />
                </div>
            </div>
        </div>
    )
}

export default AsSeenOn