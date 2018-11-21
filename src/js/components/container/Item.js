import React, { Component } from 'react';
import axios from 'axios';
import loadingImg from '../../../../images/loading.gif';

export default class Rewards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    getRewards() {
        axios.get('http://localhost:5000/api/rewards/' + this.props.rep)
            .then((resp) => {
                this.setState({
                    loading: false,
                    rewards: resp.data
                });
            })
            .catch((err) => {
                //TODO
                console.log(err);
            })
    }

    render() {
        if (this.state.loading) {
            return (
                <img style={{ margin: '0 auto' }} className="img-responsive center-block" src={loadingImg} alt="loading..." width="200" />
            );
        }
        return (
            <div><a href={'https://www.wowhead.com/item=' + this.props.id}>{this.props.name}</a></div>
        );
    }
           
}