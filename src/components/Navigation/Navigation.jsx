import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";


const buildLinkClass = ({ isActive }) => {
  return clsx(css.links, isActive && css.active);
};

const Navigation = () => {
    return (
        <>
            <header className={css.header}>
                <div className={css.container}>
                <nav className={css.nav}>
                    <NavLink to="/" className={css.logo}>
                        <svg width="136" height="16">
                            <use href="/img/icons.svg#icon-Logo"></use>
                        </svg>
                    </NavLink>
                        <ul className={css["nav-list"]}>
                            <NavLink to="/" className={buildLinkClass}>
                                Home
                            </NavLink>
                            <NavLink to="/catalog" className={buildLinkClass}>
                                Catalog
                            </NavLink>
                        </ul>
                    </nav>
                    </div>
            </header>
        </>
    )
};

export default Navigation;