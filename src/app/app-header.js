import React, {Component} from 'react'
import HeaderLogo from './header-logo'
import HeaderMenuButton from './header-menu-button'
import AppMenu from './app-menu'

export default class AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpened: false
        }
    }

    handleMenuClick = () => {
        this.setState({
            menuOpened: !this.state.menuOpened
        })
        this.props.menuChangedCallback(!this.state.menuOpened)
    }

    render() {
        return  <div className="app-header-wrapper">
                    <header className="app-header">
                        <div className="app-header__inner clearfix">
                            <HeaderLogo width="64" height="64"></HeaderLogo>
                            <HeaderMenuButton handleMenuClick={this.handleMenuClick}>
                            </HeaderMenuButton>
                        </div>
                    </header>
                 <AppMenu opened={this.state.menuOpened} handleCloseClicked={this.handleMenuClick}></AppMenu>
        </div>

    }
}