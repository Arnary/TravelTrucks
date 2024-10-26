import { NavLink, useParams } from "react-router-dom";
import css from "./TruckRating.module.css";

const TruckRating = ({ truck }) => {
    const { truckId } = useParams();

    return (
        <span className={css["info-part"]}>
            <svg className={css["info-icon"]} width="16px" height="16px">
                <use href="/img/icons.svg#icon-yellow-star"></use>
            </svg>
            <NavLink className={css["reviews-link"]} to={truckId ? 'reviews' : `${truck.id}/reviews`}>
                {truck.rating}({truck.reviews?.length} Reviews)
            </NavLink>
        </span>
    )
}

export default TruckRating;
