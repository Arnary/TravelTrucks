import { useSelector } from "react-redux";
import css from "./Reviews.module.css";
import { selectTruckById } from "../../redux/trucksSlice";


const Reviews = () => {
    const truck = useSelector(selectTruckById);

    function ReviewStars(data) {
        const stars = Array(5).fill().map((_, i) => {
            if (i < data.reviewer_rating) {
                return (
                    <svg key={i} width="16" height="16">
                        <use href="/img/icons.svg#icon-yellow-star"></use>
                    </svg>
                );
            } else {
                return (
                    <svg key={i} width="16" height="16">
                        <use href="/img/icons.svg#icon-gray-star"></use>
                    </svg>
                )
            }
        });

        return stars;
    };

    return (
        <div className={css["reviews-container"]}>
            <ul>
                {truck.reviews?.map((review, i) => {
                    return (
                        <li className={css["review-item"]} key={i}>
                            <div className={css["review-title"]}>
                                <div className={css.avatar}><span className={css["avatar-letter"]}>{review.reviewer_name[0]}</span></div>
                                <div>
                                    <p className={css["review-name"]}>{review.reviewer_name}</p>
                                    <div>{ReviewStars(review)}</div>
                                </div>
                            </div>
                            <p className={css["review-comment"]}>{review.comment}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Reviews;
