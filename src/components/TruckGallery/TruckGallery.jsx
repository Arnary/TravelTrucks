import css from "./TruckGallery.module.css";


const TruckGallery = ({truck, openModal}) => {
    return (
            <ul className={css["gallery-list"]}>
                {truck.gallery?.map(pic => {
                    return (
                        <li key={pic.thumb}>
                            <img className={css["gallery-img"]} src={pic.thumb} onClick={()=>openModal(pic.
                            original)}></img>
                        </li>
                    )
                })}
            </ul>
    )
}

export default TruckGallery;
