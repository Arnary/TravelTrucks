import { useSelector } from "react-redux";
import TruckCard from "./TruckCard/TruckCard";
import { selectTrucks } from "../../redux/trucksSlice";

const TrucksList = () => {
    const trucks = useSelector(selectTrucks);

    return (
        <ul>
            {trucks.map(truck => {
                return (
                    <li key={truck.id}>
                        <TruckCard truck={truck} />
                    </li>
                )
            })}
        </ul>
    )
};

export default TrucksList;
