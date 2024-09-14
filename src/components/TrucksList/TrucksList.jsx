import { useSelector } from "react-redux";
import TruckCard from "../TruckCard/TruckCard";
import { selectTrucks } from "../../redux/trucksSlice";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const TrucksList = () => {
    const trucks = useSelector(selectTrucks);

    return (
        <div>
            <ul>
                {trucks.map(truck => {
                    return (
                        <li key={truck.id}>
                            <TruckCard truck={truck} />
                        </li>
                    )
                })}
            </ul>
            <LoadMoreBtn />
        </div>
        
    )
};

export default TrucksList;
