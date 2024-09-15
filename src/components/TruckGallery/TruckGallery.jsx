import css from "./TruckGallery.module.css";


const TruckGallery = ({truck, openModal}) => {
    return (
            <ul className={css["gallery-list"]}>
                {truck.gallery?.map((pic, i) => {
                    return (
                        <li key={i}>
                            <img className={css["gallery-img"]} src={pic.thumb} onClick={()=>openModal(pic.
                            original)}></img>
                        </li>
                    )
                })}
            </ul>
    )
}

export default TruckGallery;
