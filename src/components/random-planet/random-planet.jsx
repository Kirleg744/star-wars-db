import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = this.getRndInteger(2, 19)
        console.log(id);
        this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded);
    }

    getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false });
    };

    render() {
        const {planet, loading} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;

        return (
            <div className="info">
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView = ({planet}) => {

    const {id, name, population, rotationPeriod, diameter} = planet;
    return (
        <React.Fragment>
            <div className="info__inner d-flex">
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    alt=""
                    className="info__img"
                />
                <div className="info__descr">
                    <span className="info__name">{name}</span>
                    <ul className="info__list">
                        <li className="info__list-item">
                            Population {population}
                        </li>
                        <li className="info__list-item">
                            Rotation {rotationPeriod}
                        </li>
                        <li className="info__list-item">Diameter {diameter}</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}
