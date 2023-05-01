import React from "react";
import ItemDetails from "../item-details/item-details";
import { Record } from "../item-details/item-details";
import WithSwapiService from "../hoc-helpers/with-swapi-service";

const PlanetDetails = (props) => {
    return (
        <ItemDetails
            {...props}
        >
            <Record field="population" label="Population:" />
            <Record field="rotationPeriod" label="Rotation:" />
            <Record field="diameter" label="Diameter:" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage,
    };
};

export default WithSwapiService(PlanetDetails, mapMethodsToProps);
