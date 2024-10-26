import {useNavigate } from "react-router-dom";
import css from "./TruckCard.module.css";
import TruckRating from "../TruckRating/TruckRating";
import TruckLocation from "../TruckLocation/TruckLocation";
import FeaturesCategories from "../FeaturesCategories/FeaturesCategories";
import { useDispatch, useSelector } from "react-redux";
import { resetPage } from "../../redux/trucksSlice";
import { selectFavoritesList, switchFavorite } from "../../redux/favoritesSlice";


const TruckCard = ({ truck }) => {
    const navigate = useNavigate();
    const favoritesList = useSelector(selectFavoritesList);
    const isFavorite = favoritesList.includes(truck.id);
    const dispatch = useDispatch();

    const handleClick = () => {
        navigate(`/catalog/${truck.id}`);
            
        dispatch(resetPage());
    };

    const handleFavoritesClick = () => {
        dispatch(switchFavorite(truck.id));
    };

    return (
        <div className={css.card}>
            <img className={css["card-img"]} src={truck.gallery[0].thumb} alt={truck.name} />
            <div>
                <div className={css["card-header"]}>
                    <h2 className={css["truck-title"]}>{truck.name.substring(0, 26)}</h2>
                    <p className={css.price}>€{truck.price}.00</p>
                    <button className={css["fav-btn"]} onClick={handleFavoritesClick} >
                        {isFavorite ? (
                            <svg width="26px" height="24px">
                                <use href="/img/icons.svg#icon-heart-pressed"></use>
                            </svg>) : (
                            <svg width="26px" height="24px">
                                <use href="/img/icons.svg#icon-heart-Default"></use>
                            </svg>)
                        }
                    </button>
                </div>
                <div className={css.info}>
                    <TruckRating truck={truck} />
                    <TruckLocation truck={truck} />
                </div>
                <p className={css.description}>{`${truck.description.substring(0, 62)}...`}</p>
                <FeaturesCategories truck={truck} />
                <button onClick={handleClick} className={css["show-btn"]}>Show more</button>
            </div>
        </div>
    )
};

export default TruckCard;
