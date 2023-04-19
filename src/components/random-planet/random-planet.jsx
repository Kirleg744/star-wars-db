import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorIcon from "./free-icon-error-404-on-screen-78924.png";
export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };


    componentDidMount(){
        this.updatePlanet();
        setInterval(this.updatePlanet, 2000);
    }

    updatePlanet = () => {
        const id = this.getRndInteger(2, 19)
        this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        })
    }

    getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false });
    };

    render() {
        const {planet, loading, error} = this.state;
        const hasData = !(loading || error)
        const errorMessage = error ? <img className="error-icon" src={ErrorIcon} alt="" /> : null
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet info d-flex">
                {errorMessage}
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
            <img
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt=""
                className="info__img"
            />
            <div className="info__descr">
                <span className="info__name">{name}</span>
                <ul className="info__list">
                    <li className="info__list-item">Population {population}</li>
                    <li className="info__list-item">
                        Rotation {rotationPeriod}
                    </li>
                    <li className="info__list-item">Diameter {diameter}</li>
                </ul>
            </div>
        </React.Fragment>
    );
}
