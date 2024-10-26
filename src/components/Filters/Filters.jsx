import { Field, Form, Formik } from "formik";
import LocationFilter from "../LocationFilter/LocationFilter";
import css from "./Filters.module.css";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { setFilters, cleanFilters } from "../../redux/filtersSlice";


const Filters = () => {
    const dispatch = useDispatch();

    const handleSearch = (value) => {
        // console.log(value);
        // dispatch(cleanFilters());
        dispatch(setFilters(value));
    }

    return (
        <div className={css["filters-container"]}>
            <Formik
                initialValues={{
                    location: "",
                    form: "",
                    // AC: false,
                    // transmission: "",
                    // bathroom: false,
                    // kitchen: false,
                    // TV: false,
                }}
                onSubmit={handleSearch}
            >
                <Form>
                    <LocationFilter />
                    <h2 className={css["filter-title"]}>Filters</h2>
                    <h3 className={css["group-title"]}>Vehicle equipment</h3>
                    <fieldset className={css["group"]}>
                        <label className={css["checkbox-wrapper"]}>
                            <Field type="checkbox" name="AC" className={css["checkbox-input"]} />
                            <div className={css["checkbox"]}>
                                <svg width="32px" height="32px">
                                    <use href="/img/icons.svg#icon-wind"></use>
                                </svg>
                                AC
                            </div>
                        </label>
                        <label className={css["checkbox-wrapper"]}>
                            <Field type="checkbox" name="transmission" value="automatic" className={css["checkbox-input"]} />
                            <div className={css["checkbox"]}>
                                <svg width="32px" height="32px">
                                    <use href="/img/icons.svg#icon-diagram"></use>
                                </svg>
                                Automatic
                            </div>
                        </label>
                        <label className={css["checkbox-wrapper"]}>
                            <Field type="checkbox" name="kitchen" className={css["checkbox-input"]} />
                            <div className={css["checkbox"]}>
                                <svg width="32px" height="32px">
                                    <use href="/img/icons.svg#icon-cup-hot"></use>
                                </svg>
                                Kitchen
                            </div>
                        </label>
                        <label className={css["checkbox-wrapper"]}>
                            <Field type="checkbox" name="TV" className={css["checkbox-input"]} />
                            <div className={css["checkbox"]}>
                                <svg width="32px" height="32px">
                                    <use href="/img/icons.svg#icon-tv"></use>
                                </svg>
                                TV
                            </div>
                        </label>
                        <label className={css["checkbox-wrapper"]}>
                            <Field type="checkbox" name="bathroom" className={css["checkbox-input"]} />
                            <div className={css["checkbox"]}>
                                <svg width="32px" height="32px">
                                    <use href="/img/icons.svg#icon-ph_shower"></use>
                                </svg>
                                Bathroom
                            </div>
                        </label>
                    </fieldset>

                    <h3 className={css["group-title"]}>Vehicle type</h3>
                    <fieldset className={clsx(css.group, css["radio-group"])}>
                        <label className={css["checkbox-wrapper"]}>
                            <Field type="radio" name="form" value="van" className={css["checkbox-input"]} />
                            <div className={css["checkbox"]}>
                                <svg width="32px" height="32px">
                                    <use href="/img/icons.svg#icon-bi_grid-1x2"></use>
                                </svg>
                                Van
                            </div>
                        </label>
                        <label className={css["checkbox-wrapper"]}>
                            <Field type="radio" name="form" value="fullyIntegrated" className={css["checkbox-input"]} />
                            <div className={css["checkbox"]}>
                                <svg width="32px" height="32px">
                                    <use href="/img/icons.svg#icon-bi_grid"></use>
                                </svg>
                                Fully Integrated
                            </div>
                        </label>
                        <label className={css["checkbox-wrapper"]}>
                            <Field type="radio" name="form" value="alcove" className={css["checkbox-input"]} />
                            <div className={css["checkbox"]}>
                                <svg width="32px" height="32px">
                                    <use href="/img/icons.svg#icon-bi_grid-3x3-gap"></use>
                                </svg>
                                Alcove
                            </div>
                        </label>
                    </fieldset>
                    
                    <button className={css["search-btn"]} type="submit">Search</button>
                </Form>
            </Formik>

        </div>
    )
};

export default Filters;
