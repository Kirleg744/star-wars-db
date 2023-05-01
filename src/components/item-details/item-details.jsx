import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import "./item-details.css";
import error500 from './error500.jpg'


const Record = ({item, field, label}) => {
    return (
        <li className="info__list-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
}

export {
    Record
}

export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: {},
        loading: true,
        chosen: false,
        imageUrl: null,
    };

    componentDidMount() {
        this.updateItem();
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (itemId === null) {
            return;
        }
        getData(itemId).then((item) => {
            this.setState({
                item,
                chosen: true,
                loading: false,
                imageUrl: getImageUrl(item),
            });
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({ loading: true });
            this.updateItem();
        }
    }
    render() {
        const { name, id } = this.state.item;
        const { imageUrl, item } = this.state;

        if (this.state.loading && this.state.chosen) {
            return <Spinner />;
        }

        if (!this.state.chosen) {
            return (
                <div className="align-items-center justify-content-center d-flex info">
                    <span>Выберите персонажа</span>
                </div>
            );
        }

        return (
            <div className="info d-flex">
                <img
                    src={imageUrl}
                    alt='ОШИБКА СЕРВЕРА'
                    className="info__img item__img"
                />
                <div className="info__descr">
                    <span className="info__name">
                        {name} {id}
                    </span>
                    <ul className="info__list">
                        {React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item });
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
