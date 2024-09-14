import { NavLink } from "react-router-dom";
import css from "./TruckCard.module.css";


const TruckCard = ({ truck }) => {
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
                    <span className={css["info-part"]}>
                        <svg className={css["info-icon"]} width="16px" height="16px">
                            <use href="/img/icons.svg#icon-yellow-star"></use>
                        </svg>
                        {truck.rating}
                        <NavLink to={"reviews"}>
                            ({truck.reviews.length} Reviews)
                        </NavLink>
                    </span>
                    <span className={css["info-part"]}>
                        <svg className={css["info-icon"]} width="16px" height="16px">
                            <use href="/img/icons.svg#icon-Map"></use>
                        </svg>
                        {truck.location}
                    </span>
                </div>
                <p className={css.description}>{`${truck.description.substring(0, 62)}...`}</p>
                <ul className={css["feature-list"]}>
                    <li className={css["feature-item"]}>
                        <svg className={css["feature-icon"]} width="20px" height="20px"><use href="/img/icons.svg#icon-diagram"></use></svg>
                        {truck.transmission.charAt(0).toUpperCase() + truck.transmission.slice(1)}
                    </li>
                    <li className={css["feature-item"]}>
                        <svg className={css["feature-icon"]} width="20px" height="20px"><use href="/img/icons.svg#icon-fuel-pump"></use></svg>
                        {truck.engine.charAt(0).toUpperCase() + truck.engine.slice(1)}
                    </li>
                    {truck.kitchen && <li className={css["feature-item"]}>
                        <svg className={css["feature-icon"]} width="20px" height="20px"><use href="/img/icons.svg#icon-cup-hot"></use></svg>
                        Kitchen
                    </li>}
                    {truck.AC && <li className={css["feature-item"]}>
                        <svg className={css["feature-icon"]} width="20px" height="20px"><use href="/img/icons.svg#icon-wind"></use></svg>
                        AC
                    </li>}
                    {truck.TV && <li className={css["feature-item"]}>
                        <svg className={css["feature-icon"]} width="20px" height="20px"><use href="/img/icons.svg#icon-tv"></use></svg>
                        TV
                    </li>}
                    {truck.bathroom && <li className={css["feature-item"]}>
                        <svg className={css["feature-icon"]} width="20px" height="20px"><use href="/img/icons.svg#icon-bi_droplet"></use></svg>
                        Bathroom
                    </li>}
                    {truck.radio && <li className={css["feature-item"]}>
                        <svg className={css["feature-icon"]} width="20px" height="20px"><use href="/img/icons.svg#icon-ui-radios"></use></svg>
                        Radio
                    </li>}
                </ul>
                <button className={css["show-btn"]}>Show more</button>
            </div>
        </div>
    )
};

export default TruckCard;
