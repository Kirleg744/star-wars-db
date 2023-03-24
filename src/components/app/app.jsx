import React, { Component } from "react";
import './app.css'
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

export default class App extends Component {

    render(){
        return (
            <div>
                <Header />
                <RandomPlanet />
                <div>
                    <ItemList />
                </div>
                <PersonDetails/>
            </div>
        );
    }

}