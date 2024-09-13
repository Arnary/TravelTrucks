import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className={css["container"]}>
            <div className={css["hero-content"]}>
                <h1 className={css.title}>Campers of your dreams</h1>
                <p className={css.slogan}>You can find everything you want in our catalog</p>
                <button className={css["view-btn"]} onClick={() => navigate("/catalog")}>View Now</button>
            </div>
        </div>
    )
};

export default HomePage;
