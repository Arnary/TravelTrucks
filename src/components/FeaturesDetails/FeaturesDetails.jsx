import css from "./FeaturesDetails.module.css";
import Capitalize from "../../utils/Capitalize";


const FeaturesDetails = ({truck}) => {
    return (
        <div>
            <h3 className={css["details-title"]}>Vehicle details</h3>
            <ul className={css["details-list"]}>
                <li className={css["detail-item"]}><span>Form</span>{Capitalize(truck.form)}</li>
                <li className={css["detail-item"]}><span>Length</span>{truck.length}</li>
                <li className={css["detail-item"]}><span>Width</span>{truck.width}</li>
                <li className={css["detail-item"]}><span>Height</span>{truck.height}</li>
                <li className={css["detail-item"]}><span>Tank</span>{truck.tank}</li>
                <li className={css["detail-item"]}><span>Consumption</span>{truck.consumption}</li>
            </ul>
        </div>
    )
}

export default FeaturesDetails;
