import { Field } from "formik";
import css from "./LocationFilter.module.css";


const LocationFilter = () => {
    return (
        <div className={css.location}>
            <label className={css["location-lable"]} htmlFor="location">Location</label>
            <Field className={css["location-input"]} type="text" name="location" id="location" placeholder="City" />
            <svg className={css['location-icon']} width="20px" height="20px">
                <use href="/img/icons.svg#icon-Map"/>
            </svg>
        </div>
    )
}

export default LocationFilter;
