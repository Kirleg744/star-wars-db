import React, { Component, useState } from "react";
import "./app.css";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import "../../fonts/stylesheet.css";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import {
    PeoplePage,
    PlanetPage,
    StarshipPage,
    LoginPage,
    SecretPage,
} from "../pages";
import { BrowserRouter, Route } from "react-router-dom";
import StarshipDetails from "../sw-components/starship-details";

const App = () => {
    const swapiService = new SwapiService();
    return (
        <div className="container">
            <SwapiServiceProvider value={swapiService}>
                <BrowserRouter>
                    <Header />
                    <RandomPlanet />
                    <Route
                        exact
                        path="/star-wars-db"
                        render={() => (
                            <div className="info mt-4">
                                <h1>Welcome to the Star Wars DB</h1>
                                <h3 className="mb-5">Choose items above</h3>
                            </div>
                        )}
                    />
                    <Route path="/people/:id?" component={PeoplePage} />
                    <Route path="/planets/:id?" component={PlanetPage} />
                    <Route path="/starships/:id?" component={StarshipPage} />
                </BrowserRouter>
            </SwapiServiceProvider>
        </div>
    );
};

export default App;
