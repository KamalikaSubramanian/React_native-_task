import "../ReviewCard/ReviewCard.css";
import upThumb from "../ReviewCard/assets/upThumb.jpg";
import lowerThumb from "../ReviewCard/assets/lowerThumb.jpg";
import reviewCardStarFill from "../ReviewCard/assets/reviewCardStarFill.jpg";
const reviews = [
  {
    key: 1,
    symbol: "YG",
    name: "Yash g",
    daysAgo: "15 ",
    rating: "5",
    title: "It has a hint of cinnamon taste",
    comment: "It has a hint of cinnamojn taste to it which I personally don't like aprt from it tastes ans feels aewesome."
  },
  {
    key: 2,
    symbol: "YG",
    name: "Yash g",
    daysAgo: "15",
    rating: "5",
    title: "It has a hint of cinnamon taste",
    comment: "It has a hint of cinnamojn taste to it which I personally don't like aprt from it tastes ans feels aewesome."
  },
  {
    key: 3,
    symbol: "YG",
    name: "Yash g",
    daysAgo: "15",
    rating: "4",
    title: "It has a hint of cinnamon taste",
    comment: "It has a hint of cinnamojn taste to it which I personally don't like aprt from it tastes ans feels aewesome."
  },
  {
    key: 4,
    symbol: "YG",
    name: "Yash g",
    daysAgo: "15 ",
    rating: "3",
    title: "It has a hint of cinnamon taste",
    comment: "It has a hint of cinnamojn taste to it which I personally don't like aprt from it tastes ans feels aewesome."
  }
]

function ReviewCard() {
  return (
    <div className=" review-card">
      {reviews.map((review) => (
        <div key={review.key}>
          <div className="review-header" >
            <div className="avatar">{review.symbol}</div>
            <div>
              <p className="name">{review.name}</p>
              <span className="verified">Verified Buyer</span>
            </div>
            <span className="days">{review.daysAgo} days ago</span>
          </div>
          <div className="stars">
            <img src={reviewCardStarFill} alt="star" className='reviewCardStarFill' />
            <img src={reviewCardStarFill} alt="star" className='reviewCardStarFill' />
            <img src={reviewCardStarFill} alt="star" className='reviewCardStarFill' />
            <img src={reviewCardStarFill} alt="star" className='reviewCardStarFill' />
            <img src={reviewCardStarFill} alt="star" className='reviewCardStarFill' />
            
          </div>

          <h4>{review.title}</h4>
          <p className="comment">{review.comment}</p>

          <div className="helpful">
            Was this review helpful? <img src={upThumb} className="thumbIcon" /> 1 <img src={lowerThumb} className="thumbIcon" /> 0
          </div>
        </div>

      ))}
    </div>
  )
}
export default ReviewCard
