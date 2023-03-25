import React from "react";
import "./person-details.css";
const PersonDetails = () => {
    return (
        <div className="info person-details">
            <div className="info__inner d-flex">
                <img
                    src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
                    alt=""
                    className="info__img"
                />
                <div className="info__descr">
                    <span className="info__name">Luke</span>
                    <ul className="info__list">
                        <li className="info__list-item">Gender male</li>
                        <li className="info__list-item">Birth Year 45</li>
                        <li className="info__list-item">Eye Color red</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PersonDetails;
