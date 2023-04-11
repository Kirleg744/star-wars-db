import React, { Component, useState } from "react";
import "./app.css";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import "../../fonts/stylesheet.css";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";

const App = () => {
    const swapiService = new SwapiService();

    const [page, setPage] = useState(<PeoplePage />);
    return (
        <div className="container">
            <SwapiServiceProvider value={swapiService}>
                <Header setPage = {setPage}/>
                <RandomPlanet />
                {page}
            </SwapiServiceProvider>
        </div>
    );
};

export default App;
