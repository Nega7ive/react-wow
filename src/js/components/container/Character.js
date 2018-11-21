import React, { Component } from 'react';
import Reputation from './Reputation.js';
import axios from 'axios';
import loadingImg from '../../../../images/loading.gif';

export default class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            characters: [],
            allowedCharacters: ['Estti-Alonsus', 'Dantes-Stormscale', 'Dantezz-Alonsus']
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/oauth-token')
            .then((resp) => {
                this.token = resp.data.access_token;
                axios.post('http://localhost:5000/api/characters', { token: this.token })
                    .then((resp) => {
                        this.setState({ 
                            loading: false,
                            characters: resp.data.characters
                        });
                    })
                    .catch((err) => {
                        //error, no characters found
                    })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    classKeytoText(key) {
        switch (key) {
            case 0:
            default:
                return 'N/A';
            case 1:
                return 'Warrior';
            case 2:
                return 'Paladin';
            case 3:
                return 'Hunter';
            case 4:
                return 'Rogue';
            case 5:
                return 'Priest';
            case 6:
                return 'Death Knight';
            case 7:
                return 'Shaman';
            case 8:
                return 'Mage';
            case 9:
                return 'Warlock';
            case 10:
                return 'Monk';
            case 11:
                return 'Druid';
            case 12:
                return 'Daemon Hunter';
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <img style={{margin:'0 auto'}} className="img-responsive center-block" src={loadingImg} alt="loading..." width="200"/>
            );
        }
        return (
            <div className="row">
            {this.state.characters.map((character) => {
                if (this.state.allowedCharacters.indexOf(character.name + '-' + character.realm) !== -1) {
                    return (
                        <div className="col-md-4">
                            <p>
                                <strong>{character.name}</strong> (lvl {character.level} {this.classKeytoText(character.class)})
                            </p>
                            <p>
                                Last Modified: {new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(character.lastModified)}
                            </p>
                            <Reputation realm={character.realm} character={character.name}/>
                        </div>
                    );
                }
            })}
            </div>
        );
    }
}