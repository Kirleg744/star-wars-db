import React from "react";
import './with-data.css'
import { Component } from "react";
import Spinner from "../spinner/spinner";
const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
        };

        componentDidMount() {
            getData().then((data) => {
                this.setState({ data });
            });
        }

        render() {
            const { data } = this.state;

            if (data === null) {
                return <Spinner />;
            }
            return <View {...this.props} data={data} />;
        }
    };
};

export default withData
