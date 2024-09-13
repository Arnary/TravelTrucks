import TrucksList from "../../components/TrucksList/TrucksList";
import Filters from "../../components/Filters/Filters";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTrucks } from "../../redux/trucksOps";


const CatalogPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTrucks())
    }, [dispatch])

    return (
        <>
            <div>
                <Filters />
                <TrucksList />
            </div>
        </>
    )
}

export default CatalogPage;
