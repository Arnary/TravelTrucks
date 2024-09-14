import {useNavigate } from "react-router-dom";
import css from "./TruckCard.module.css";
import TruckRating from "../TruckRating/TruckRating";
import TruckLocation from "../TruckLocation/TruckLocation";
import FeaturesCategories from "../FeaturesCategories/FeaturesCategories";


const TruckCard = ({ truck }) => {
    const navigate = useNavigate();

    return (
        <div className={css.card}>
            <img className={css["card-img"]} src={truck.gallery[0].thumb} alt={truck.name} />
            <div>
                <div className={css["card-header"]}>
                    <h2 className={css["truck-title"]}>{truck.name.substring(0, 26)}</h2>
                    <p className={css.price}>€{truck.price}.00</p>
                    <svg width="26px" height="24px">
                        <use href="/img/icons.svg#icon-heart-Default"></use>
                    </svg>
                </div>
                <div className={css.info}>
                    <TruckRating truck={truck} />
                    <TruckLocation truck={truck} />
                </div>
                <p className={css.description}>{`${truck.description.substring(0, 62)}...`}</p>
                <FeaturesCategories truck={truck} />
                <button onClick={() => navigate(`/catalog/${truck.id}`)} className={css["show-btn"]}>Show more</button>
            </div>
        </div>
    )
};

export default TruckCard;
