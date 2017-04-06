import React, {Component, render} from 'react';

export default class AppHeader extends Component {
    constructor() {
        super()
    }

    render() {
        return  <header className="app-header">
                    <div className="app-header__inner">
                        Header
                    </div>
                 </header>
    }
}