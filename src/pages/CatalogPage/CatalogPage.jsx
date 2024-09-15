import TrucksList from "../../components/TrucksList/TrucksList";
import Filters from "../../components/Filters/Filters";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTrucks } from "../../redux/trucksOps";
import css from "./CatalogPage.module.css";


const CatalogPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTrucks())
    }, [dispatch])

    return (
        <div className={css.container}>
            <Filters />
            <TrucksList />
        </div>
    )
}

export default CatalogPage;
