import TrucksList from "../../components/TrucksList/TrucksList";
import Filters from "../../components/Filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTrucks } from "../../redux/trucksOps";
import css from "./CatalogPage.module.css";
import { selectPage } from "../../redux/trucksSlice";
import { selectFilter } from "../../redux/filtersSlice";


const CatalogPage = () => {
    const page = useSelector(selectPage);
    const dispatch = useDispatch();

    const filter = useSelector(selectFilter);

    useEffect(() => {
        dispatch(fetchTrucks({ page, filter }))
    }, [dispatch, page, filter])

    return (
        <div className={css.container}>
            <Filters />
            <TrucksList />
        </div>
    )
};

export default CatalogPage;
