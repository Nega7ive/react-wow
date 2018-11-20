import React, { Component } from 'react';
import Item from './Item.js';
import axios from 'axios';

export default class Rewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rewards: []
    };
    this.getRewards();
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
          <div className="rewards">
          {
            Object.keys(this.state.rewards).map(standing => {
              return (
                <div>
                  <h4>{standing}</h4>
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