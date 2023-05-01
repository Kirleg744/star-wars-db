import React from "react";
import Row from "../row/row";
import PersonDetails from "../sw-components/person-details";
import { PersonList } from "../sw-components";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const PeoplePage = ({ history, match }) => {
    const { id } = match.params;
    return (
        <React.Fragment>
            <h2>People</h2>
            <Row
                left={
                    <PersonList
                        onItemSelected={(id) => {
                            history.push(id);
                        }}
                    />
                }
                right={<PersonDetails itemId={id} />}
            />
        </React.Fragment>
    );
};

export default withRouter(PeoplePage);
