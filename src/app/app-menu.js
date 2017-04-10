import React, {Component} from 'react'
import HeaderMenuButton from './header-menu-button'
import MenuItems from './data/menu-items'


const menuItem = (item, key) => <li key={key} className="app-menu__item">{item.title}</li>

export default class AppMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobile: false,
            opened: false
        }
    } 

    componentWillReceiveProps(nextProps) {
        console.log('nextProps received', nextProps)
        this.setState({
            opened: nextProps.opened
        })
        
    }

    render() {
        const style = {
            transform: 'translateX(200%)' 
        }
        const items = MenuItems.map(menuItem)

        if(this.state.opened) {
            style.transform = 'translateX(0%)'
        } else {
            style.transform = 'translateX(200%)'
        }
        

        return <div style={style} className="app-menu-wrapper">
                <div className="button-row clearfix">
                    <HeaderMenuButton handleMenuClick={this.props.handleCloseClicked} iconType="close"></HeaderMenuButton>
                </div>
                <ul className="app-menu">                    
                    {items}
                </ul>            
        </div>
    }
} 