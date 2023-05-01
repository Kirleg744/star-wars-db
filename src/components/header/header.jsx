import React from "react";
import "./header.css";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";
import { Link } from "react-router-dom";

const Header = ({}) => {
    return (
        <header className="header">
            <div className="header__inner d-flex">
                <span className="header__logo">
                    <Link to="/star-wars-db">Star DB</Link>
                </span>
                <nav className="header__nav nav d-flex">
                    <li className="header__nav-item nav-item">
                        <Link to="/people/">People</Link>
                    </li>
                    <li className="header__nav-item nav-item">
                        <Link to="/planets/">Planets</Link>
                    </li>
                    <li className="header__nav-item nav-item">
                        <Link to="/starships/">Starships</Link>
                    </li>
                </nav>
            </div>
        </header>
    );
};

export default Header;
