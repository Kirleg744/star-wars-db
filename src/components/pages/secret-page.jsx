import React from "react";

const SecretPage = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return (
            <div>
                <h3>Secret</h3>
            </div>
        );
    }
    return <h2>Restricted</h2>;
};

export default SecretPage