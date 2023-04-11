import React from "react";
import "./header.css";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";

const Header = ({setPage}) => {
    return (
        <header className="header">
            <div className="header__inner d-flex">
                <span className="header__logo">Star DB</span>
                <nav className="header__nav nav d-flex">
                    <li className="header__nav-item nav-item">
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                setPage(<PeoplePage />);
                            }}
                            className="nav-link"
                            href=""
                        >
                            People
                        </a>
                    </li>
                    <li className="header__nav-item nav-item">
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                setPage(<PlanetPage />);
                            }}
                            className="nav-link"
                            href=""
                        >
                            Planets
                        </a>
                    </li>
                    <li className="header__nav-item nav-item">
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                setPage(<StarshipPage />);
                            }}
                            className="nav-link"
                            href=""
                        >
                            Starships
                        </a>
                    </li>
                </nav>
            </div>
        </header>
    );
};

export default Header;
