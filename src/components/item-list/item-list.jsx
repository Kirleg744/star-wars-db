import React from "react";
import './item-list.css'
const ItemList = () => {
	return (
        <div className="item-list">
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item">Luke Skywalker</li>
                    <li className="list-group-item">Darth Waider</li>
                    <li className="list-group-item">R2-D2</li>
                </ul>
            </div>
        </div>
    );
};

export default ItemList