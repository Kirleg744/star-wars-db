import React from "react";
import { StarshipList } from "../sw-components";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Row from "../row/row";
import StarshipDetails from "../sw-components/starship-details";

const StarshipPage = ({history, match}) => {
    const { id } = match.params;
    return (
        <React.Fragment>
            <h2>Starships</h2>
            <Row
                left={
                    <StarshipList
                        onItemSelected={(id) => {
                            history.push(id);
                        }}
                    />
                }
                right={<StarshipDetails itemId={id} />}
            />
        </React.Fragment>
    );
};

export default withRouter(StarshipPage) ;
