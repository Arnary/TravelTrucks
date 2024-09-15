import css from "./LocationFilter.module.css";


const LocationFilter = () => {
    return (
        <div className={css.location}>
            <label className={css["location-lable"]} htmlFor="location">Location</label>
            <input className={css["location-input"]} type="text" id="location" placeholder="City" />
            <svg width="20px" height="20px">
                <use href="/img/icons.svg#icon-Map"/>
            </svg>
        </div>
    )
}

export default LocationFilter;
