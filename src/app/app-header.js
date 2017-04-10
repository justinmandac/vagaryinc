import React, {Component, render} from 'react'
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
        this.props.menuChangedCallback(this.state);
        this.setState({
            menuOpened: !this.state.menuOpened
        })        
    }

    render() {
        return  <div className="app-header-wrapper">
                    <header className="app-header">
                        <div className="app-header__inner">
                            <HeaderLogo width="64" height="64"></HeaderLogo>
                            <HeaderMenuButton handleMenuClick={this.handleMenuClick}>                                
                            </HeaderMenuButton>
                        </div>
                    </header>
                 <AppMenu opened={this.state.menuOpened} handleCloseClicked={this.handleMenuClick}></AppMenu>            
        </div>
                 
    }
}