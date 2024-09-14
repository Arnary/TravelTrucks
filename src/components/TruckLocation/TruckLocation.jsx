import css from "./TruckLocation.module.css";

const TruckLocation = ({ truck }) => {
    return (
        <span className={css["info-part"]}>
            <svg className={css["info-icon"]} width="16px" height="16px">
                <use href="/img/icons.svg#icon-Map"></use>
            </svg>
            {truck.location}
        </span>
    )
}

export default TruckLocation;
