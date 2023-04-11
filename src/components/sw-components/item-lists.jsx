import React from "react";
import withData from "../hoc-helpers/with-data";
import ItemList from "../item-list/item-list";
import SwapiService from "../../services/swapi-service";
import { compose } from "../hoc-helpers";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return <Wrapped {...props}>{fn}</Wrapped>;
    };
};

const renderModelAndName = ({ model, name }) => (
    <span>
        {name} ({model})
    </span>
);


const PersonList = withData(
    withChildFunction(ItemList, ({ name }) => <span>{name}</span>),
    getAllPeople
);

const PlanetList = withData(
    withChildFunction(ItemList, ({ name }) => <span>{name}</span>),
    getAllPlanets
);

const StarshipList = withData(
    withChildFunction(ItemList, renderModelAndName),
    getAllStarships
);

export { PlanetList, PersonList, StarshipList };
