import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className="siteInfo">
                    <h1 className="App-title">Reputation Helper</h1>
                </div>
                <hr/>
            </header>
        );
    }
}