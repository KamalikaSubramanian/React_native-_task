import React from 'react'
import "../ReviewSection/ReviewSection.css";
import starFill from "../ReviewSection/assets/review_starFill.jpg";
import star from "../ReviewSection/assets/review_star.jpg";
function ReviewSection() {
    return (
        <div className="reviews-summary">
            <h2>Customer Reviews</h2>

            <div className="summary-content">
                <div className="rating-left">
                    <div className="review-rating">4.5</div>
                    <div className="review-stars">
                        <img src={starFill} alt="star" className='review-starFill' />
                        <img src={starFill} alt="star" className='review-starFill' />
                        <img src={starFill} alt="star" className='review-starFill' />
                        <img src={starFill} alt="star" className='review-starFill' />
                        <img src={star} alt="star" className='review-star' />
                    </div>
                    <p className="review">4 reviews</p>
                </div>

                <div className="rating-bars">
                    {[5, 4, 3, 2, 1].map((r) => (
                        <div key={r} className="bar-row">
                            <span>{r}</span>
                            <div className="bar-bg">
                                <div
                                    className="bar-fill"
                                    style={{ width: r >= 4 ? "70%" : "0%" }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="write-btn">WRITE A REVIEW</button>
        </div>
    )
}

export default ReviewSection