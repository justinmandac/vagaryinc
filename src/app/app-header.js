import React, {Component, render} from 'react'
import HeaderLogo from './header-logo'

export default class AppHeader extends Component {
    constructor() {
        super()
        this.state = {
            menuOpened: false
        }
    }

    render() {
        return  <header className="app-header">
                    <div className="app-header__inner">
                        <HeaderLogo></HeaderLogo>
                    </div>
                 </header>
    }
}