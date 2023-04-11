import React from "react";
import './row.css'
const Row = ({ left, right }) => {
    return (
        <div className="d-flex mt-3">
            <div className="item-list">{left}</div>
            <div className="info item-details">{right}</div>
        </div>
    );
};

export default Row
