import { useDispatch, useSelector } from "react-redux";
import css from "./TruckDetailPage.module.css";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { selectError, selectLoading, selectTruckById } from "../../redux/trucksSlice";
import { fetchTruckById } from "../../redux/trucksOps";
import TruckRating from "../../components/TruckRating/TruckRating";
import TruckLocation from "../../components/TruckLocation/TruckLocation";
import TruckGallery from "../../components/TruckGallery/TruckGallery";
import { useEffect, useState } from "react";
import ImageModal from "../../components/ImageModal/ImageModal";
import clsx from "clsx";
import BookingForm from "../../components/BookingForm/BookingForm";
import Loader from "../../components/Loader/Loader";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.links, isActive && css.active);
};

const TruckDetailPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const { truckId } = useParams();
    const truck = useSelector(selectTruckById);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImg, setModalImg] = useState(null);


    useEffect(() => {
        dispatch(fetchTruckById(truckId));
    }, [truckId]);

    const openModal = (modalImage) => {
        setIsModalOpen(true);
        setModalImg(modalImage);
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setModalImg(null);
    };


    if (isLoading) {
        return (
            <div className={css.loader}>
                <Loader />
            </div>  
        )
    }
    return (
        <div className={css.container}>
            {error && !isLoading ? <p className={css["detail-error"]}>Whoops, something went wrong! Please try reloading this page!</p> : (
                <>
                    <h2 className={css["truck-title"]}>{truck.name}</h2>
                <div className={css.info}>
                    <TruckRating truck={truck} />
                    <TruckLocation truck={truck} />
                </div>
                <p className={css.price}>€{truck.price}.00</p>
                <TruckGallery truck={truck} openModal={openModal}/>
                <p className={css.description}>{truck.description}</p>
                <div className={css["info-detail-links"]}>
                    <NavLink className={buildLinkClass} to={`/catalog/${truckId}`} end >Features</NavLink>
                    <NavLink className={buildLinkClass} to="reviews" >Reviews</NavLink>
                </div>
                <div className={css["info-container"]}>
                <Outlet />
                <BookingForm />    
                    </div>
                </>)}
            {isModalOpen && <ImageModal
                closeModal={closeModal}
                modalImg={modalImg}
            />}
        </div>
    )
}

export default TruckDetailPage;
