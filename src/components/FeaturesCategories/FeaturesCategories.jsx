import css from "./FeaturesCategories.module.css";


const FeaturesCategories = ({truck}) => {
    return (
        <ul className={css["feature-list"]}>
            <li className={css["feature-item"]}>
                <svg className={css["feature-icon"]} width="20px" height="20px"><use href="/img/icons.svg#icon-diagram"></use></svg>
                {truck.transmission?.charAt(0).toUpperCase() + truck.transmission?.slice(1)}
            </li>
            <li className={css["feature-item"]}>
                <svg className={css["feature-icon"]} width="20px" height="20px"><use href="/img/icons.svg#icon-fuel-pump"></use></svg>
                {truck.engine?.charAt(0).toUpperCase() + truck.engine?.slice(1)}
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
    )
}

export default FeaturesCategories;
