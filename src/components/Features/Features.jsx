import { useSelector } from "react-redux";
import FeaturesCategories from "../FeaturesCategories/FeaturesCategories";
import css from "./Features.module.css";
import { selectTruckById } from "../../redux/trucksSlice";
import FeaturesDetails from "../FeaturesDetails/FeaturesDetails";


const Features = () => {
    const truck = useSelector(selectTruckById);

    return (
        <div className={css["features-container"]}>
            <FeaturesCategories truck={truck} />
            <FeaturesDetails truck={truck} />
        </div>
    )
}

export default Features;
