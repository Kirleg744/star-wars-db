import React from "react";
import { StarshipList } from "../sw-components";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const StarshipPage = ({history}) => {
    return (
        <React.Fragment>
            <h2>Starships</h2>
            <StarshipList onItemSelected={(id) => history.push(id)} />
        </React.Fragment>
    );
};

export default withRouter(StarshipPage) ;
