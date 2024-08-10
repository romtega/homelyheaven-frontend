import "./guestreviews.css";
import User from "@/assets/user.jpg";

const GuestReviews = ({ review }) => {
  const {
    user: { firstName, lastName },
    rating,
    comment,
  } = review;
  return (
    <div className="housedetails__reviews flex bg-white">
      <div className="reviews__header flex">
        <div className="reviews__img-wrapper">
          <img src={User} alt="" />
        </div>
        <div>
          <h3 className="reviews__name font-base">
            {firstName} {lastName}
          </h3>
          <span className="reviews__date font-sm text-gray">{rating} de 5</span>
        </div>
      </div>
      <p className="reviews__description font-sm text-gray">{comment}</p>
    </div>
  );
};

export default GuestReviews;
