import React, { Component } from 'react';
import Item from './Item.js';
import axios from 'axios';
import loadingImg from '../../../../images/loading.gif';

export default class Rewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rewards: []
    };
    this.getRewards();
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
        //error, no rewards found
      })
  }

  render() {
      if (this.state.loading) {
        return (
          <img style={{ margin: '0 auto' }} className="img-responsive center-block" src={loadingImg} alt="loading..." width="200" />
        );
      }
      if (!Object.keys(this.state.rewards).length) {
        return (
          <p>
            No rewards found for this faction.
            You can check <a target="_blank" href={'https://www.wowhead.com/faction=' + this.props.rep}>the wowhead link</a> to this faction.
          </p>
        );
      }
      return (
          <div className="rewards">
          {
            Object.keys(this.state.rewards).map(standing => {
              return (
                <div>
                  <h5>{standing}</h5>
                  {
                    this.state.rewards[standing].map(item => {
                      return (
                        <Item id={item.id} name={item.name} />
                      )
                    })
                  }
                </div>
              )
            })
          }
          </div>
      );
  }
}