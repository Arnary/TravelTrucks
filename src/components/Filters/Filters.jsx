import LocationFilter from "../LocationFilter/LocationFilter";
import css from "./Filters.module.css";


const Filters = () => {
    return (
        <div className={css["filters-container"]}>
            <LocationFilter />
        </div>
    )
}

export default Filters;
