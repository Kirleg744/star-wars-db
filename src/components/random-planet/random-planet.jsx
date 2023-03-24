import React from "react";
import './random-planet.css'
const RandomPlanet = () => {
	return (
        <div className="info">
            <div className="container">
                <div className="info__inner d-flex">
                    <img
                        src="https://starwars-visualguide.com/assets/img/planets/9.jpg"
                        alt=""
                        className="info__img"
                    />
                    <div className="info__descr">
                        <span className="info__name">Planet Name</span>
                        <ul className="info__list">
                            <li className="info__list-item">
                                Population 12141124
                            </li>
                            <li className="info__list-item">
                                Rotation Period
                            </li>
                            <li className="info__list-item">
                                Diameter 1000
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomPlanet
