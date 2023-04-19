import React, { Component } from "react";
import Row from "../row/row";
import PlanetDetails from "../sw-components/planet-details";
import { PlanetList } from "../sw-components";

export default class PlanetPage extends Component {
    state = {
        selectedItem: null,
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        const { selectedItem } = this.state;

        return (
            <React.Fragment>
                <h2>Planets</h2>
                <Row
                    left={<PlanetList onItemSelected={this.onItemSelected} />}
                    right={<PlanetDetails itemId={selectedItem} />}
                />
            </React.Fragment>
        );
    }
}
