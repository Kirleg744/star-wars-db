import React, { Component } from "react";
import Row from "../row/row";
import PlanetDetails from "../sw-components/planet-details";
import { PlanetList } from "../sw-components";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const PlanetPage = ({ history, match }) => {
    const { id } = match.params;
    return (
        <React.Fragment>
            <h2>Planets</h2>
            <Row
                left={
                    <PlanetList
                        onItemSelected={(id) => {
                            history.push(id);
                        }}
                    />
                }
                right={<PlanetDetails itemId={id} />}
            />
        </React.Fragment>
    );
};

export default withRouter(PlanetPage);
