import css from "./FeaturesDetails.module.css";

const FeaturesDetails = ({truck}) => {
    return (
        <div>
            <h3>Vehicle details</h3>
            <ul>
                <li><span>Form</span> {truck.form}</li>
                <li><span>Length</span> {truck.length}</li>
                <li><span>Width</span> {truck.width}</li>
                <li><span>Height</span> {truck.height}</li>
                <li><span>Tank</span> {truck.tank}</li>
                <li><span>Consumption</span> {truck.consumption}</li>
            </ul>
        </div>
    )
}

export default FeaturesDetails;
