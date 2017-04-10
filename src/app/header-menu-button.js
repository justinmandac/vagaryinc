import React, {Component} from 'react'
import 'file-loader!img/menu.svg'
import 'file-loader!img/CLOSE.svg'


export default class HeaderMenuButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pressed: false,
            visible: true
        }
    }

    render() {
        const style = {
            height: '64px',
            width: '64px',
            padding: '8px',
            float: 'right',
            display: 'flex'
        }

        const iconStyle = {
            cursor: 'pointer',
            margin: 'auto',
            width: '24px',
            height: '24px'
        }

        const type = this.props.iconType || 'menu'
        let button

        if(type === 'menu') {
            button = <img src="img/menu.svg" height="100%" width="100%"/>
        } else {
            button = <img src="img/CLOSE.svg" height="100%" width="100%"/>
        }

        return <div style={style} className="app-header__menu-button">
           <div style={iconStyle}
                onClick={this.props.handleMenuClick} 
                className="app-header__menu-button__inner app-header__menu-icon">
                {button}
           </div>
        </div>
    }
}