import React, { Component } from "react";
import axios from 'axios';
import Rewards from './Rewards';

export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      repId: null
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/oauth-token')
      .then((resp) => {
          this.token = resp.data.access_token;

          const characters = [];
          axios.post('http://localhost:5000/api/reputations/Alonsus/Dantezz', {token: this.token})
          .then((resp) => {
              characters[resp.data.name] = resp.data;
              this.setState({ characters });
          })
          .catch((err) => {
              //TODO
              console.warn(err);
          });
          axios.post('http://localhost:5000/api/reputations/Stormscale/Dantes', {token: this.token})
          .then((resp) => {
              characters[resp.data.name] = resp.data;
              this.setState({ characters });
          })
          .catch((err) => {
              //TODO
              console.warn(err);
          });
      })
      .catch((err) => {
          console.log(err);
      });
  }

  standingKeyToText(key) {
    switch (key) {
      case 0:
      default:
        return 'Hated';
      case 1:
        return 'Hostile';
      case 2:
        return 'Unfriendly';
      case 3:
        return 'Neutral';
      case 4:
        return 'Friendly';
      case 5:
        return 'Honored';
      case 6:
        return 'Revered';
      case 7:
        return 'Exalted';
    }
  }

  classKeytoText(key) {
    switch (key) {
      case 0:
      default:
        return 'todo';
      case 1:
        return 'Warrior';
      case 2:
        return 'todo';
      case 3:
        return 'todo';
      case 4:
        return 'Rogue';
      case 5:
        return 'todo';
      case 6:
        return 'todo';
      case 7:
        return 'todo';
    }
  }

  calculatePercentage(rep) {
    if(!rep.max) {
      return 100;
    }
    return rep.value / rep.max * 100;
  }

  defineRepColor(repType) {
    switch (repType) {
      case 0:
      case 1:
      case 2:
      default:
        return 'danger';
      case 3:
        return 'warning';
      case 4:
      case 5:
      case 6:
      case 7:
        return 'success';
    }
  }

  render() {
    return (
      <div className="row">
      {
        Object.keys(this.state.characters).map(name => {
          return (
            <div className="col-md-4">
              <p>
                <strong>{name}</strong> (lvl {this.state.characters[name].level} {this.classKeytoText(this.state.characters[name].class)})
              </p>
              <p>
                Last Modified: {new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(this.state.characters[name].lastModified)}
              </p>
              <div id="accordion">
              {
                this.state.characters[name].reputation.map(rep => {
                  return (
                    <div className="card">
                      <div className="card-header" id={'heading' + name + rep.id}>
                        <div>{rep.name}</div>
                        <div className="progress position-relative">
                          <div className={'progress-bar bg-' + this.defineRepColor(rep.standing)} role="progressbar" 
                                style={{width:this.calculatePercentage(rep)+'%'}} aria-valuenow="{rep.value}" aria-valuemin="0" aria-valuemax="{rep.max}">
                          </div>
                          <small className="font-weight-bold justify-content-center d-flex position-absolute w-100">
                            {this.standingKeyToText(rep.standing)} ({rep.value} / {rep.max})
                          </small>
                        </div>
                        <button onClick={() => this.setState({repId: rep.id})} className="btn btn-link collapsed" data-toggle="collapse" data-target={'#collapse' + name + rep.id} aria-expanded="false" aria-controls={'collapse' + name + rep.id}>
                          Rewards
                        </button>
                      </div>
                      <div id={'collapse' + name + rep.id} className="collapse" aria-labelledby={'heading' + name + rep.id} data-parent="#accordion">
                        <div className="card-body">
                          {this.state.repId === rep.id && 
                            <Rewards rep={rep.id}/>
                          }
                        </div>
                      </div>
                    </div>
                  );
                })
              }
              </div>
            </div>
          );
        })
      }
      </div>
    );
  }
}