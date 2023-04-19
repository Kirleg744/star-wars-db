import React from "react";

const LoginPage = ({isLoggenIn, onLogin}) => {
    return (
        <form action="">
            <input type="text" />
            <input type="text" />
            <button onClick={onLogin}>Login</button>
        </form>
    );
}

export default LoginPage