import React, {Component, render} from 'react'
import HeaderMenuButton from './header-menu-button'

export default class AppMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobile: false,
            opened: false
        }
    } 

    componentWillReceiveProps(nextProps) {
        console.log(`nextProps received`,nextProps)
        this.setState({
            opened: nextProps.opened
        })
        
    }

    render() {
        const style = {
            transform: 'translateX(200%)' 
        }

        if(this.state.opened) {
            style.transform = 'translateX(0%)'
        } else {
            style.transform = 'translateX(200%)'
        }

        return <div style={style} className="app-menu-wrapper">
                <HeaderMenuButton handleMenuClick={this.props.handleCloseClicked} iconType="close"></HeaderMenuButton>
                <ul className="app-menu">
                    <li className="app-menu__item">
                        Home
                    </li>
                    <li className="app-menu__item">
                        Portfolio
                    </li>

                </ul>            
        </div>
    }
} 