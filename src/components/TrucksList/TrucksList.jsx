import { useDispatch, useSelector } from "react-redux";
import TruckCard from "../TruckCard/TruckCard";
import { loadMorePage, selectLoading, selectMorePages, selectPage, selectTotal, selectTrucks } from "../../redux/trucksSlice";
import css from "./TrucksList.module.css"
import Loader from "../Loader/Loader";


const TrucksList = () => {
    const trucks = useSelector(selectTrucks);
    const isLoading = useSelector(selectLoading)
    const morePages = useSelector(selectMorePages);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(loadMorePage());
    }

    return (
        <div className={css["list-container"]}>
            <ul className={css.list}>
                {trucks.map(truck => {
                    return (
                        <li key={truck.id}>
                            <TruckCard truck={truck} />
                        </li>
                    )
                })}
            </ul>
            {isLoading && <Loader />}
            {morePages && !isLoading && <button className={css["load-btn"]} onClick={handleClick}>Load more</button>}    
        </div>
        
    )
};

export default TrucksList;
