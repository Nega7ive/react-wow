import React, { Component } from 'react';

export default class Rewards extends Component {
    constructor(props) {
        super(props);
    }

    getRewards() {
        axios.get('http://localhost:5000/api/rewards/' + this.props.rep)
            .then((resp) => {
                const rewards = resp.data;
                this.setState({ rewards });
            })
            .catch((err) => {
                //TODO
                console.log(err);
            })
    }

    render() {
        return (
            <div>{this.props.name}</div>
        );
    }
           
}